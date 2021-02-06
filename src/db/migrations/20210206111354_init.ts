import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema

    .createTable('task_lists', (table) => {
      table.increments().primary()
      table.string('name', 255).notNullable()
      table.timestamp('started_at')
      table.date('due_date')
      table.date('forecasted_end_date')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })

    .createTable('tasks', (table) => {
      table.increments().primary()
      table.string('name', 255).notNullable()
      table.enum('status', ['not_started', 'in_progress', 'complete'])
      table.integer('duration').defaultTo(1)
      table.timestamp('started_at')
      table.date('due_date')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
      table.integer('dependency_id').references('id').inTable('tasks')

      table
        .integer('task_list_id')
        .references('id')
        .inTable('task_lists')
        .notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema

    .dropTable('tasks')

    .dropTable('task_lists')
}
