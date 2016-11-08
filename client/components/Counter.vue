<template>
  <div class="counter" @click="increment">
    {{ count }}
  </div>
</template>

<script>
import * as events from '../store/types'

export default {
  computed: {
    count() {
      return this.$store.state.counter.count
    }
  },
  methods: {
    increment() {
      return this.$store.dispatch(events.IncrementCountAsync)
    }
  }
}
</script>

<style>
.counter {
  cursor: pointer;
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>
