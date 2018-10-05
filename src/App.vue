<template>
  <div id="app" :class="{ showmenu }" @click.stop="showmenu = !showmenu">

    <div class="cubewrap menu"  @click.stop>
      <div class="cube" @click="showmenu = !showmenu">
        <div class="cube0"></div>
        <div class="cube1"></div>
        <div class="cube2"></div>
        <div class="cube3"></div>
      </div>
    </div>

    <div class="cubewrap refresh" @click.stop>
      <div class="cube" @click="refresh">
        <div :class="{ spinning }"></div>
      </div>
    </div>

    <div class="navigation">
      <router-link to="/" tag="div" class="navitem home" src="./assets/bobross.gif">
        <div>Basic</div>
      </router-link>
      <router-link to="/bobross" tag="div" class="navitem" src="./assets/bobross.gif">
        <img alt="Vue logo" src="./assets/bobross.gif">
      </router-link>
    </div>

    <!-- Stop propagaiton to isolate wrapper from other things -->
    <div id="wrapper" @click.stop>
      <router-view/>
    </div>
  </div>
</template>

<script>
import EV from '@/event'

export default {
  name: 'app',
  data () {
    return {
      showmenu: true,
      spinning: false
    }
  },
  methods: {
    refresh () {
      if (this.spinning) return

      // Dispatching event
      EV.emit('refresh')

      // Animation
      this.spinning = true
      setTimeout(() => { this.spinning = false }, 510)
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html, body {
  overflow: hidden;
}
#app {
  height: 100vh;
  width: 100vw;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #eee;
}

#wrapper {
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background: #2c3e50;
  position: absolute;
  top:  0px;
  left: 0px;
  transition: 0.5s;
  transition-timing-function: ease-in-out;
}

.cubewrap {
  z-index: 100;
  position: fixed;
  top:  0px;
  height: 80px;
  width:  80px;
  .cube {
    background: rgba(150, 150, 150, 0.6);
    position: absolute;
    top: 25px;
    left: 25px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }

  &.menu {
    left: 0px;
    .cube{
      &>div {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background: pink;
        transition: 0.5s;
        transition-timing-function: ease-in-out;
        &.cube0 { z-index: 14; background: #1f1f1f; transition-delay: 0; }
        &.cube1 { z-index: 13; background: #EC644B; transition-delay: 0.1s; }
        &.cube2 { z-index: 12; background: #BE90D4; transition-delay: 0.2s; }
        &.cube3 { z-index: 11; background: #81CFE0; transition-delay: 0.3s; }
      }
    }
  }

  &.refresh {
    right: 0px;
    .cube>div {
      position: absolute;
      top: 5px;
      left: 5px;
      height: 20px;
      width: 20px;
      background: #1f1f1f;
      &.spinning {
        transition: 0.5s;
        transform: rotate(360deg);
      }
    }
  }
}

.showmenu {
  #wrapper {
    top: 80px;
    left: 80px;
    box-shadow: 0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.22);
  }

  .menu .cube>div{
    top: 10px;
    left: 10px;
  }
}

.navigation {
  position: fixed;
  display: flex;
  left: 70px;
  top: 0px;

  .navitem {
    height: 60px;
    width:  60px;
    margin: 10px;
    cursor: pointer;
    img {
      max-width: 100%;
      max-height: 100%;
    }

    &.home {
      background: #1f1f1f;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      &>div {
        width: 40px;
        text-align: center;
        padding: 8px 0;
        font-size: 12px;
        color: #eee;
        border: 1px solid #eee;
      }
    }
  }
}

</style>
