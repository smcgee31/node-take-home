import { Request, Response } from 'express';

import TaskList from '~/models/task-list';
import { ApiResponse } from './apiResponse';

export async function list(req: Request, res: Response) {
  try {
    const lists = await TaskList.select(
      'id',
      'name',
      'started_at',
      'due_date',
      'created_at',
      'updated_at',
      'forecasted_end_date',
    );

    res.json(lists);
    return ApiResponse({ status: 200, message: '', data: [] });
  } catch (error) {
    console.log('error:', error);
    return ApiResponse({ status: 500, message: error.message, data: [] });
  }
}

/*
[
  {
    "id": 1,
    "created_at": "2021-03-14T16:49:08.730Z",
    "due_date": "2021-03-18T00:00:00.000Z",
    "forecasted_end_date": null,
    "name": "Spyder",
    "started_at": null,
    "updated_at": "2021-03-14T16:49:08.730Z"
  },
  {
    "id": 2,
    "created_at": "2021-03-14T16:49:08.730Z",
    "due_date": "2021-03-16T00:00:00.000Z",
    "forecasted_end_date": null,
    "name": "Alpine",
    "started_at": null,
    "updated_at": "2021-03-14T16:49:08.730Z"
  }
]
*/

export async function createTask(req: Request, res: Response) {
  try {
    const params = req.body.params;
    const resp = await TaskList.insert(params);

    res.json(res);
    return ApiResponse({ status: 200, message: '', data: [] });
  } catch (error) {
    console.error('Error', error);
    return ApiResponse({ status: 500, message: error.message, data: [] });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const id = req.body.id;
    const resp = await TaskList.delete(id);

    res.json(res);
    return ApiResponse({ status: 200, message: '', data: [] });
  } catch (error) {
    console.error('Error', error);
    return ApiResponse({ status: 500, message: error.message, data: [] });
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const id = req.body.data.id;
    const rowData = req.body.data.rowData;
    const resp = await TaskList.update(id, { rowData });

    res.json(res);
    return ApiResponse({ status: 200, message: '', data: [] });
  } catch (error) {
    console.error('Error', error);
    return ApiResponse({ status: 500, message: error.message, data: [] });
  }
}

export async function getTask(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const resp = await TaskList.select(id);

    res.json(res);
    return ApiResponse({ status: 200, message: '', data: [] });
  } catch (error) {
    console.error('Error', error);
    return ApiResponse({ status: 500, message: error.message, data: [] });
  }
}

export async function getTasks(req: Request, res: Response) {
  try {
    const lists = await TaskList.select(
      'id',
      'created_at',
      'due_date',
      'forecasted_end_date',
      'name',
      'started_at',
      'updated_at',
      'tasks,',
    );

    res.json(lists);
    return ApiResponse({ status: 200, message: '', data: [] });
  } catch (error) {
    console.error('Error', error);
    return ApiResponse({ status: 500, message: error.message, data: [] });
  }
}
