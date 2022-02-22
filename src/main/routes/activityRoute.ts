import { routeAdapter } from '@/main/adapters/routeAdapter'
import {
  makeActivityController,
  makeDeleteActivityController,
  makeGetActivityController,
  makeUpdateActivityController,
  makeViewActivityController,
} from '@/main/factories/controller/activityController'
import { Router } from 'express'

const baseRoute = '/activity'
export default (router: Router): void => {
  router.get(baseRoute, routeAdapter(makeGetActivityController()))
  router.post(`${baseRoute}/create`, routeAdapter(makeActivityController()))
  router.delete(
    `${baseRoute}/delete/:id`,
    routeAdapter(makeDeleteActivityController())
  )
  router.put(
    `${baseRoute}/update/:id`,
    routeAdapter(makeUpdateActivityController())
  )

  router.get(`${baseRoute}/view`, routeAdapter(makeViewActivityController()))
}
