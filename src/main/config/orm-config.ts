import { User, Activity, BaseEntity } from '@/domain/entities'
import { MikroORM } from '@mikro-orm/core'

export default {
  migrations: {
    path:
      process.env.TS_NODE_DEV === undefined
        ? 'src/migrations'
        : 'dist/migrations',
  },
  // in case of local use, just comment line 17-19
  // you must uncomment the following lines to deploy in Heroku
  driverOptions: {
    connection: { ssl: { rejectUnauthorized: false } },
  },
  type: 'postgresql',
  entities: [User, Activity, BaseEntity],
  host: process.env.PG_HOST,
  dbName: process.env.PG_DB,
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  debug: true,
  logger: (message: string) => console.info('MikroORM @', message),
} as Parameters<typeof MikroORM.init>[0]
