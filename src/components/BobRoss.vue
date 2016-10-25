<template>
    <div class="bobRoss fontOfTheDay">
        <div class="blocquote">
            <div class="quote">{{quote}} </div>
            <div class="cite">Bob Ross</div>
        </div>
    </div>
</template>

<script>
import data from '../data.js'
data.font();

export default {
  data () {
    return {
        quote : data.bobRossQuote()
    }
  }
}
</script>

<style scoped lang="scss">
.bobRoss {
    height: 100%;
    width: 100%;
    background-image: url(https://source.unsplash.com/random?mountains);
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    padding: 10%;

    .blocquote {
        background: rgba(238,238,238,0.6);
        border-left: 10px solid rgba(238,238,238,1);
        padding: 20px;
        .quote {
            margin-bottom: 20px;
            margin-left: 20px;
            margin-right: 20px;
            position: relative;
            &:before {
                // content: '&#8220';
                content: '\201C';
                position: absolute;
                left: -20px;
                top: 0;
            }
            &:after {
                content: '\201E';
            }
        }
        .cite {
            text-align: right;
            font-size: 0.6em
        }
    }


}
</style>
