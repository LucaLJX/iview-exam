<style scoped lang="less">
.clean {
    clear: both;
}

* {

    #head-portrait {
        width: 240px;
        height: 200px;
        text-align: center;
        padding-top: 20px;

        #head-portrait-pic {
            margin: 10px auto auto;
            width: 80px;
            height: 80px;
            border-radius: 50px;

            img {
                width: 100%;
                border-radius: 50%;
            }
        }

        p {
            margin-top: 10px;
            font-size: 14px;
            color: #fff;
        }

    }
}

</style>

<template>
    <div id="head-portrait">
        <div class="clean"></div>
        <div id="head-portrait-pic">
            <img :src="logoPath">
        </div>
        <p>{{title1}}</p>
        <p>{{title2}}</p>
    </div>
    <Menu :theme="theme_submenu" accordion>
        <Menu-item key="1" v-link="'/admin/index'"><Icon type="ios-home-outline"></Icon>首页</Menu-item>
        <Menu-item key="2" v-link="'/admin/schools'"><Icon type="social-buffer-outline"></Icon>学校管理</Menu-item>
        <!-- <Menu-item key="3" v-link="'/school/index'"><Icon type="ios-home-outline"></Icon>首页</Menu-item> -->
        <Menu-item key="4" v-link="'/school/teachers'"><Icon type="ios-people-outline"></Icon>教师管理</Menu-item>
        <!-- <Menu-item key="5" v-link="'/school/course'"><Icon type="ios-people-outline"></Icon>课程体系管理</Menu-item> -->
        <Menu-item key="6" v-link="'/school/students'"><Icon type="ios-people-outline"></Icon>班级与学生管理</Menu-item>
        <Menu-item key="7" v-link="'/school/exams'"><Icon type="ios-people-outline"></Icon>考试管理</Menu-item>
        <Menu-item key="8" v-link="'/school/settings'"><Icon type="ios-people-outline"></Icon>系统管理</Menu-item>

        <!-- <Submenu key="4">
            <template slot="title">
                <Icon type="ios-paper"></Icon>
                内容管理
            </template>
            <Menu-item key="4-1">文章管理</Menu-item>
            <Menu-item key="4-2">评论管理</Menu-item>
            <Menu-item key="4-3">举报管理</Menu-item>
        </Submenu> -->
        
    </Menu>
</template>

<script>
    export default {
        data () {
            return {
                logoPath: '/src/images/head-pic.jpg',
                title1: '刘老师',
                title2: '北京xxx大学',
                theme_submenu: 'dark'
            }
        }
    }
</script>
