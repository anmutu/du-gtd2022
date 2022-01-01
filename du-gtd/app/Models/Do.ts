import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Do extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public userName: string

  @column()
  public Date: Date

  @column()
  public week: number

  @column()
  public getupTime: DateTime

  @column()
  public sleepTime: DateTime

  @column()
  public runningStartTime: DateTime

    @column()
  public runningEndTime: DateTime

    @column()
  public runningSpeed: number

  @column()
  public weight: number

  @column()
  public remark: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
