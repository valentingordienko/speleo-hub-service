import express from 'express'
import dotenv from 'dotenv'
import log4js from 'log4js'
import db from './dbConnect'

dotenv.config()
const logger = log4js.getLogger()
logger.level = process.env.LOG_LEVEL ?? 'debug'

const app = express()
const jsonParser = express.json()
const port = process.env.APP_PORT ?? 3000

app.post<string, typeof express.json, { response: number }, { request: number }>('/dictionary', jsonParser, (req, res) => {
  const { request } = req.body
  res.json({ response: request })
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
