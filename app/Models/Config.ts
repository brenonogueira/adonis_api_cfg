import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Config extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nickname: string

  @column()
  public mapa: string

  @column()
  public funcao: string

  @column()
  public resolucao: string

  @column()
  public hz: string

  @column()
  public sensibilidade: string

  @column()
  public dpi: string

  @column()
  public user_id: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  //config pertence a user
  @belongsTo(() => User)
  public config: BelongsTo<typeof User>

}
