<style scoped lang="less">
    #school-manage-table-container {
        margin-top: 16px;
    }

    #school-manage-pages-container {
        height: 40px;
        border: 1px solid #ddd;
        border-top: none;

        #school-manage-pages {
        float: right;
        line-height: 26px;
        margin-top: 8px;
        

            #school-manage-page {
                float: right;
            }
        }

        #school-manage-page-text {
            height: 40px;
            line-height: 40px;
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
            <i-button class="common-right-btn" type="primary" size="small" icon="ios-personadd-outline">新增学校</i-button>
        </div>
    </div>

    <!-- tb-container -->
    <div class="tb-container">
        
        <!-- tb-container-top -->
        <i-input class="common-short-size common-left-btn" size="small" :value.sync="schoolName" placeholder="学校名称"></i-input>
        <i-input class="common-short-size common-left-btn" size="small" :value.sync="contact_name" placeholder="联系人"></i-input>
        <i-button class="common-left-btn" size="small" type="primary" icon="ios-search">搜索</i-button>

        <!-- tb-container-school-manage-table -->
        <div id="school-manage-table-container">
            <i-table id="school-manage-table" border :content="self" :columns="schoolColumns" :data="schoolData"></i-table>
        </div>

        <!-- pages -->
        <div id="school-manage-pages-container">
            <div id="school-manage-pages">
                <Page id="school-manage-page" :current="flipInfo.currentPage" :total="flipInfo.totalCount" simple></Page>
            </div>

            <p id="school-manage-page-text">共{{flipInfo.totalCount}}条</p>
        </div>

    </div>
    

</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                content_title: '学校管理',

                self: this,

                schoolColumns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '学校名称',
                        key: 'schoolName'
                    },
                    {
                        title: '学校Logo',
                        key: 'schoolLogo',
                        width: 150,
                        align: 'center',
                        render (row, column, index) {
                            return `<img src="${ row.schoolLogo }" style="width:50px;header:50px;margin-top:14px;margin-bottom:14px;"></img>`;
                        }
                    },
                    {
                        title: '联系人',
                        key: 'contact_name'
                    },
                    {
                        title: '联系电话',
                        key: 'contact_phone'
                    },
                    {
                        title: '联系邮箱',
                        key: 'contact_email'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="show(${index})">删除</i-button>`;
                        }
                    },
                ],
                schoolData: [
                    {
                        schoolName: '清华大学',
                        schoolLogo: '/src/images/head-pic.jpg',
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
                    },
                    {
                        schoolName: '北京信息科技大学',
                        schoolLogo: 2009012706,
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
                    },
                    {
                        schoolName: '北京大学',
                        schoolLogo: 2009012706,
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
                    },
                    {
                        schoolName: '浙江大学',
                        schoolLogo: 2009012706,
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
                    },
                    {
                        schoolName: '清华大学',
                        schoolLogo: 2009012706,
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
                    },
                    {
                        schoolName: '北京信息科技大学',
                        schoolLogo: 2009012706,
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
                    },
                    {
                        schoolName: '北京大学',
                        schoolLogo: 2009012706,
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
                    },
                    {
                        schoolName: '浙江大学',
                        schoolLogo: 2009012706,
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
                    },
                    {
                        schoolName: '清华大学',
                        schoolLogo: 2009012706,
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
                    },
                    {
                        schoolName: '北京信息科技大学',
                        schoolLogo: 2009012706,
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
                    },
                    {
                        schoolName: '北京大学',
                        schoolLogo: 2009012706,
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
                    },
                    {
                        schoolName: '浙江大学',
                        schoolLogo: 2009012706,
                        contact_name: '张三',
                        contact_phone: '123456',
                        contact_email: '123456@qq.com',
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
                    title: '学校信息',
                    content: `学校名称：${this.schoolData[index].schoolName}<br>学校Logo：${this.schoolData[index].schoolLogo}<br>联系人：${this.schoolData[index].contact_name}<br>联系电话：${this.schoolData[index].contact_phone}<br>联系邮箱：${this.schoolData[index].contact_email}`
                })
            },
            remove (index) {
                this.schoolData.splice(index, 1);
            }
        }
    }
</script>