import { CreateActivityController } from '@/app/controller/activity/createActivityController'
import { Controller } from '@/app/controller/controller'
import { GenericController } from '@/app/controller/genericController'
import {
  createActivityUseCase,
  listActivityUseCase,
  deleteActivityUseCase,
  updateActivityUseCase,
  viewActivityUseCase,
} from '../useCases/activity'

export const makeActivityController = (): Controller =>
  new CreateActivityController(createActivityUseCase())

export const makeGetActivityController = (): Controller =>
  new GenericController(listActivityUseCase())

export const makeDeleteActivityController = (): Controller =>
  new GenericController(deleteActivityUseCase())

export const makeUpdateActivityController = (): Controller =>
  new GenericController(updateActivityUseCase())

export const makeViewActivityController = (): Controller =>
  new GenericController(viewActivityUseCase())
