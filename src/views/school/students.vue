<style scoped lang="less">
    #lr-import-0-table-container {
        margin-top: 15px
    }

    #lr-import-0-right-bottom {
        border-left: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        border-right: 1px solid #ddd;
        height: 40px;
        line-height: 40px;
        
        p {
            display: block;
            float: right;
            margin-right: 10px;
        }

        #import-0-page {
            display: block;
            float: right;
            line-height: 28px;
            margin-top: 7px;
        }
    }

    .import-0-bottom {
        margin-left: 14px;
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
                <i-button class="common-right-btn" type="primary" icon="ios-people-outline"  size="small"@click="modalAddstudent = true">新建班级</i-button>
                <Modal
                    :visible.sync="modalAddstudent"
                    title="新建子部门"
                    @on-ok="ok"
                    @on-cancel="cancel">
                    <div style="font-size: 18px;">
                        <p style="margin-left: 80px;">在<span style="color: #3399ff">{{content_word}}</span>下创建子部门:</p>
                        <i-input :value.sync="value" placeholder="子部门名称" style="width: 300px; margin-top: 10px; margin-left: 80px;"></i-input>
                    </div>
                </Modal>
                <i-button class="common-right-btn" type="primary" size="small" icon="ios-personadd-outline">编辑班级名称</i-button>
                <i-button class="common-right-btn" type="primary" size="small" icon="ios-trash-outline">删除当前班级</i-button>
                <i-button class="common-right-btn" type="primary" size="small" icon="ios-download-outline" v-link="'/3-1'">教师授权</i-button>
            </div>  
        </div>
        <div class="lr-right-top">
            <div class="lr-right-top-right">
                <i-button class="common-right-btn" type="primary" icon="ios-compose-outline" size="small">新增学生</i-button>
                <i-button class="common-right-btn" type="primary" icon="ios-compose-outline" size="small" v-link="'/3-1'">批量导入</i-button>
            </div>  
        </div>
    
        <!-- lr-right-middle -->
        <div class="lr-right-middle">
            <!-- <i-select class="common-left-btn common-short-size" size="small" :model.sync="model1" placeholder="角色类型">
                <i-option v-for="item in roleList" :value="item.value">{{ item.label }}</i-option>
            </i-select> -->
            <i-input class="common-short-size common-left-btn" size="small" :value.sync="name" placeholder="姓名"></i-input>
            <i-input class="common-short-size common-left-btn" size="small" :value.sync="num" placeholder="学号"></i-input>
            <i-button class="common-left-btn" size="small" type="primary" icon="ios-search">搜索</i-button>
        </div>
    
        <!-- lr-import-0 页面内table的区域 -->
        <div id="lr-import-0-table-container">
            <i-table id="lr-import-0-table" border :content="self" :columns="studentColumns" :data="studentData"></i-table>
        </div>
    
        <!-- lr-right-bottom -->
        <div id="lr-import-0-right-bottom">

            <i-button class="import-0-bottom common-left-btn" type="primary" size="small" >批量删除</i-button>
        
            <div id="import-0-page">
                <Page id="import-0-page" :current="flipInfo.currentPage" :total="flipInfo.totalCount" simple></Page>
            </div>

            <p>共{{flipInfo.totalCount}}条</p>
        </div>

    </div>
    
    

</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                content_title: '班级与学生管理',
                content_word: '计算机学院 / 软件工程专业 / 2009届一班',
                self: this,

                modalAddstudent: false,
                studentColumns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '学号',
                        key: 'num'
                    },
                    {
                        title: '班级',
                        key: 'class_level'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        }
                    },
                ],
                studentData: [
                    {
                        name: '王小明1',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明5',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明9',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明12',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明5',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明9',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        name: '王小明12',
                        num: 2009012706,
                        class_level: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                ],
                flipInfo: {
                    currentPage: 2,
                    totalCount: 112
                }
            }
        },

        methods: {
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.studentData[index].name}<br>年龄：${this.studentData[index].age}<br>地址：${this.studentData[index].address}`
                })
            },
            remove (index) {
                this.studentData.splice(index, 1);
            }
        }

    }
</script>