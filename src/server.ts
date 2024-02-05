import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  /*
  const tables = await knex('sqlite_schema').select('*')

  const transaction = await knex('transactions')
  .insert({
    id: crypto.randomUUID(),
    title: 'transacao de teste',
    amount: 1000,
  })
  .returning('*')
  const transaction = await knex('transactions').select('*')
  const transaction = await knex('transactions')
  .where('amount', 1000)
  .select('*')
  */
  const transaction = await knex('transactions').select('*')

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
