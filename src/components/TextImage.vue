<template>
    <div class="textImage">
        <div class="contentWrap">
            <shortContent class="content fontOfTheDay"></shortContent>
        </div>
    </div>
</template>

<script>
import shortContent from './ShortContent.vue'
import data from '../data.js'
data.font();

export default {
    name: 'textImage',
    components: {
        shortContent
    }
}
</script>

<style scoped lang="scss">

.textImage {
	overflow: hidden;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

    background-image: url(https://source.unsplash.com/random?space);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    padding: 20px;
    .contentWrap {
        background: #ECECEC;
        display: flex;
        justify-content: center;
    	align-items: center;
        font-weight: bold;
        font-size: 10vw;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        border-radius: 2px;

        @media screen and (max-width: 840px) {
            font-size: 4rem;
            // background: pink;
        }

        .content {
            background-image: url(https://source.unsplash.com/random?space);
            background-attachment: fixed;
            padding: 1em;
            text-align: center;
            background-position: center;
            background-repeat: no-repeat;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            filter: drop-shadow(1px 1px 2px #6C7A89);
        }

    }
}

</style>
