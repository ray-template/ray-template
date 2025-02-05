import { OperatingSystem } from '@/types'

import type {
  ValidateValueType,
  DownloadAnyFileDataType,
  BasicTypes,
  AnyFC,
} from '@/types'

/**
 *
 * @description
 * 获取当前项目环境。
 *
 * 如果你只是想单纯的判断是否为开发环境，可以直接使用: __DEV__。
 *
 * @example
 * 是否为开发环境: __DEV__
 *
 * @example
 * // 获取 BASE_URL
 * const { BASE_URL } = getAppEnvironment()
 * // 获取 MODE，当前环境
 * const { MODE } = getAppEnvironment()
 * // 是否启用 SSR
 * const { SSR } = getAppEnvironment()
 * // 获取你自定义的配置项
 * const { your config } = getAppEnvironment()
 */
export const getAppEnvironment = () => {
  const env = import.meta.env

  return env
}

/**
 *
 * @param data 二进制流数据
 *
 * @description
 * 将二进制流数据转换为 base64 图片。
 *
 * @example
 * const Image = arrayBufferToBase64Image('base64')
 */
export const arrayBufferToBase64Image = (data: ArrayBuffer) => {
  const base64 =
    'data:image/png;base64,' +
    window.btoa(
      new Uint8Array(data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        '',
      ),
    )

  return base64
}

/**
 *
 * @param base64 base64
 * @param fileName file name
 *
 * @description
 * 该方法仅能下载 base64 文件，如果有其他的文件类型需要下载，请看 downloadAnyFile 方法。
 *
 * @example
 * downloadBase64File('base64', 'file name')
 */
export const downloadBase64File = (base64: string, fileName: string) => {
  const link = document.createElement('a')

  link.href = base64
  link.download = fileName

  link.style.display = 'none'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 *
 * @param value 目标值
 * @param type 类型
 *
 * @example
 * isValueType<string>('123', 'String') // true
 * isValueType<object>({}, 'Object') // true
 * isValueType<number>([], 'Array') // true
 * isValueType<number>([], 'Object') // false
 * isValueType<undefined>(undefined, 'Undefined') // true
 * isValueType<null>(null, 'Null') // true
 */
export const isValueType = <T extends BasicTypes>(
  value: unknown,
  type: ValidateValueType,
): value is T => {
  const valid = Object.prototype.toString.call(value)

  return valid.includes(type)
}

/**
 *
 * @param length uuid 长度
 * @param radix uuid 基数
 *
 * @description
 * 生成指定长度的 uuid。
 *
 * @example
 * uuid(8) => 'B8tGcl0FCKJkpO0V'
 */
export const uuid = (length = 16, radix = 62) => {
  // 定义可用的字符集，即 0-9, A-Z, a-z
  const availableChars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  // 定义存储随机字符串的数组
  const arr: string[] = []
  // 获取加密对象，兼容 IE11
  const cryptoObj = window.crypto || window.msCrypto
  let i = 0

  // 循环 length 次，生成随机字符，并添加到数组中
  for (i = 0; i < length; i++) {
    // 生成一个随机数
    const randomValues = new Uint32Array(1)

    cryptoObj.getRandomValues(randomValues)

    // 根据随机数生成对应的字符，并添加到数组中
    const index = randomValues[0] % radix

    arr.push(availableChars[index])
  }

  // 将数组中的字符连接起来，返回最终的字符串
  return arr.join('')
}

/**
 *
 * @param data base64, Blob, ArrayBuffer type
 * @param fileName file name
 *
 * @description
 * 支持下载任意类型的文件，包括 base64, Blob, ArrayBuffer。
 *
 * @example
 * downloadAnyFile('base64', 'file name')
 * downloadAnyFile('Blob', 'file name')
 */
export const downloadAnyFile = (
  data: DownloadAnyFileDataType,
  fileName: string,
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    let blobData!: Blob

    try {
      if (typeof data === 'string') {
        downloadBase64File(data, fileName)

        return resolve()
      }

      if (data instanceof ArrayBuffer) {
        blobData = new Blob([new Uint8Array(data)], {
          type: 'application/octet-stream',
        })
      } else if (data instanceof File || data instanceof Blob) {
        blobData = data
      } else {
        return reject(new Error('downloadAnyFile: Unsupported data type.'))
      }

      const url = URL.createObjectURL(blobData)
      const link = document.createElement('a')

      link.href = url
      link.download = fileName
      link.style.display = 'none'

      const remove = () => {
        URL.revokeObjectURL(url)
        document.body.removeChild(link)
      }

      link.addEventListener('load', () => {
        remove()

        return resolve()
      })
      link.addEventListener('error', (error) => {
        remove()

        return reject(error)
      })

      document.body.appendChild(link)
      link.click()

      return resolve()
    } catch (error) {
      return reject(error)
    }
  })
}

