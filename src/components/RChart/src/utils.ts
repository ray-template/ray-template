/**
 *
 * @author Ray <https://github.com/XiaoDaiGua-Ray>
 *
 * @date 2023-07-22
 *
 * @workspace ray-template
 *
 * @remark 今天也是元气满满撸代码的一天
 */

import { useTheme } from '@/hooks'

import type {
  ChartThemeRawArray,
  ChartThemeRawModules,
  LoadingOptions,
} from '@/components/RChart/src/types'

/**
 *
 * @see https://echarts.apache.org/zh/theme-builder.html
 *
 * @description
 * 自动注册所有主题。
 *
 * 默认以文件名当作主题名称。
 *
 * 主题编辑器使用方法:
 * 1. 配置、选择主题
 * 2. 点击下载主题
 * 3. 选择 json 类型，然后复制
 * 4. 在 echart-themes 包中创建对应的 json 文件，文件名为主题名称
 */
export const setupChartTheme = () => {
  // 获取所有主题
  const themeRawModules: Record<string, ChartThemeRawModules> =
    import.meta.glob('@/app-config/echart-themes/**/*.json', {
      eager: true,
    })
  const regex = /\/([^/]+)\.json$/

  const rawThemes = Object.keys(themeRawModules).reduce((pre, curr) => {
    const name = curr.match(regex)?.[1]

    if (name) {
      pre.push({
        name,
        theme: themeRawModules[curr].default,
      })

      return pre
    } else {
      throw new Error(`[RChart Theme Error]: name ${curr} is invalid!`)
    }
  }, [] as ChartThemeRawArray[])

  return rawThemes
}

/**
 *
 * @param options 加载自定义配置项
 *
 * @description
 * chart 加载配置项。
 *
 * @see https://echarts.apache.org/zh/api.html#echartsInstance.showLoading
 *
 * @example
 * const options = loadingOptions({ ...LoadingOptions })
 */
export const loadingOptions = (options?: LoadingOptions) => {
  const { getAppTheme } = useTheme()
  const { theme } = getAppTheme()

  return Object.assign(
    {},
    {
      text: 'loading',
      color: '#c23531',
      textColor: theme ? '#fff' : '#000',
      maskColor: theme ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
      zlevel: 0,
      fontSize: 12,
      showSpinner: true,
      spinnerRadius: 10,
      lineWidth: 5,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'sans-serif',
    },
    options,
  )
}
