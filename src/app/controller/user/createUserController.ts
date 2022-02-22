import { User } from '@/domain/entities'
import { UseCase } from '@/domain/usecases'
import { err, ok } from '@/app/util/httpHelper'
import { HttpResponse } from '@/app/util/httpResponse'
import { Request } from 'express'
import { Controller } from '../controller'

export class CreateUserController implements Controller {
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const { username, password } = req.body
      const user = new User({ username, password })
      const result = await this.useCase.perform(req, user)
      return ok(201, result)
    } catch (error: any) {
      return err(500, error)
    }
  }

  constructor(private useCase: UseCase<User>) {}
}
