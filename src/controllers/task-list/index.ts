import { Request, Response } from 'express';

import TaskList from '~/models/task-list';

export async function list(req: Request, res: Response) {
  const lists = await TaskList.select(
    'id',
    'created_at',
    'due_date',
    'forecasted_end_date',
    'name',
    'started_at',
    'updated_at',
  );

  res.json(lists);
}
