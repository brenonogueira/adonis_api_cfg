import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Configs extends BaseSchema {
  protected tableName = 'configs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nickname').unique()
      table.string('mapa')
      table.string('funcao')
      table.string('resolucao')
      table.string('hz')
      table.string('sensibilidade')
      table.string('dpi')
      table.integer('user_id').unsigned().unique()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
