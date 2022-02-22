import { Router } from 'express'
import { routeAdapter } from '@/main/adapters/routeAdapter'
import {
  makeDeleteUserController,
  makeGetUsersController,
  makeUserController,
  makeUpdateUserController,
} from '@/main/factories/controller/userController'

const baseRoute = '/user'
export default (router: Router): void => {
  router.get(baseRoute, routeAdapter(makeGetUsersController()))
  router.post(`${baseRoute}/create`, routeAdapter(makeUserController()))
  router.delete(
    `${baseRoute}/delete/:id`,
    routeAdapter(makeDeleteUserController())
  )
  router.put(
    `${baseRoute}/update/:id`,
    routeAdapter(makeUpdateUserController())
  )
}
