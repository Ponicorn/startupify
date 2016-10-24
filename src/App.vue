<template>
    <div class="app">
        <rngComponent></rngComponent>
    </div>
</template>

<script>
import bgFilter from './components/BgFilter.vue'
import textImage from './components/TextImage.vue'

// R-R-R-Randomize !
const componentList = [bgFilter,textImage];
const rngComponent = componentList[Math.floor(Math.random() * componentList.length)];

export default {
    name: 'app',
    components: {
        rngComponent
        // bgFilter,
        // textImage
    }
}
</script>

<style lang="scss">
@import 'reset.scss';

html,
body,
.app {
    overflow: hidden;
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
