import { Request } from 'express'
import { UseCase } from './usecase'
import { DataBaseRepository } from '@/db/dbRepository'
import { Activity } from '@/domain/entities'

export class ViewActivityUseCase<U extends Activity> extends UseCase<U> {
  async perform(req: Request): Promise<U> {
    return this.dbRepository.view()
  }

  constructor(dbRepository: DataBaseRepository<U>) {
    super(dbRepository)
  }
}
