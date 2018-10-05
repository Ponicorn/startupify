<template>
  <div id="bobross" class="fontastique" :style="mountains">
    <div class="quote">
      <p>{{ quote }}</p>
      <p>Bob Ross</p>
    </div>
  </div>
</template>

<script>
import data from '@/data'
import EV from '@/event'

export default {
  name: 'bobross',
  data () {
    return {
      quote: '',
      mountains: { 'background-image': '' }
    }
  },
  created () {
    data.font()
    this.mountains = data.mountains()
    this.quote = data.bobrossquotes()
    EV.on('refresh', this.refresh)
  },
  beforeDestroy () {
    EV.removeListener('refresh', this.refresh)
  },
  methods: {
    refresh () {
      data.font()
      this.mountains = data.mountains()
      this.quote = data.bobrossquotes()
    }
  }
}
</script>

<style lang="scss" scoped>
  #bobross {
    color: rgba(255,255,255,0.75);
    text-align: center;
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .quote {
    color: #222;
    background: rgba(255,255,255,0.6);
    border-left: solid 5px rgba(255,255,255,0.6);
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 30vw;
    min-height: 20vh;
    max-width: 60vw;
    max-height: 80vh;
    font-size: 45px;
    &>p:first-child {
      word-wrap:break-word;
    }
    &>p:last-child {
      margin-top: 10px;
      font-size: 0.75em;
    }

    @media (max-device-width : 480px) {
      font-size: 30px;
      max-width: 80vw;
    }
  }

</style>
