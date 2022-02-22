import { BaseEntity } from '@/domain/entities'

export interface DataBaseRepository<U extends BaseEntity> {
  add(entity: U): Promise<U>
  findAll(): Promise<U[]>
  findOne(param: any): Promise<U>
  delete(param: any): Promise<U>
  update(param: any, newValues: any): Promise<U>
  view(): Promise<U>
}
