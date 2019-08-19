const tap = require('tap')
const truthy = require('../build/truthy')
const falsey = require('../build/falsey')
const envVarTruthy = require('../build/env-var-truthy')
const envVarFalsey = require('../build/env-var-falsey')
const localVarTruthy = require('../build/local-var-truthy')
const localVarFalsey = require('../build/local-var-falsey')

tap.test('comment blocks with falsey predicate', (test) => {
  test.equal(falsey, 1)
  test.end()
})

tap.test('dont comment blocks with truthy predicate', (test) => {
  test.equal(truthy, 2)
  test.end()
})

tap.test('dont comment env var blocks with truthy predicate', (test) => {
  test.equal(envVarTruthy, 2)
  test.end()
})

tap.test('comment env var blocks with falsey predicate', (test) => {
  test.equal(envVarFalsey, 1)
  test.end()
})

tap.test('comment env var blocks with falsey predicate', (test) => {
  test.equal(localVarFalsey, true)
  test.end()
})

tap.test('comment env var blocks with falsey predicate', (test) => {
  test.equal(localVarTruthy, true)
  test.end()
})
