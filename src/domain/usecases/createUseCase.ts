import { DataBaseRepository } from '@/db/dbRepository'
import { BaseEntity } from '@/domain/entities'
import { Request } from 'express'
import { UseCase } from './usecase'

export class CreateUseCase<U extends BaseEntity> extends UseCase<U> {
  async perform(req: Request, entity?: U | undefined): Promise<U> {
    if (entity) {
      entity.props = req.body
      return await this.dbRepository.add(entity)
    }
    throw new Error(`Entity must be informed at ${__filename}`)
  }

  constructor(dbRepository: DataBaseRepository<U>) {
    super(dbRepository)
  }
}
