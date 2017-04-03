<style scoped lang="less">
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

    #lr-import-1-container {
        border: 1px solid #ddd;
        margin-top: 20px;

        #lr-import-1-middle {
            margin-left: 16px;
            margin-right: 16px;
            font-size: 14px;

            #import-1-input {
                display: block;
                font-size: 12px;
                width: 300px;
                height: 25px;
                border: 1px solid #ddd;
                margin-top: 4px;
            }
        }

        #lr-import-1-bottom {
            border-top: 1px solid #ddd;
            margin-top: 20px;
            font-size: 12px;  
            margin-bottom: 16px;  

            #lr-import-1-bottom-text {
                margin-left: 16px;
                font-size: 12px;
                line-height: 20px;
            } 
        }
    }



</style>

<template>
  
    <!-- common-top -->
    <div class="common-top-container">
        <div class="common-top-ver-line"></div>
        <a class="common-top-title-left" v-link="'/index'">{{ content_title }}</a>
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
                <a class="common-top-title-right" v-link="'/3'">返回</a>
            </div>
        </div>  
        
        <!-- lr-right-middle -->
        <div id="lr-import-1-container">
            <div class="lr-import-steps-container">
                <Steps class="lr-import-steps" :current="0">
                    <Step class="lr-import-step" title="进行中" content="选择文件导入"></Step>
                    <Step class="lr-import-step" title="待进行" content="导入结果预览及确认"></Step>
                    <Step class="lr-import-step" title="待进行" content="导入完成"></Step>
                </Steps>
            </div>
            <div id="lr-import-1-middle">
                <p class="common-top-margin-15">批量导入成员到<span class="color-primary">{{ content_import }}</span></p>
                <p class="common-top-margin-15">请选择要导入的文件</p>
                <input id="import-1-input" type="file" name="fileUpload" />
                <i-button class="common-top-margin-15 common-left-btn" type="primary" size="small" v-link="'/3-2'">上传</i-button>
            </div>
            <div id="lr-import-1-bottom">
                <div id="lr-import-1-bottom-text">
                    <h3 class="common-top-margin-15">导入说明：</h3>
                    <p>1.请使用Excel等软件创建一个CSV文件，格式如下（点击下载模版）：</p>
                    <img src="/src/images/import-1.jpg">
                    <p>2.各列内容：邮箱账号（必填）、邮箱密码（必填）、编号、名字、联系电话、部门（部门层级用斜杠分隔）、性别、职务、手机、生日</p>
                    <p>3.密码格式要求：</p>
                    <p>(1)必须同时包含大小写</p>
                    <p>(1)必须同时包含大小写</p>
                    <p>(1)必须同时包含大小写</p>
                    <p>(1)必须同时包含大小写</p>
                    <p>(1)必须同时包含大小写</p>
                    <p>2.各列内容：邮箱账号（必填）、邮箱密码（必填）、编号、名字、联系电话、部门（部门层级用斜杠分隔）、性别、职务、手机、生日</p>
                </div>
            </div>
        </div>    

    </div>
    

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