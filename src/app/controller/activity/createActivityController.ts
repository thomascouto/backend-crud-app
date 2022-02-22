import { Activity } from '@/domain/entities'
import { UseCase } from '@/domain/usecases'
import { ok, err } from '@/app/util/httpHelper'
import { HttpResponse } from '@/app/util/httpResponse'
import { Request } from 'express'
import { Controller } from '../controller'

export class CreateActivityController implements Controller {
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const { name, userid } = req.body
      const activity = new Activity({ name, userid })
      const result = await this.useCase.perform(req, activity)
      return ok(201, result)
    } catch (error: any) {
      return err(500, error)
    }
  }

  constructor(private useCase: UseCase<Activity>) {}
}
