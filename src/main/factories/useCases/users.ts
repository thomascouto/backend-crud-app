import { makePGDB } from '@/main/factories/db/pgRepository'
import { DI } from '@/main/config/mikro-orm.pg'
import {
  UseCase,
  GetUseCase,
  DeleteUseCase,
  UpdateUseCase,
  CreateUseCase,
} from '@/domain/usecases'
import { User } from '@/domain/entities'

const makeDB = () => makePGDB(DI.usersRepository)

export const createUserUseCase = (): UseCase<User> =>
  new CreateUseCase<User>(makeDB())

export const listUserUseCase = (): UseCase<User> =>
  new GetUseCase<User>(makeDB())

export const deleteUserUseCase = (): UseCase<User> =>
  new DeleteUseCase<User>(makeDB())

export const updateUserUseCase = (): UseCase<User> =>
  new UpdateUseCase<User>(makeDB())
