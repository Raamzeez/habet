
import dotenv from 'dotenv'
dotenv.config()
import {Model} from 'objection'
import knex from './db/knex'
import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import passport from 'passport'
import { authenticator, strategy} from './auth/auth';

Model.knex(knex)

const app = express()

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true}))
passport.use(strategy)
app.use(passport.initialize())

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000

app.use(authenticator)
app.get('/', (req: Request, res: Response) => {
    return res.status(200).send('Home directory reached')
})

app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})

