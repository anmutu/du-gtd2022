import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Dos extends BaseSchema {
  protected tableName = 'dos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id')
      table.string('user_name')
      table.date('date')
      table.string('week')
      table.timestamp('getup_time', { useTz: true })
      table.timestamp('sleep_time', { useTz: true })
      table.timestamp('running_start_time', { useTz: true })
      table.timestamp('running_end_time', { useTz: true })
      table.float('running_minutes')
      table.float('running_speed')
      table.float('weight')
      table.string('remark')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
    
    // this.schema.alterTable('dos',(table)=>{
    //   table.integer('user_id')
    //   table.string('user_name')
    // })
    
  }

   public async down () {
    this.schema.dropTable(this.tableName)
  }
}
