<style scoped lang="less">
    .common-left-margin-8 {
        margin-left: 8px;
    }

    #teacher-manage-table-container {
        margin-top: 16px;

    }
    
    #teacher-manage-pages-container {
        border: 1px solid #ddd;
        border-top: none;
        height: 40px;
        line-height: 40px;
        
        #teacher-manage-pages {
            float: right;
            line-height: 26px;
            margin-top: 8px;
        

            #teacher-manage-page {
                float: right;
            }
        }

        #teacher-manage-page-text {
            height: 40px;
            margin-right: 16px;
            float: right;
            display: block;
        }  

    }

    

</style>

<template>
    
    <!-- common-top -->
    <div class="common-top-container">
        <div class="common-top-ver-line"></div>
        <a class="common-top-title-left" v-link="'/4'">{{ content_title }}</a>
        <div class="common-top-right">
            <i-button class="common-right-btn" type="primary" size="small" icon="ios-personadd-outline">新增教师</i-button>
        </div>
    </div>

    <!-- tb-container -->
    <div class="tb-container">
        
        <!-- tb-container-top -->
        <i-select :model.sync="teacherRole" size="small" class="common-short-size common-left-btn">
            <i-option v-for="item in teacherRoles" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-input class="common-short-size common-left-btn" size="small" :value.sync="teacherName" placeholder="教师姓名"></i-input>
        <i-input class="common-short-size common-left-btn" size="small" :value.sync="teacherNum" placeholder="教师编号"></i-input>
        <i-button class="common-left-btn" size="small" type="primary" icon="ios-search">搜索</i-button>
        
        <!-- tb-container-teacher-manage-table -->
        <div id="teacher-manage-table-container">
            <i-table id="teacher-manage-table" border :content="self" :columns="teacherColumns" :data="teacherData"></i-table>
        </div>
        
        <div id="teacher-manage-pages-container">
            
            <i-button class="common-left-btn common-left-margin-8" type="primary" size="small" icon="ios-personadd-outline">新增教师</i-button>
            <i-button class="common-left-btn" type="primary" size="small" icon="ios-personadd-outline">新增教师</i-button>

            <div id="teacher-manage-pages">
                <Page id="teacher-manage-page" :current="flipInfo.currentPage" :total="flipInfo.totalCount" simple></Page>
            </div>

            <p id="teacher-manage-page-text">共{{flipInfo.totalCount}}条</p>

        </div>

        

        

    </div>

</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                content_title: '教师管理',

                self: this,

                teacherRoles: [
                    {
                        value: 'englishTeacher',
                        label: '英语老师'
                    },
                    {
                        value: 'mathTeacher',
                        label: '数学老师'
                    },
                    {
                        value: 'physicsTeacher',
                        label: '物理老师'
                    },
                    {
                        value: 'historyTeacher',
                        label: '历史老师'
                    },
                ],
                teacherRole: '',

                teacherColumns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '教师姓名',
                        key: 'teacherName'
                    },
                    {
                        title: '教师编号',
                        key: 'teacherNum'
                    },
                    {
                        title: '教师角色',
                        key: 'teacherRole'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 225,
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="show(${index})">编辑</i-button> <i-button type="primary" size="small" @click="show(${index})">修改角色</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        }
                    },
                ],
                teacherData: [
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明555555',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明100',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1000000',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
                    },
                    {
                        teacherName: '王小明1',
                        teacherNum: 2009012706,
                        teacherRole: '计算机学院 / 软件工程专业 / 2009届一班'
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
                    title: '教师信息',
                    content: `教师姓名：${this.teacherData[index].teacherName}<br>教师编号：${this.teacherData[index].teacherNum}<br>教师角色：${this.teacherData[index].teacherRole}`
                })
            },
            remove (index) {
                this.teacherData.splice(index, 1);
            }
        }
    }
</script>