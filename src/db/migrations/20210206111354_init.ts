import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema

    .createTable('task_lists', (table) => {
      table.increments().primary()
      table.date('due_date')
      table.date('forecasted_end_date')
      table.string('name', 255).notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('started_at')
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })

    .createTable('tasks', (table) => {
      table.increments().primary()
      table.date('due_date')
      table.integer('duration').defaultTo(1)
      table
        .integer('task_list_id')
        .references('id')
        .inTable('task_lists')
        .notNullable()
      table.string('name', 255).notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('started_at')
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema

    .dropTable('tasks')

    .dropTable('task_lists')
}
