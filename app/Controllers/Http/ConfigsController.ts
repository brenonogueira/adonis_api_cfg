import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Config from 'App/Models/Config'

export default class ConfigsController {

  public async index ({}: HttpContextContract) {
    const config = await Config.all()
    return config
  }

  public async store ({ request, response }: HttpContextContract) {
    const dados = request.all()
    const configs = await Config.create(dados)
    return response.status(201).send(configs)
  }

  public async show ({ params }: HttpContextContract) {
    const config = await Config.find(params.id)
    return config
  }

  public async update ({ params, request, response }: HttpContextContract) {
    const config = await Config.findOrFail(params.id);
    const dados = request.all();
    config.merge(dados)
    await config.save()
    return config
  }

  public async destroy ({ params, response }: HttpContextContract) {
    const config = await Config.findOrFail(params.id)
    await config.delete()
    return response.status(204).send('config excluído com sucesso!')
  }

}
