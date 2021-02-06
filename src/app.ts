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

export default app;
