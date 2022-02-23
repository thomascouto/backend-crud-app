import { User, Activity, BaseEntity } from '@/domain/entities'
import { MikroORM } from '@mikro-orm/core'

export default {
  migrations: {
    path: './src/migrations',
    tableName: 'migrations',
    transactional: true,
  },
  schemaGenerator: {
    disableForeignKeys: false,
    createForeignKeyConstraints: true,
  },
  type: 'postgresql',
  entities: [User, Activity, BaseEntity],
  dbName: process.env.PG_DB,
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  debug: false,
  logger: (message: string) => console.info('MikroORM @', message),
} as Parameters<typeof MikroORM.init>[0]
