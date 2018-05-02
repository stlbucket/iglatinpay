'use strict'
const clog = require('fbkt-clog')
const expect = require('chai').expect

const target = require('./index')

describe('hello', function () {

  it('should reply to computer with omputercay', function (done) {
    const input = 'computer'
    const expected = 'omputercay'

    target(input)
      .then(result => {
        clog('RESULT', result)
        expect(result).to.equal(expected)
        done()
      })
      .catch(error => {
        done(error)
      })
  })

  it('should reply to user with useray', function (done) {
    const input = 'user'
    const expected = 'useray'

    target(input)
      .then(result => {
        clog('RESULT', result)
        expect(result).to.equal(expected)
        done()
      })
      .catch(error => {
        done(error)
      })
  })

  it('should reply to hello with ellohay', function (done) {
    const input = 'hello'
    const expected = 'ellohay'

    target(input)
      .then(result => {
        clog('RESULT', result)
        expect(result).to.equal(expected)
        done()
      })
      .catch(error => {
        done(error)
      })
  })

  it('should reply to hello world with ellohay orldway', function (done) {
    const input = 'hello world'
    const expected = 'ellohay orldway'

    target(input)
      .then(result => {
        clog('RESULT', result)
        expect(result).to.equal(expected)
        done()
      })
      .catch(error => {
        done(error)
      })
  })

  it('should reply to hello world with ellohay orldway', function (done) {
    const input = 'Hello world'
    const expected = 'Ellohay orldway'

    target(input)
      .then(result => {
        clog('RESULT', result)
        expect(result).to.equal(expected)
        done()
      })
      .catch(error => {
        done(error)
      })
  })

  it('should reply to hello world with ellohay orldway', function (done) {
    const input = 'Hello, world!!'
    const expected = 'Ellohay, orldway!!'

    target(input)
      .then(result => {
        clog('RESULT', result)
        expect(result).to.equal(expected)
        done()
      })
      .catch(error => {
        done(error)
      })
  })

  it('should reply to hello world with ellohay orldway', function (done) {
    const input = 'eat apples'
    const expected = 'eatay applesay'

    target(input)
      .then(result => {
        clog('RESULT', result)
        expect(result).to.equal(expected)
        done()
      })
      .catch(error => {
        done(error)
      })
  })

  it('should reply to hello world with ellohay orldway', function () {
    const input = 'quick brown fox'
    const expected = 'ickquay ownbray oxfay'

    return target(input)
      .then(result => {
        clog('RESULT', result)
        expect(result).to.equal(expected)
        // done()
      })
      // .catch(error => {
      //   // done(error)
      // })
  })

})
