// https://github.com/power-assert-js/power-assert
import assert from 'power-assert'

// describeで区切って書く
describe('テストタイトル', () => {
  describe('テスト内容', () => {
    // テスト文
    it('足し算', () => {
      assert.equal(1 + 1, 2)
    })
  })
})
