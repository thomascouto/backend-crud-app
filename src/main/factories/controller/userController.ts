import { Controller } from '@/app/controller/controller'
import { GenericController } from '@/app/controller/genericController'
import { CreateUserController } from '@/app/controller/user/createUserController'
import {
  createUserUseCase,
  deleteUserUseCase,
  listUserUseCase,
  updateUserUseCase,
} from '@/main/factories/useCases/users'

export const makeUserController = (): Controller =>
  new CreateUserController(createUserUseCase())

export const makeGetUsersController = (): Controller =>
  new GenericController(listUserUseCase())

export const makeDeleteUserController = (): Controller =>
  new GenericController(deleteUserUseCase())

export const makeUpdateUserController = (): Controller =>
  new GenericController(updateUserUseCase())
