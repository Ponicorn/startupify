<template lang="html">
  <div class="arrow">
    Arrow view
  </div>
</template>

<script>
import data from '../data.js'
data.font()

export default {
  name: 'Arrow',
  data () {
    return {}
  },
  methods: {
    again () {
      data.font()
      this.mode = { hispterFilter: true }
      this.city = data.city()
      this.activity = data.activity()
      this.adjective = data.adjective()
      this.year = data.year(10, 1)
      this.style = this.preloadStyle
      this.preloadStyle = data.background()
    }
  }
}
</script>

<style lang="scss" scoped>

.arrow {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #336E7B;
  color: #eeeeee;
  font-size: 4rem;
  font-weight: 100;
}
</style>
