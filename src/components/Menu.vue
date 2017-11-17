<template>
  <div class="menu" v-on:click.stop="clickShowMenu">
    <div class="cubwrapper">
      <div class="cubainer" v-bind:class="{ show : showMenu }">
        <div class="cube0"></div>
        <div class="cube1"></div>
        <div class="cube2"></div>
        <div class="cube3"></div>
      </div>
    </div>

    <div v-on:click.stop class="options">
      <div class="option basic" v-on:click.stop="navigate('basic')"><div>basic</div></div>
      <div class="option arrow" v-on:click.stop="navigate('arrow')">X</div>
      <div class="option ross" v-on:click.stop="navigate('ross')">
        <img src="../assets/bobross.gif" alt="it's Bob Ross himself !">
      </div>
      <div class="option rng" v-on:click.stop="navigate('rng')">RNG</div>
    </div>

    <div class="againwrapper" v-on:click.stop="fresh()">
      <div class="again">
        <div class="spinner" :class="{ spinning }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { EV } from '@/events'
let spinningTimeOut = null

export default {
  name: 'MenuRigolo',
  props: [ 'showMenu', 'clickShowMenu' ],
  data () {
    return { spinning: false }
  },
  methods: {
    fresh () {
      if (this.$route.name === 'Rng') {
        EV.emit('freshrng')
      } else {
        EV.emit('fresh')
      }

      // Animation parts, BORING
      this.spinning = true
      if (spinningTimeOut) clearTimeout(spinningTimeOut)
      spinningTimeOut = setTimeout(() => { this.spinning = false; clearTimeout(spinningTimeOut) }, 500)
    },
    navigate (route) {
      this.$router.push(route)
      this.clickShowMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
$menusize: 80px;

.menu {
  height: $menusize;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;


  .cubwrapper {
    z-index: 10;
    position: relative; // So child can be absolute
    width: $menusize;
    height: $menusize;
    display: flex;
    align-items: center;
    justify-content: center;
    .cubainer, .again {
      position: relative; // So child can be absolute
      cursor: pointer;
      height: 30px;
      width: 30px;
      background: rgba(150, 150, 150, 0.6);

      &>div {
        position: absolute; left: 0; top: 0;
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

      &.show>div {
        top: 10px;
        left: 10px;
      }
    }
  }

  .againwrapper {
    position: absolute;
    right: 0;
    top: 0;
    width: $menusize;
    height: $menusize;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    .again {
      cursor: pointer;
      height: 30px;
      width: 30px;
      background: rgba(150, 150, 150, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      .spinner {
        height: 20px;
        width: 20px;
        background: #1f1f1f;
      }
      .spinning {
        transition: 0.5s;
        transform: rotate(360deg);
      }

    }
  }

  .options {
    height: $menusize;
    display: flex;
    flex-direction: row;
    align-items: center;


    &>.option {
      padding: 10px;
      margin: 10px;
      width: 60px;
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-sizing: border-box;
      color: inherit;
      text-decoration: none;
      &:first-child {
        margin-left: 0;
      }
      &.basic {
        background: #2c2c2c;
        color: #eeeeee;
        &>div {
          border: 1px solid #eeeeee;
          padding: 4px;
          font-weight: 300;
          font-size: 0.8em;
        }
      }

      &.rng {
        font-weight: 300;
        font-size: 1.2em;
        border: 2px solid #22313F;
        box-sizing: border-box;
      }

      &.ross {
        padding: 0;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }

}
</style>
