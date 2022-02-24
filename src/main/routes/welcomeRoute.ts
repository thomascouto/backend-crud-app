import { Router } from 'express'

export const router = Router()

export default (router: Router): void => {
  router.get('/', (req, res) => {
    res.json('Welcome!')
  })
}
