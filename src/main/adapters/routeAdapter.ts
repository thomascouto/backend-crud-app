import { RequestHandler } from 'express'
import { Controller } from '@/app/controller/controller'

type Adapter = (controller: Controller) => RequestHandler

export const routeAdapter: Adapter = (controller) => async (req, res) => {
  const httpResponse = await controller.handle(req)
  res.status(httpResponse.statusCode).send(httpResponse)
}
