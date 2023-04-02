import './index.scss'
import {
  NDrawer,
  NDrawerContent,
  NDivider,
  NSpace,
  NSwitch,
  NColorPicker,
  NDescriptions,
  NDescriptionsItem,
} from 'naive-ui'
import ThemeSwitch from '@/layout/components/SiderBar/components/SettingDrawer/components/ThemeSwitch/index'

import { useSwatchesColorOptions } from './hook'
import { useSetting } from '@/store'

import type { PropType } from 'vue'

const SettingDrawer = defineComponent({
  name: 'SettingDrawer',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String as PropType<NaiveDrawerPlacement>,
      default: 'right',
    },
    width: {
      type: Number,
      default: 280,
    },
  },
  emits: ['update:show'],
  setup(props, { emit }) {
    const { t } = useI18n()
    const settingStore = useSetting()

    const { changePrimaryColor, changeSwitcher } = settingStore
    const {
      themeValue,
      primaryColorOverride,
      menuTagSwitch,
      breadcrumbSwitch,
    } = storeToRefs(settingStore)

    const modelShow = computed({
      get: () => props.show,
      set: (bool) => {
        emit('update:show', bool)
      },
    })

    const handleRailStyle = () => ({
      backgroundColor: '#000000',
    })

    return {
      modelShow,
      t,
      handleRailStyle,
      changePrimaryColor,
      themeValue,
      primaryColorOverride,
      menuTagSwitch,
      changeSwitcher,
      breadcrumbSwitch,
    }
  },
  render() {
    const { t } = this

    return (
      <NDrawer
        v-model:show={this.modelShow}
        placement={this.placement}
        width={this.width}
      >
        <NDrawerContent title={t('LayoutHeaderSettingOptions.Title')}>
          <NSpace class="setting-drawer__space" vertical>
            <NDivider titlePlacement="center">
              {t('LayoutHeaderSettingOptions.ThemeOptions.Title')}
            </NDivider>
            <ThemeSwitch />
            <NDivider titlePlacement="center">
              {t('LayoutHeaderSettingOptions.ThemeOptions.PrimaryColorConfig')}
            </NDivider>
            <NColorPicker
              swatches={useSwatchesColorOptions()}
              v-model:value={this.primaryColorOverride.common!.primaryColor}
              onUpdateValue={this.changePrimaryColor.bind(this)}
            />
            <NDivider titlePlacement="center">界面显示</NDivider>
            <NDescriptions labelPlacement="left" column={1}>
              <NDescriptionsItem label="显示多标签">
                <NSwitch
                  v-model:value={this.menuTagSwitch}
                  onUpdateValue={(bool: boolean) =>
                    this.changeSwitcher(bool, 'menuTagSwitch')
                  }
                />
              </NDescriptionsItem>
              <NDescriptionsItem label="显示面包屑">
                <NSwitch
                  v-model:value={this.breadcrumbSwitch}
                  onUpdateValue={(bool: boolean) =>
                    this.changeSwitcher(bool, 'breadcrumbSwitch')
                  }
                />
              </NDescriptionsItem>
            </NDescriptions>
          </NSpace>
        </NDrawerContent>
      </NDrawer>
    )
  },
})

export default SettingDrawer
