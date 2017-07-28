const test = require('tape')
const truthy = require('../build/truthy')
const falsey = require('../build/falsey')
const envVarTruthy = require('../build/env-var-truthy')
const envVarFalsey = require('../build/env-var-falsey')

test('comment blocks with falsey predicate', (test) => {
  test.equal(falsey, 1)
  test.end()
})

test('dont comment blocks with truthy predicate', (test) => {
  test.equal(truthy, 2)
  test.end()
})

test('dont comment env var blocks with truthy predicate', (test) => {
  test.equal(envVarTruthy, 2)
  test.end()
})

test('comment env var blocks with falsey predicate', (test) => {
  test.equal(envVarFalsey, 1)
  test.end()
})
