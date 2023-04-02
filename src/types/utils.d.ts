export {}

import type CryptoJS from 'crypto-js'
import type { VNodeChild } from 'vue'

export global {
  declare interface IUnknownObjectKey {
    [propName: string]: unknown
  }

  declare type EventListenerOrEventListenerObject =
    | EventListener
    | EventListenerObject

  declare type ValidteValueType =
    | 'Number'
    | 'String'
    | 'Boolean'
    | 'Object'
    | 'Function'
    | 'Null'
    | 'Undefined'
    | 'Array'
    | 'Date'
    | 'Math'
    | 'RegExp'
    | 'Error'

  declare type WordArray = CryptoJS.lib.WordArray

  declare type CipherOption = CryptoJS.lib.CipherOption

  declare type CipherParams = CryptoJS.lib.CipherParams

  declare type VoidFunc = (...args: unknown[]) => void

  declare type AnyFunc = (...args: unknown[]) => unknown
}
