import { DI } from '@/main/config/mikro-orm.pg'
import { makePGDB } from '../db/pgRepository'
import {
  UseCase,
  GetUseCase,
  DeleteUseCase,
  UpdateUseCase,
  CreateUseCase,
  ViewActivityUseCase,
} from '@/domain/usecases'
import { Activity } from '@/domain/entities'

const makeDB = () => makePGDB(DI.activitiesRepository)

export const createActivityUseCase = (): UseCase<Activity> =>
  new CreateUseCase<Activity>(makeDB())

export const listActivityUseCase = (): UseCase<Activity> =>
  new GetUseCase<Activity>(makeDB())

export const deleteActivityUseCase = (): UseCase<Activity> =>
  new DeleteUseCase<Activity>(makeDB())

export const updateActivityUseCase = (): UseCase<Activity> =>
  new UpdateUseCase<Activity>(makeDB())

export const viewActivityUseCase = (): UseCase<Activity> =>
  new ViewActivityUseCase<Activity>(makeDB())
