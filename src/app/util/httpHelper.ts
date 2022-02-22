import { HttpResponse } from "./httpResponse"

export const err = <T extends Error>(code: number, error: T): HttpResponse => ({
  statusCode: code,
  body: {
    name: error.name,
    message: error.message,
    stack: error.stack,
  },
})

export const ok = (code?: number, data?: any): HttpResponse => ({
  statusCode: code ?? 204,
  body: data,
})
