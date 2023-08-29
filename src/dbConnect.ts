import dotenv from 'dotenv'
import pgDB from 'pg-promise'

dotenv.config()

const pgp = pgDB()
const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
})

export default db