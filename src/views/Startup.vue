<template>
  <div class="startup fontastique" :style="background">
    <div class="block"></div>
    <div class="content">
      <div class="blockmain"></div>
      <div class="main">
        <p>{{ startupname }}</p>
        <p>since {{ year }}</p>
      </div>
      <div class="blockmain"></div>
    </div>
    <div class="block"></div>
  </div>
</template>

<script>
import data from '@/data'
import EV from '@/event'

export default {
  name: 'startup',
  data () {
    return {
      background: { 'background-image': '' },
      startupname: '',
      year: ''
    }
  },
  created () {
    data.font()
    this.background = data.background()
    this.startupname = data.name()
    this.year = data.year()
    console.log(this.background)
    EV.on('refresh', this.refresh)
  },
  beforeDestroy () {
    EV.removeListener('refresh', this.refresh)
  },
  methods: {
    refresh () {
      data.font()
      this.background = data.background()
      this.startupname = data.name()
      this.year = data.year()
      console.log(this.background)
    }
  }
}
</script>

<style lang="scss" scoped>
  .startup {
    color: aliceblue;
    text-align: center;
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    display: flex;
  }

  .block {
    flex-grow: 1;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
  }
  .content {
    flex-grow: 1;
    min-width: 320px;
    width: 60vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    .blockmain {
      background-color: rgba(0,0,0,0.6);
      height: 25vh;
    }
    .main {
      margin: 10px;
      padding: 20px;
      font-size: 8vmin;
      min-width: 300px;
      height: calc(60vh - 20px);
      background-color: rgba(0,0,0,0.6);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;

    }
  }
</style>
