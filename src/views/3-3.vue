<style scoped lang="less">
    
    .common-top-icon {
        margin-right: 10px;
        color: #3399ff;
        float: left;
        line-height: 40px;
    }

    .common-top-icon {
        line-height: 40px;
    }

    .common-long-size {
        width: 300px;
    }

    .common-default-size {
        width: 200px;
    }

    .common-short-size {
        width: 120px;
    }

     #lr-import-3-container {
        border: 1px solid #ddd;
        margin-top: 20px;

        #lr-import-3-texts {

            font-size: 14px;

            .lr-import-3-text1 {
                margin-left: 50px;
                margin-top: 20px;
            }

            .lr-import-3-text2 {
                margin-left: 100px;
                margin-top: 20px;
                margin-bottom: 20px;
            }

            .lr-import-3-icon {
                margin-right: 10px;
            }
        }
    }

    #lr-import-3-btn {
        margin-top: -35px;
        margin-left: 50px;
    }

</style>

<template>
    
    <!-- common-top -->
    <div class="common-top-container">
        <div class="common-top-ver-line"></div>
        <a class="common-top-title-left" v-link="'/3'">{{ content_title }}</a>
    </div>

    <!-- lr-left -->
    <div class="lr-left-container">
        <div class="lr-left-title">组织架构</div>
    </div>
    
    <!-- lr-right-container -->
    <div class="lr-right-container">
        
        <!-- lr-right-top -->
        <div class="lr-right-top">
            <div class="lr-right-top-left">
                <Icon class="common-top-icon" type="arrow-right-b" size="20"></Icon>
                <div class="common-top-title-left">{{ content_word }}</div>
            </div>
            <div class="lr-right-top-right">
                <Icon class="common-top-icon" type="reply" size="20"></Icon>
                <a class="common-top-title-right" v-link="'/3-2'">返回</a>
            </div>
        </div>

        <!-- lr-right-middle -->
        <div id="lr-import-3-container">
            <div class="lr-import-steps-container">
                <Steps class="lr-import-steps" :current="2">
                    <Step class="lr-import-step" title="已完成" content="选择文件导入"></Step>
                    <Step class="lr-import-step" title="已完成" content="导入结果预览及确认"></Step>
                    <Step class="lr-import-step" title="进行中" content="导入完成"></Step>
                </Steps>
            </div>

            <div id="lr-import-3-texts">
                <p class="lr-import-3-text1 color-primary font-bord"><Icon class="lr-import-3-icon" type="checkmark-round"></Icon>导入完成！</p>
                <p class="lr-import-3-text2 color-primary">共导入3人</p>
            </div>
        </div>

    </div>

    <i-button type="primary" id="lr-import-3-btn" v-link="'/3'">关闭</i-button>

</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                content_title: '班级与学生管理',
                content_word: '批量导入',
                content_import: '产品研发部', 
            }
        }
    }
</script>