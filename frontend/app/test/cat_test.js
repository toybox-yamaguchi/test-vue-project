import assert from 'power-assert'

import Cat from '../src/modules/cat'

describe('Cat test', () => {
  var tama
  beforeEach(() => {
    tama = new Cat('tama')
  })

  describe('greet()', () => {
    it('挨拶をする', () => {
      assert.equal(tama.greet(), 'Nyaaaan! I am tama')
    })
  })
})
