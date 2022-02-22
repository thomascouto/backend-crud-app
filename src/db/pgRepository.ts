import { BaseEntity } from '@/domain/entities'
import { EntityData, FilterQuery, Loaded, wrap } from '@mikro-orm/core'
import { DataBaseRepository } from './dbRepository'
import { EntityRepository } from '@mikro-orm/postgresql'

export class PostgresRepository<U extends BaseEntity>
  implements DataBaseRepository<U>
{
  async add(entity: U): Promise<U> {
    await this.entityRepository.persistAndFlush(entity)
    return entity
  }

  async findAll(): Promise<Loaded<U>[]> {
    return await this.entityRepository.qb().orderBy({ id: 'ASC' }).execute()
  }

  async findOne(param: FilterQuery<U>): Promise<Loaded<U>> {
    return await this.entityRepository.findOneOrFail(param)
  }

  async delete(param: FilterQuery<U>): Promise<U> {
    const entity: U = await this.findOne(param)
    await this.entityRepository.removeAndFlush(entity)
    return entity
  }

  async update(param: FilterQuery<U>, newValues: EntityData<U>): Promise<U> {
    let entity: U = await this.findOne(param)
    entity = wrap(entity).assign(newValues)
    await this.entityRepository.flush()
    return entity
  }

  async view(): Promise<U> {
    const qb = this.entityRepository
      .qb('a')
      .select(['a.*', 'u.username'])
      .leftJoin('userid', 'u')
    return await qb.execute()
  }

  constructor(private entityRepository: EntityRepository<U>) {}
}
