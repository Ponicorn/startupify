<template>
    <div class="app">
        <div id="rngComponentWrapper" class="rngComponentWrapper" :class="{ showMenu: showMenu }">
            <rngComponent></rngComponent>
            <div class="smallCuteLittleButton" v-on:click="showMenu = !showMenu"><div></div></div>
        </div>
        <menuGeneral></menuGeneral>
    </div>
</template>

<script>
import bgFilter from './components/BgFilter.vue'
// import textImage from './components/TextImage.vue' // not OK ATM
import bobRoss from './components/BobRoss.vue'
import menuGeneral from './components/MenuGeneral.vue'
const componentList = [bobRoss, bgFilter];

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
    case 'bgfilter':
        rngComponent = bgFilter;
        break;
    default:
        rngComponent = componentList[Math.floor(Math.random() * componentList.length)];
}

export default {
    name: 'app',
    data() {
        return  {
            showMenu : false
        }
    },
    components: {
        rngComponent, menuGeneral
    }
}
</script>

<style lang="scss">
@import 'reset.scss';

html,
body,
.app,
.rngComponentWrapper {
    overflow: hidden;
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.rngComponentWrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ccc;
    transition: 0.5s;
    z-index: 10;
    .smallCuteLittleButton {
        position: fixed;
        bottom: 25px;
        left: 25px;
        height: 30px;
        width:  30px;
        z-index: 10;
        cursor: pointer;
        background: #ECECEC;
        &>div {
            transition: 0.5s;
            position: absolute;
            left: 0;
            bottom: 0;
            background: #1f1f1f;
            height: 20px;
            width:  20px;
        }
    }

    &.showMenu {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        bottom: 100px;
        left  : 100px;

        .smallCuteLittleButton>div {
            bottom: 10px;
            left: 10px;
        }
    }
}
</style>
