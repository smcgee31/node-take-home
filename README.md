# GuideCX: Backend Assessment

## Instructions

1. fork this repo
2. complete the tasks outlined below
3. spend no more than 4 hours
4. welcome to use whatever resources you normally would
5. send a link to the solution ahead of your interview for our review
6. bring this solution with you and be prepared to explain how you wrote it

## Background

Acme Inc needs to know how long a set of tasks is going to take their team to complete, and have those
forecasts to be updated as tasks are completed. If a task is completed early, then that will move up the
forecasted end date. If a task is completed late, then the forecast is going to be late.

The team can only work on one task at a time, and must complete that task before moving onto the next one. Each
task has a duration in days, so you can estimate when it will be completed as soon as the status changes to "In Progess".
Once a task is "Complete", then the next task in the list moves to "In Progress" and the forecasted completion date
is updated accordingly.

### Requirements

- Build an idempotent Rest API
- CRUD endpoints for `Task`
  - a task has the following attributes:
    - name: string
    - status: enum [`not_started`, `in_progress`, `complete`]
    - duration: integer - number of days from start that task is expected to be completed
    - dependency: FK (another task)
- CR endpoints for `TaskList`. TaskLists can have any number of tasks, but a task always belongs to a TaskList
  - a TaskList has the following attributes
    - name: string
    - started_at: datetime
    - due_date: date
    - forecasted_completion_date: date
    - tasks: Task[]
- accurate forecasted end date of a task list that responds to tasks being completed early or late

## Technology

- Node 14 + Express
- TypeScript (if you're wanting to stick to JS for now, checkout the [`javascript`](https://github.com/guidecx/node-take-home/tree/javascript) branch)
- Docker
- Jest
- Prettier
- Eslint

## Development

Update your `.env` file with appropriate values (see another team member)

```
$ cp .env.example .env
```

With Docker:

```
$ docker-compose up
```

Without Docker:

```
$ npm run dev
```

## Debugging

If you're using VS Code then you can use the built-in debugger. After you have the app running with `docker-compose` then you can start the `Docker: Debugger` in the debugger tab.
