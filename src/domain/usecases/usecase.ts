import { DataBaseRepository } from '@/db/dbRepository'
import { BaseEntity } from '@/domain/entities'
import { Request } from 'express'

export abstract class UseCase<U extends BaseEntity> {
  abstract perform(req: Request, entity?: U): Promise<U | U[]>
  protected dbRepository: DataBaseRepository<U>

  constructor(dbRepository: DataBaseRepository<U>) {
    this.dbRepository = dbRepository
  }
}
