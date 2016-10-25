<template>
    <div class="app">
        <rngComponent></rngComponent>
    </div>
</template>

<script>
import bgFilter from './components/BgFilter.vue'
import textImage from './components/TextImage.vue'
import bobRoss from './components/BobRoss.vue'
const componentList = [textImage, bobRoss, bgFilter];

// Function to grab param from the url, from stackoverflow
const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' ')).toLowerCase();
};

// R-R-R-Randomize ! If there is no predifine style ofc
let styleParam = getUrlParameter('style');
let rngComponent ;
switch (styleParam) {
    case 'bobross':
        rngComponent = bobRoss;
        break;
    case 'textimage':
        rngComponent = textImage;
        break;
    case 'bgfilter':
        rngComponent = bgFilter;
        break;
    default:
        rngComponent = componentList[Math.floor(Math.random() * componentList.length)];
}

export default {
    name: 'app',
    components: {
        rngComponent
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
