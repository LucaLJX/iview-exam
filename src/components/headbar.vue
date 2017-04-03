<style scoped lang="less">
    #headbar {
        background-color: #f1f1f1;
        position: fixed;
        top: 0;
        width: 100%;
        padding-left:240px;
        height: 40px;
        z-index: 1000;
        font-size: 16px;
        line-height: 40px;
        color: #919191;
        border-bottom: 1px solid #ddd;

        a {
            text-decoration: none;
            color: #919191;
            font-size: 14px;
        }

        #headbar-icon-1 {
            font-size: 18px;
            line-height: 40px;
            width: 30px;
            display: block;
            float: left;
            margin-left: 20px;
            /* margin: 14px 3px 16px 25px; */
        }

        #headbar-right {
            float: right;

            p {
                font-size: 12px;
                display: block;
                float: right;
                margin-right: 20px;

            }

            .headbar-icon-box {
                display: block;
                width: 40px;
                height: 40px;
                border-left: 1px solid #ddd;
                float: right;
                text-align: center;

                .headbar-icon-2 {
                    display: inline-block;
                    font-size: 18px;
                    line-height: 40px;
                }

                .headbar-icon-2:hover {
                    color: #3091f2;
                }
            }
        }
    }
</style>
<template>
    <div id="headbar">
        <a href="/index"><Icon type="ios-people-outline" id="headbar-icon-1"></Icon>管理控制台</a>
        <div id="headbar-right">
            <a href="#" class="headbar-icon-box">
                <Icon type="log-out" class="headbar-icon-2"></Icon>
            </a>
            <p>2017年01月04日&nbsp;&nbsp;&nbsp;星期三</p>
            
        </div>
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
