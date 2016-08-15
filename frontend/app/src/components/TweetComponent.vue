<!-- 本コンポーネントはTimeline以外でも利用される -->
<!-- Storeを持つ必要が無いのでVuexに依存しない -->

<template>
  <!-- バインディングに失敗すると動かない -->

  <div
    class="card card-block"
    v-touch:swiperight="onSwipeRight"
    v-touch-options:swipe="{ direction: 'horizontal', threshold: 50 }"
  >
    <div header="テキスト">
      <span>{{ text }}</span>
    </div>
    <div header="日付">
      <span>{{ dateText }}</span>
    </div>
    <div header="無効化されたタブ" disabled></div>
  </div>

</template>

<script>
  import DateFormat from 'dateformat'
  // import tab from 'vue-strap/src/tab'
  // import tabs from 'vue-strap/src/tabset'
  // require('style!raw!./node_modules/bootstrap/dist/css/bootstrap.min.css')

  export default {
    props: {
      text: {
        type: String,
        default: 'defalut text'
      },
      date: {
        type: Number
      },
      obj: {
        type: Object
      }
    },
    // prop は内部テンプレートで利用でき、
    // そして `this.msg` として設定されます
    // template: '<span>{{ msg }}</span>'

    // 算出プロパティはバインド式が肥大化するのを防ぐために使う
    computed: {
      dateText: x => {
        return DateFormat(x.date, 'yyyy/mm/dd HH:MM:ss')
      }
    },
    methods: {
      onSwipeRight () {
        console.log('Swipe left !!')
        this.$dispatch('event-remove', this.obj)
      }
    },
    destroyed () {
      console.log('DESTROYED: ' + this.text)
    }
  }
</script>

<style>
</style>
