import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
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
}
