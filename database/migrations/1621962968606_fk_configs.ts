import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Configs extends BaseSchema {
  protected tableName = 'configs'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.foreign('user_id').references('id').inTable('users')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