/**
 *
 * @param file file object
 *
 * @description
 * 将 File 文件对象转换为 base64。
 *
 * @example
 * const base64 = await fileToBase64(file) // 'data:image/png;base64,...'
 */
export const fileToBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve(reader.result as string)
    }

    reader.onerror = (error) => {
      reject(error)
    }

    reader.readAsDataURL(file)
  })
}

/**
 *
 * @param func 待判断的函数
 * @returns 是否为 async 函数
 *
 * @description
 * 判断是否为 async 函数。
 *
 * @example
 * isAsyncFunction(() => {}) // false
 * isAsyncFunction(async () => {}) // true
 * isAsyncFunction(function() {}) // false
 * isAsyncFunction(async function() {}) // true
 */
export const isAsyncFunction = <T>(func: T) => {
  return func instanceof Function && func.constructor.name === 'AsyncFunction'
}

/**
 *
 * @param value 待判断的值
 *
 * @description
 * 判断是否为 Promise 函数。
 *
 * @example
 * isPromise(Promise.resolve(123)) // true
 * isPromise(() => {}) // false
 * isPromise(123) // false
 * isPromise(async () => {}) // true
 */
export const isPromise = <T>(value: unknown): value is Promise<T> => {
  if (isAsyncFunction(value)) {
    return true
  }

  return (
    !!value &&
    (typeof value === 'object' || typeof value === 'function') &&
    typeof (value as Promise<T>).then === 'function'
  )
}

/**
 *
 * @param fn 正常执行的函数
 * @param errorCallback 错误回调
 * @param args 当前传递函数参数
 *
 * @description
 * 用于捕获函数执行时的错误，如果有错误，则执行错误回调。
 *
 * @example
 * callWithErrorHandling((x: number) => { return x }, () => {}, [123]) => 123
 * callWithErrorHandling((x: number) => { throw new Error('error') }, (error) => { console.log(error) }, [123]) => undefined
 */
export const callWithErrorHandling = <T extends AnyFC, E extends Error>(
  fn: T,
  errorCallback: AnyFC<E, void>,
  args?: Parameters<T>,
) => {
  let result: ReturnType<T> | undefined

  try {
    result = args ? fn(...args) : fn()
  } catch (error) {
    errorCallback(error as E)
  }

  return result
}

/**
 *
 * @param fn 正常执行的函数
 * @param errorCallback 错误回调
 * @param args 当前传递函数参数
 *
 * @description
 * 用于捕获异步函数执行时的错误，如果有错误，则执行错误回调。
 *
 * @example
 * callWithAsyncErrorHandling(async () => { console.log('A') }, () => {}, []) => Promise { undefined }
 * callWithAsyncErrorHandling(() => { throw new Error('error') }, (error) => { console.log(error) }, []) => undefined
 * callWithAsyncErrorHandling(async () => { return Promise.resolve('hello') }, () => {}, []) => Promise { 'hello' }
 */
export const callWithAsyncErrorHandling = async <
  T extends AnyFC,
  E extends Error,
>(
  fn: T,
  errorCallback: (error: E) => void,
  args?: Parameters<T>,
): Promise<ReturnType<T> | undefined> => {
  try {
    if (!isPromise(fn)) {
      return Promise.resolve(callWithErrorHandling(fn, errorCallback, args))
    }

    return await fn(...(args as Parameters<T>))
  } catch (error) {
    errorCallback(error as E)

    return void 0
  }
}

/**
 *
 * @description
 * 获取当前操作系统。
 *
 * 如果无法识别，则返回 Unknown。
 *
 * @example
 * detectOperatingSystem() // 'Windows' | 'MacOS' | 'Linux' | 'Android' | 'IOS' | 'Unknown'
 */
export const detectOperatingSystem = () => {
  const userAgent = navigator.userAgent

  if (/windows/i.test(userAgent)) {
    return OperatingSystem.Windows
  }

  if (/macintosh|mac os x/i.test(userAgent)) {
    return OperatingSystem.MacOS
  }

  if (/linux/i.test(userAgent)) {
    return OperatingSystem.Linux
  }

  if (/android/i.test(userAgent)) {
    return OperatingSystem.Android
  }

  if (/iphone|ipad|ipod/i.test(userAgent)) {
    return OperatingSystem.IOS
  }

  return OperatingSystem.Unknown
}

/**
 *
 * @param path1 待比较的路径1
 * @param path2 待比较的路径2
 *
 * @returns 比较两个路径是否相等
 *
 * @description
 * 判断两个路径是否相等，忽略最后的斜杠。
 *
 * @example
 * equal('/a/', '/a') // true
 * equal('/a', '/a') // true
 */
export const equalRouterPath = (path1: string, path2: string) => {
  const p1 = path1.split('?').filter(Boolean)[0]
  const p2 = path2.split('?').filter(Boolean)[0]
  const regex = /\/$/

  return p1.replace(regex, '') === p2.replace(regex, '')
}
