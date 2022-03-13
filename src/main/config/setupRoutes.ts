import { Router, Express } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

let CURRENT_DIR = join(__dirname, '../routes')
export const setupRoutes = (app: Express): void => {
  const router = Router()
  recursiveReading(CURRENT_DIR, router)
  app.use('/', router)
}

const recursiveReading = (dir: string, router: Router): void => {
  readdirSync(dir, { withFileTypes: true }).forEach(async (element) => {
    if (element.isFile()) {
      ;(await import(`${CURRENT_DIR}/${element.name}`)).default(router)
    } else {
      CURRENT_DIR = join(CURRENT_DIR, element.name)
      recursiveReading(CURRENT_DIR, router)
    }
  })
}
