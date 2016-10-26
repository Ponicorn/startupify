<template>
    <div class="app">
        <div id="rngComponentWrapper" class="rngComponentWrapper" :class="{ showMenu: showMenu }">
            <router-view></router-view>
        </div>
        <div class="smallCuteLittleButton" v-on:click="showMenu = !showMenu" :class="{ showMenu: showMenu }">
            <div></div><div></div><div></div><div></div>
        </div>
        <div class="pleaseHitMe" v-on:click="navigateLikeAPirate('/')">
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
        </div>
        <menuGeneral></menuGeneral>
    </div>
</template>

<script>
import menuGeneral from './components/MenuGeneral.vue'

export default {
    name: 'app',
    data() {
        return  {
            showMenu : false
        }
    },
    methods: {
        navigateLikeAPirate () {
            location.reload();
        }
    },
    components: {
        menuGeneral
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
        background: #CCC;
        border-radius: 1px;
        &>div {
            border-radius: inherit;
            transition: 0.5s;
            transition-timing-function: ease-in-out;
            position: absolute;
            left: 0;
            bottom: 0;
            background: #1f1f1f;
            height: 20px;
            width:  20px;
            z-index: 14;
            &:nth-child(2) {
                background: #EC644B;
                transition-delay: 0.1s;
                transition-timing-function: ease-in-out;
                z-index: 13;
            }
            &:nth-child(3) {
                background: #BE90D4;
                transition-delay: 0.2s;
                transition-timing-function: ease-in-out;
                z-index: 12;
            }
            &:nth-child(4) {
                background: #81CFE0;
                transition-delay: 0.3s;
                transition-timing-function: ease-in-out;
                z-index: 11;
            }
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

.pleaseHitMe,
.smallCuteLittleButton {
    position: fixed;
    height: 30px;
    width:  30px;
    z-index: 10;
    cursor: pointer;
    background: rgba(238, 238, 238, 0.6);
    border-radius: 1px;
}

.smallCuteLittleButton {
    bottom: 25px;
    left: 25px;
    &>div {
        border-radius: inherit;
        transition: 0.5s;
        transition-timing-function: ease-in-out;
        position: absolute;
        left: 0;
        bottom: 0;
        background: #1f1f1f;
        height: 20px;
        width:  20px;
        z-index: 14;
        &:nth-child(2) {
            background: #EC644B;
            transition-delay: 0.1s;
            transition-timing-function: ease-in-out;
            z-index: 13;
        }
        &:nth-child(3) {
            background: #BE90D4;
            transition-delay: 0.2s;
            transition-timing-function: ease-in-out;
            z-index: 12;
        }
        &:nth-child(4) {
            background: #81CFE0;
            transition-delay: 0.3s;
            transition-timing-function: ease-in-out;
            z-index: 11;
        }
    }

    &.showMenu>div {
        bottom: 10px;
        left: 10px;
    }
}

.pleaseHitMe {
    bottom: 25px;
    right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
