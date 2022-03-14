import { Router, Express } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

const BASE_DIR = join(__dirname, '../routes')
export const setupRoutes = (app: Express): void => {
  const router = Router()
  recursiveReading(BASE_DIR, router)
  app.use('/', router)
}

const recursiveReading = (dir: string, router: Router): void => {
  readdirSync(dir, { withFileTypes: true }).forEach(async (element) => {
    if (element.isFile()) {
      ;(await import(`${dir}/${element.name}`)).default(router)
    } else if (element.isDirectory()) {
      recursiveReading(`${BASE_DIR}/${element.name}`, router)
    }
  })
}
