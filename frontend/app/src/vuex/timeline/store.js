import {
  RECEIVE_TIMELINE,
  ADD_TWEET,
  REMOVE_TWEET
} from '../mutation-types'

import Enumerable from 'linq'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [RECEIVE_TIMELINE] (state, tweets) {
    tweets = Enumerable.from(tweets)
      .select(t => {
        t.text = t.text.length < 3 ? Math.round(Math.random() * 10).toString() : t.text
        return t
      })
      .toArray()
    state.all = tweets
  },
  [ADD_TWEET] (state, newTweet) {
    state.all.push(newTweet)
    // console.log(JSON.stringify(state.all))
  },
  [REMOVE_TWEET] (state, targetTweet) {
    state.all = state.all.filter((t) => t !== targetTweet)
    console.log('state.all.count: ' + state.all.length)
  }

  // [ADD_TO_CART] (state, productId) {
  //   state.all.find(p => p.id === productId).inventory--
  // }
}

export default {
  state,
  mutations
}
