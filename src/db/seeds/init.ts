/* eslint-disable @typescript-eslint/camelcase */

import * as Knex from 'knex'
import faker from 'faker'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('task_lists').del()

  // Inserts seed entries
  await knex('task_lists').insert([
    { id: 1, name: faker.vehicle.model(), due_date: faker.date.future(1) },
    { id: 2, name: faker.vehicle.model(), due_date: faker.date.future(1) },
  ])

  await knex('tasks').insert([
    {
      id: 1,
      name: faker.lorem.words(5),
      status: 'not_started',
      task_list_id: 1,
    },
    {
      id: 2,
      name: faker.lorem.words(5),
      status: 'not_started',
      task_list_id: 1,
      dependency_id: 1,
    },
    {
      id: 3,
      name: faker.lorem.words(5),
      status: 'not_started',
      task_list_id: 1,
      dependency_id: 2,
    },
    {
      id: 4,
      name: faker.lorem.words(5),
      status: 'not_started',
      task_list_id: 1,
      dependency_id: 3,
    },
  ])
}
