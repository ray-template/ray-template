import type { DropdownOption } from 'naive-ui'
import type { ComputedRef, Ref } from 'vue'

export interface IconEventMapOptions {
  [propName: string]: (...args: unknown[]) => unknown
}

export type IconEventMap = keyof IconEventMapOptions

export interface IconDropdownOptions extends UnknownObjectKey {
  event?: string
  switch: boolean
  options: DropdownOption[]
  eventKey?: string
}

export interface IconOptions {
  name: string
  size?: number
  tooltip?: ComputedRef<string> | string
  eventKey?: string
  dropdown?: IconDropdownOptions
  iconClass?: string
}

export interface IconOptionsFC {
  isTabletOrSmaller: Ref<boolean>
  isFullscreen: Ref<boolean>
  globalMainLayoutLoad: Ref<boolean>
}
