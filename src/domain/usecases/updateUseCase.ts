import { DataBaseRepository } from '@/db/dbRepository'
import { BaseEntity } from '@/domain/entities'
import { Request } from 'express'
import { UseCase } from './usecase'

export class UpdateUseCase<U extends BaseEntity> extends UseCase<U> {
  async perform(req: Request): Promise<U> {
    const { params, body } = req
    return await this.dbRepository.update(params, body)
  }

  constructor(dbRepository: DataBaseRepository<U>) {
    super(dbRepository)
  }
}
