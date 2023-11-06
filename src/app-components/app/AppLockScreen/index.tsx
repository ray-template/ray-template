/**
 *
 * @author Ray <https://github.com/XiaoDaiGua-Ray>
 *
 * @date 2023-05-13
 *
 * @workspace ray-template
 *
 * @remark 今天也是元气满满撸代码的一天
 */

/**
 *
 * 这里没有做解锁密码校验, 只要符合校验规则值皆可
 * 可以根据需求自行更改
 */

import './index.scss'

import { NModal } from 'naive-ui'
import LockScreen from './components/LockScreen'
import UnlockScreen from './components/UnlockScreen'

import useAppLockScreen from '@/app-components/app/AppLockScreen/appLockVar'
import { useSettingGetters } from '@/store'

const AppLockScreen = defineComponent({
  name: 'AppLockScreen',
  setup() {
    const { getLockScreenSwitch } = useSettingGetters()

    const { getLockAppScreen } = useAppLockScreen()

    return {
      getLockScreenSwitch,
      getLockAppScreen,
    }
  },
  render() {
    return (
      <NModal
        v-model:show={this.getLockScreenSwitch}
        transformOrigin="center"
        show
        autoFocus={false}
        maskClosable={false}
        closeOnEsc={false}
        preset={!this.getLockAppScreen() ? 'dialog' : void 0}
        title="锁定屏幕"
      >
        <div class="app-lock-screen__content">
          {!this.getLockAppScreen() ? <LockScreen /> : <UnlockScreen />}
        </div>
      </NModal>
    )
  },
})

export default AppLockScreen
