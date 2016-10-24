<template>
    <div class="bgFilter">
        <div class="stupidHipsterFilter"></div>
        <div class="contentRow">
            <div class="stupidHipsterFilter"></div>
            <div class="contentWrap">
                <activitySince class="content stupidHipsterFilter fontOfTheDay"></activitySince>
            </div>
            <div class="stupidHipsterFilter"></div>
        </div>
        <div class="stupidHipsterFilter"></div>
    </div>
</template>

<script>
import activitySince from './ActivitySince.vue'
import data from '../data.js'
data.font();

export default {
    name: 'bgFilter',
    components: {
        activitySince
    }
}
</script>

<style scoped lang="scss">
.bgFilter {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    background-image: url(https://source.unsplash.com/random);
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;

    &>div {
        width: 100%;
        flex-grow: 1;
    }

    .contentRow {
        display: flex;
        &>div{
            flex-grow: 1;
            min-width: 1em;
        }
        .contentWrap {
            max-width: 100%;
            padding: 10px;
            .content {
                box-sizing: border-box;
                padding: 10px;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                /* basic random indicator */
                color: #F5F5F5;
                font-size: 4em;
                font-weight: bold;
                text-align: center;
                text-transform: uppercase;

            }
        }
    }

}

.stupidHipsterFilter {
    background-color: rgba(0,0,0,0.6);
}

</style>
