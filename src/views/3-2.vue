<style scoped lang="less">
    
    .common-top-icon {
        margin-right: 10px;
        color: #3399ff;
        float: left;
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
    
    .lr-import-2-icon {
        float: left;
        margin-top: 25px;
        margin-right: 5px;
        margin-left: 25px;

    }

    #lr-import-2-container {
        border: 1px solid #ddd;
        margin-top: 20px;

        #lr-import-2-text {
            margin-left: 16px;
            font-size: 14px;
        }

        h4 {
            position: absolute;
            margin-left: 16px;
            margin-top: 54px;
        }
        
        #lr-import-2-middle {
            margin-left: 16px;
            margin-right: 16px;
            font-size: 16px;

            #lr-import-2-table {
                margin-top: 90px;
            }
        }

        #lr-import-2-checkbox {
            line-height: 40px;
            height: 40px;
            margin-left: 16px;
            margin-right: 16px;
            border-bottom: 1px solid #ddd;
        }

        #lr-import-2-bottom {
            margin-left: 16px;
            margin-bottom: 16px;
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
                <a class="common-top-title-right" v-link="'/3-1'">返回</a>
            </div>
        </div>  

        <!-- lr-right-middle -->
        <div id="lr-import-2-container">
            <div class="lr-import-steps-container">
                <Steps class="lr-import-steps" :current="1">
                    <Step class="lr-import-step" title="已完成" content="选择文件导入"></Step>
                    <Step class="lr-import-step" title="进行中" content="导入结果预览及确认"></Step>
                    <Step class="lr-import-step" title="待进行" content="导入完成"></Step>
                </Steps>
            </div>
        
            <div id="lr-import-2-text">
                <p class="common-top-title-left common-top-margin-20">导入总数：3</p>
                <Icon class="lr-import-2-icon color-primary" type="record" size="1"></Icon>
                <p class="common-top-title-left common-top-margin-20">有效数：2</p>
                <Icon class="lr-import-2-icon color-error" type="record" size="1"></Icon>
                <p class="common-top-title-left common-top-margin-20">无效数：1</p>
                <Icon class="lr-import-2-icon color-warning" type="record" size="1"></Icon>
                <p class="common-top-title-left common-top-margin-20">重复数：1</p>
            </div>

            <h4>导入成员预览:</h4>

            <div id="lr-import-2-middle">
                <!-- table -->
                <i-table id="lr-import-2-table" border :content="self" :columns="columns7" :data="data6"></i-table>
                <!-- table -->
            </div>

            <div id="lr-import-2-checkbox">
                <Checkbox-group :model.sync="social">
                    <Checkbox value="修改密码">
                        <span>首次登陆修改初始密码</span>
                    </Checkbox>
                    <Checkbox value="覆盖导入">
                        <span>覆盖导入（覆盖重复的成员资料）</span>
                    </Checkbox>
                </Checkbox-group>
            </div>

            <div id="lr-import-2-bottom">
                <i-button class="common-top-margin-20 common-left-btn" size="small" type="primary" v-link="'/3-3'">确认导入</i-button>
                <i-button class="common-top-margin-20 common-left-btn" size="small" v-link="'/3-1'">取消</i-button>
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
                self: this,

                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        render (row, column, index) {
                            return `<Icon type="record" class="color-error" size="1"></Icon> <strong>${row.name}</strong>`;
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        }
                    }
                ],

                data6: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]


            }
        },

        methods: {
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>