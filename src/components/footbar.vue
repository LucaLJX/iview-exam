<style scoped lang="less">
    #footbar {
        background-color: #f1f1f1;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding-left:240px;
        height: 40px;
        z-index: 1000;
        line-height: 40px;
        border-top: 1px solid #ddd;

        a {
            float: left;
            font-size: 12px;

            #footbar-icon {
                display: block;
                float: left;
                line-height: 40px;
                font-size: 18px;
                margin-left: 20px;
                margin-right: 16px;
            }
        }

        p {
            display: block;
            float: right;
            margin-right: 20px;
            font-size: 12px;

        }
    }
</style>
<template>
    <div id="footbar">
        <!-- <a href="/index"><Icon type="help-circled" id="footbar-icon"></Icon>如有疑问</a> -->
        <p>北京XXXXXX有限公司</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>
