import Knex from 'knex'
const knexFile = require('../../knexfile.js')

type NodeENV = 'development' | 'staging' | 'production'
const nodeEnv: NodeENV = (process.env.NODE_ENV as NodeENV) || 'development'

export default Knex(knexFile[nodeEnv])