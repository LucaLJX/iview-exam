const routers = {
    '/index': {
        component(resolve) {
            require(['./views/index.vue'], resolve);
        }
    },

        //route for 运营管理平台
    '/admin/schools': {
        component (resolve) {
            require(['./views/admin/schools.vue'], resolve);
        }
    },

    //route for 学校管理平台
    '/school/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },

    '/school/students': {
        component (resolve) {
            require(['./views/school/students.vue'], resolve);
        }
    },

    '/school/teachers': {
        component (resolve) {
            require(['./views/school/teachers.vue'], resolve);
        }
    },


    '/3-1': {
        component (resolve) {
            require(['./views/3-1.vue'], resolve);
        }
    },

    '/3-2': {
        component (resolve) {
            require(['./views/3-2.vue'], resolve);
        }
    },

    '/3-3': {
        component (resolve) {
            require(['./views/3-3.vue'], resolve);
        }
    },
};
export default routers;