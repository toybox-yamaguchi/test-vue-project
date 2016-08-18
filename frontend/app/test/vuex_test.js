import assert from 'power-assert'
import timeline from '../src/vuex/timeline/store'

import {
  RECEIVE_TIMELINE
} from '../src/vuex/mutation-types'

describe('mutations', () => {
  it('getTimeline', () => {
    console.log('timeline', timeline.mutations[RECEIVE_TIMELINE])
  })
})
