<template>
 <div class="wrap">
   <basic v-if="choice === 0"/>
   <ross v-if="choice === 1"/>
   <arrow v-if="choice === 2"/>
 </div>
</template>

<script>
import Basic from '@/components/Basic'
import Arrow from '@/components/Arrow'
import Ross from '@/components/Ross'
import { EV } from '@/events'

const componentsList = [Basic, Ross, Arrow]

export default {
  name: 'rng',
  data () {
    return {
      choice: Math.floor(Math.random() * componentsList.length)
    }
  },
  created () {
    EV.on('freshrng', this.again)
  },
  beforeDestroy () {
    EV.removeListener('freshrng', this.again)
  },
  components: { Basic, Arrow, Ross },
  methods: {
    again () {
      this.choice = Math.floor(Math.random() * componentsList.length)
      EV.emit('fresh')
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap { height: 100%; width: 100%; }
</style>
