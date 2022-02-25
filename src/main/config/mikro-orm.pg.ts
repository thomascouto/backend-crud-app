import { User, Activity } from '@/domain/entities'
import { EntityManager, MikroORM } from '@mikro-orm/core'
import { EntityRepository } from '@mikro-orm/postgresql'
import data from './orm-config'

export const DI = {} as {
  orm: MikroORM
  em: EntityManager
  usersRepository: EntityRepository<User>
  activitiesRepository: EntityRepository<Activity>
}

export const initializeORM = async () => {
  DI.orm = await MikroORM.init(data)

  // Local use, uncomment the following lines
  // const migrator = DI.orm.getMigrator()
  // await migrator.createMigration()
  // await migrator.up()

  // ! Uncomment the following lines to drop/create the schema. Not needed if using migrations...
  // ! Dev env. only
  // const generator = DI.orm.getSchemaGenerator()
  // await generator.dropSchema()
  // await generator.createSchema()
  // await generator.updateSchema()

  DI.em = DI.orm.em
  DI.usersRepository = DI.orm.em.getRepository(User)
  DI.activitiesRepository = DI.orm.em.getRepository(Activity)
  return DI
}
