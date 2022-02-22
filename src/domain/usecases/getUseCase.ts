import { UseCase } from './usecase'
import { Request } from 'express'
import { DataBaseRepository } from '@/db/dbRepository'
import { BaseEntity } from '@/domain/entities'

export class GetUseCase<U extends BaseEntity> extends UseCase<U> {
  async perform(req: Request): Promise<U[]> {
    return await this.dbRepository.findAll()
  }

  constructor(dbRepository: DataBaseRepository<U>) {
    super(dbRepository)
  }
}
