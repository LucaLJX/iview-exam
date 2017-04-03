<style scoped>
    .left-content {
        position: fixed;
        height: 100%;
        background-color: #464c5b;
        z-index: 2000;
    }
    .right-content {
        width: 100%;
        padding-left: 240px;
    }
    .right-main-content {
        padding-top: 40px;
    }
</style>
<template>
    <div>
        <div class="left-content">
            <submenu></submenu>
        </div>
        <headbar></headbar>
        <div class="right-content">
            <div class="right-main-content">
                <router-view></router-view>
            </div>
        </div>
        <footbar></footbar>
    </div>
</template>
<script>
import submenu from 'components/submenu'
import headbar from 'components/headbar'
import footbar from 'components/footbar'

    export default {
        components: { submenu, headbar, footbar },
        data () {
            return {}
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
