/// <reference types="vite/client" />

interface IReturnType<T> {
  result: T
  code: string
  msg: string
}

declare module 'element-plus/es/components/index.js'
declare module 'element-plus'
