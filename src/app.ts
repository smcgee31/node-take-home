import express from 'express';
import compression from 'compression';
import lusca from 'lusca';

import * as settings from './config/settings';
import { health, home } from './controllers/root';
import * as taskList from './controllers/task-list';

const app = express();
app.set('port', settings.port);

app.use(compression());

app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

app.get('/', home);
app.get('/health', health);

app.get('/api/task-lists', taskList.list);

app.get('/api/get-task', taskList.getTask);
app.get('/api/get-tasks', taskList.getTasks);
app.post('/api/create-task', taskList.createTask);
app.post('/api/delete-task', taskList.deleteTask);
app.post('/api/update-task', taskList.updateTask);

export default app;
