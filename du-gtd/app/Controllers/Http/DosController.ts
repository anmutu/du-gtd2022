import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Model from 'app/Models/Do'
import Model from 'App/Models/Do'

export default class DosController {

  //gtd列表
  public async index({}: HttpContextContract) {
    return await Model.all()
  }

  //创建
  public async create({request}: HttpContextContract) {
    const moodel =new Model()
    moodel.fill(request.all())
    await moodel.save() 
    return moodel
  }

    //删除
  public async destroy({params}: HttpContextContract) {
    const model =await Model.find(params.id)
    await model?.delete()
  }

  public async update({request}: HttpContextContract) {
    const idObj=request.only(['id'])
    const model =await Model.find(idObj.id)
    model?.merge(request.all())
    await model?.save() 
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}




}
