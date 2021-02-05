import express from 'express'
import compression from 'compression'
import lusca from 'lusca'

import { health } from './controllers/health'
import * as settings from './config/settings'

const app = express()
app.set('port', settings.port)

app.use(compression())

app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))

app.get('/health', health)

export default app
