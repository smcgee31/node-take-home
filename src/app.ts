import express from 'express'
import compression from 'compression'
import lusca from 'lusca'

import * as apiController from './controllers/root'

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(compression())

app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))

app.get('/health', apiController.health)

export default app
