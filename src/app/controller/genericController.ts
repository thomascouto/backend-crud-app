import { BaseEntity } from '@/domain/entities'
import { UseCase } from '@/domain/usecases'
import { ok, err } from '@/app/util/httpHelper'
import { HttpResponse } from '@/app/util/httpResponse'
import { Request } from 'express'
import { Controller } from './controller'

export class GenericController<U extends BaseEntity> implements Controller {
  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data = await this.useCase.perform(request)
      return ok(200, data)
    } catch (error: any) {
      return err(500, error)
    }
  }

  constructor(private useCase: UseCase<U>) {}
}
