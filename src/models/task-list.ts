import client from '~/db/client';

interface TaskList {
  id: number;
  name: string;
}

export default client<TaskList>('task_lists');
