<template>
  <div id="app" v-on:click.stop="clickShowMenu">
    <!-- This is where the menu go -->

    <!-- Swaggy-swag menu -->
    <MenuRigolo :showMenu="showMenu" :clickShowMenu="clickShowMenu" />

    <!-- This is where the content go -->
    <div class="content" v-bind:class="{ show: showMenu }" v-on:click.stop>
      <router-view/>
    </div>
  </div>
</template>

<script>
import MenuRigolo from '@/components/Menu'

export default {
  name: 'app',
  data () { return { showMenu: false } },
  components: { MenuRigolo },
  methods: {
    clickShowMenu () { this.showMenu = !this.showMenu }
  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,300i,400,500,700,900');


* {
  margin: 0;
  padding: 0;
}
html, body, #app, .content {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #eeeeee;
  color: #22313F;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

$menusize: 80px;

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

</style>
