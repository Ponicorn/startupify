<template>
  <div id="app" v-on:click.stop="showMenu = !showMenu">
    <!-- This is where the menu go -->

    <!-- Swaggy-swag menu-button -->
    <div class="menu" v-on:click.stop="showMenu = !showMenu">
      <div class="cubainer" v-bind:class="{ show : showMenu }">
        <div class="cube0"></div>
        <div class="cube1"></div>
        <div class="cube2"></div>
        <div class="cube3"></div>
      </div>
    </div>

    <!-- This is where the content go -->
    <div class="content" v-bind:class="{ show: showMenu }" v-on:click.stop>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showMenu: false
    }
  }

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html, body, #app, .content {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #eeeeee;
}

$menusize: 60px;

.content {
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  transition-timing-function: ease-in-out;

  &.show {
    top: $menusize;
    left: $menusize;
  }
}

.menu {
  width: $menusize;
  height: $menusize;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  .cubainer {
    position: relative; // So child can be absolute
    cursor: pointer;
    height: 30px;
    width: 30px;
    background: rgba(238, 238, 238, 0.6);

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

</style>
