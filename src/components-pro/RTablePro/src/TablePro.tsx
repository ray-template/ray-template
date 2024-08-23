/**
 *
 * @author Ray <https://github.com/XiaoDaiGua-Ray>
 *
 * @date 2024-05-10
 *
 * @workspace ray-template
 *
 * @remark 今天也是元气满满撸代码的一天
 */

import { RTable } from '@/components'

import props from './props'
import { useTable } from '@/components'
import { call } from '@/utils'
import { usePagination } from '@/hooks'

import type { TablePagination, TableRequestConfig, TableProInst } from './types'
import type { Recordable } from '@/types'

export default defineComponent({
  name: 'RTablePro',
  props,
  setup(props) {
    const [register, { getTableInstance }] = useTable()
    const [
      paginationRef,
      {
        getPage,
        getPageSize,
        setCallback,
        setItemCount,
        getPagination,
        resetPagination,
        getItemCount,
      },
    ] = usePagination(void 0, {
      prefix: (info) => `共 ${info.itemCount} 条`,
    })
    const tableRequestRef = computed(() => props.request)

    // 获取最新 statistics 和 pagination 值
    const update = (): TablePagination => {
      const pagination = getPagination()

      return {
        getItemCount,
        getPage,
        getPageSize,
      }
    }

    // 派发表格更新事件
    const emitTableUpdate = () => {
      const { onTablePaginationUpdate } = props

      if (onTablePaginationUpdate) {
        call(onTablePaginationUpdate, update())
      }
    }

    // 合并请求参数
    const combineRequestParams = (extraConfig?: TableRequestConfig) => {
      const config = Object.assign({}, props.requestConfig, extraConfig)

      const { params, formatRangeTime } = config

      // 转换时间范围，该功能仅支持 NDatePicker range 模式参数
      if (formatRangeTime?.length && params) {
        formatRangeTime.forEach((curr) => {
          const { key, target } = curr
          const val = params[key] as [number, number] | null

          if (val && target?.length) {
            const [start, end] = val

            params[target[0]] = start
            params[target[1]] = end
          } else {
            // 当传递时间参数被清空时，则清空对应 time key
            params[key] = null
            params[target[0]] = null
            params[target[1]] = null
          }
        })
      }

      const requestParams = Object.assign({}, params, {
        page: getPage(),
        pageSize: getPageSize(),
      })

      return requestParams
    }

    // 会重置 pagination 的请求
    const runResetPaginationRequest = (extraConfig?: TableRequestConfig) => {
      resetPagination()

      const requestParams = combineRequestParams(extraConfig)

      tableRequestRef.value?.(requestParams)
    }

    // 不会重置 pagination 的请求
    const runRequest = (extraConfig?: TableRequestConfig) => {
      const requestParams = combineRequestParams(extraConfig)

      tableRequestRef.value?.(requestParams)
    }

    watchEffect(() => {
      setItemCount(props.paginationCount)
      setCallback(() => {
        const { manual } = props

        if (!manual) {
          runRequest()
        }

        emitTableUpdate()
      })
    })

    onMounted(() => {
      const { onRegister } = props

      if (onRegister && getTableInstance()) {
        const {
          clearFilters,
          clearSorter,
          downloadCsv,
          filters,
          page,
          scrollTo,
          sort,
          filter,
          print,
        } = getTableInstance()

        call(onRegister, {
          getTablePagination: update,
          runTableRequest: runResetPaginationRequest,
          clearFilters,
          clearSorter,
          downloadCsv,
          filters,
          page,
          scrollTo,
          sort,
          filter,
          print,
          getCurrentTableRequestParams:
            combineRequestParams as TableProInst['getCurrentTableRequestParams'],
        })
      }
    })

    return {
      register,
      paginationRef,
    }
  },
  render() {
    const { register, $props, paginationRef, $slots } = this
    const { onRegister, showPagination, ...rest } = $props

    return (
      <RTable
        {...rest}
        onRegister={register}
        pagination={showPagination ? paginationRef : void 0}
      >
        {$slots}
      </RTable>
    )
  },
})
