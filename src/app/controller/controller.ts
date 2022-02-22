import { HttpResponse } from '@/app/util/httpResponse'
import { Request } from 'express'

export interface Controller {
  handle: (request: Request) => Promise<HttpResponse>
}
