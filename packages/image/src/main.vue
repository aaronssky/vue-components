<template>
    <img :src="validSrc" class="ycf-image" :class="[customclass]" v-bind="$attrs" v-show="validSrc" @click="handleClick">
</template>
<script>
    export default{
        name: 'ycf-image',
        props: {
            src: {
                type: String,
                default: ''
            },
            customclass: {
                type: String,
                default: ""
            }
        },
        data () {
            return {
                validSrc: '', //最终输出到img src的字段值
            }
        },
        methods: {
            initImage: function() {
                this.validSrc = this.src;
            },
            handleClick: function(e) {
                // console.log(this.$listeners);
                //将event传递到父组件,供父组件.stop等使用，否则会报错
                this.$emit('click', e); 
            }
        },
        mounted () {
            this.initImage();
        },
        watch: {
            src: function(val) {
                if (val) {
                    this.initImage();
                }
            }
        },
        inheritAttrs: false
    }
</script>
<style lang="scss">
	.ycf-image{
        max-width: 100%;
    }
</style>