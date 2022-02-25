import './main/config/moduleAlias'
import express, { NextFunction, Request, Response } from 'express'
import { RequestContext } from '@mikro-orm/core'
import { initializeORM } from './main/config/mikro-orm.pg'
import { setupRoutes } from './main/config/setupRoutes'
import { err } from './app/util/httpHelper'
// import cors from 'cors'

const port = process.env.SERVER_PORT || 3000

;(async () => {
  const app = express()
  const DI = await initializeORM()

  // app.use(cors())
  app.use(express.json())
  app.use((req: Request, res: Response, next: NextFunction) =>
    RequestContext.create(DI.em, next)
  )
  app.use(express.urlencoded({ extended: false }))
  setupRoutes(app)
  app.use((req: Request, res: Response) =>
    res.status(404).json(err(404, new Error('Route not found.')))
  )

  app.listen(port, () => {
    console.info(`Server listening on ${process.env.SERVER_HOST}@${port}`)
  })
})()
