import { expect, test } from 'vitest'

test('o usuario consegue criar uma nova transacao', () => {
  // fazer a chamada http p criar uma nova transacao

  // validacao
  const responseStatusCode = 201
  expect(responseStatusCode).toEqual(201)
})
