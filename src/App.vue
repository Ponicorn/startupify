<template>
    <div class="app">
        <vue1></vue1>
    </div>
</template>

<script>
import vue1 from './components/Vue_1.vue'
import data from './data.js'

data.font();

export default {
    name: 'app',
    components: {
        vue1
    }
}
</script>

<style lang="scss">
@import 'reset.scss';

html,
body,
.app {
    height: 100%;
    width: 100%;
}
</style>
