<template lang="html">
  <div class="basic" v-bind:class="mode" v-bind:style="style">

    <div class="row"></div>

    <div class="">
      <div class="col"></div>
      <div class="col text fontastique" v-on:click="again()">
        <p>{{ city }} {{ adjective }} {{ activity }}</p>
        <p class="subtitle">since {{ year }}</p>
      </div>
      <div class="col"></div>
    </div>

    <div class="row"></div>


  </div>
</template>

<script>
import data from '../data.js'
import { EV } from '@/events'

data.font()

export default {
  name: 'Basic',
  data () {
    return {
      mode: { hispterFilter: true },
      city: data.city(),
      activity: data.activity(),
      adjective: data.adjective(),
      year: data.year(10, 1),
      style: data.background()
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
      this.mode = { hispterFilter: true }
      this.city = data.city()
      this.activity = data.activity()
      this.adjective = data.adjective()
      this.year = data.year(10, 1)
      this.style = data.background()
    }
  },

  watch: {
    '$route': () => { console.log('bonsooooooooooooooooooooooooooir') }
  }
}
</script>

<style lang="scss" scoped>

.basic {

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;

  &>div {
    flex-grow: 1;
    min-height: 1em;
    display: flex;
  }

  .col {
    min-width: 1em;
    flex-grow: 1;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }

  // #1 mod
  &.hispterFilter {
    .row, .col, .text{
      background-color: rgba(0,0,0,0.6);
    }

    .text {
      color: #f5f5f5;
      font-size: 4em;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .loadimage {
    visibility: hidden;
  }
}
</style>
