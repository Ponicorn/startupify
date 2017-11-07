<template>
  <div class="ross fontastique" v-bind:style="style">
    <div class="blocquote">
      <div class="quote">&#8220; {{quote}} &#8222;</div>
      <div class="cite">Bob Ross</div>
    </div>
  </div>
</template>

<script>
import data from '@/data.js'
import { EV } from '@/events'

export default {
  name: 'Ross',
  data () {
    data.font()
    return {
      quote: data.bobRossQuote(),
      style: data.bgross()
    }
  },
  created () {
    EV.on('fresh', this.again)
  },
  beforeDestroy () {
    EV.removeListener('fresh', this.again)
  },
  methods: {
    again () {
      data.font()
      this.quote = data.bobRossQuote()
      this.style = data.bgross()
    }
  }
}
</script>

<style lang="scss" scoped>
.ross {
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  padding: 10%;
  box-sizing: border-box;

  .blocquote {
        background: rgba(238,238,238,0.6);
        border-left: 10px solid rgba(238,238,238,1);
        padding: 20px;
        .quote {
            margin-bottom: 20px;
        }
        .cite {
            text-align: right;
            font-size: 0.6em
        }
    }
}
</style>
