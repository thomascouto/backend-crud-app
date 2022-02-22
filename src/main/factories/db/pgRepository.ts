import { PostgresRepository } from '@/db/pgRepository'
import { BaseEntity } from '@/domain/entities'
import { EntityRepository } from '@mikro-orm/postgresql'

export const makePGDB = <U extends BaseEntity>(
  entityRepository: EntityRepository<U>
): PostgresRepository<U> => new PostgresRepository<U>(entityRepository)
