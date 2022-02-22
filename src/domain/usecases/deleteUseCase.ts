import { UseCase } from './usecase'
import { Request } from 'express'
import { BaseEntity } from '@/domain/entities'
import { DataBaseRepository } from '@/db/dbRepository'

export class DeleteUseCase<U extends BaseEntity> extends UseCase<U> {
  async perform(req: Request): Promise<U> {
    const { params } = req
    return await this.dbRepository.delete(params)
  }

  constructor(dbRepository: DataBaseRepository<U>) {
    super(dbRepository)
  }
}
