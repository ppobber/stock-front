import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import toplist from '@/components/common/toplist';
import stock from "../components/common/stock";
import about from "../components/common/about";
import my_home from "../components/my_home";

Vue.use(Router)

const myRouter = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: my_home,
        },
        {
            path: '/stock',
            component: stock,
        },
        {
            path: '/about',
            component: about,
        },
        {
            path: '*',
            redirect: '/home',
        }
    ]
})

// myRouter.beforeEach((to, from, next) => {
//     authCheck().then(result => {
//         if (result) {
//             return next()
//         } else {
//             myRouter.push('/login')
//         }
//     })
// })

export default myRouter
//
// export default [
//     {
//         path: '/login',
//         meta: {
//             title: '登录',
//             ignoreAuth: true
//         },
//         component: resolve => require(['../views/Login'], resolve)
//     },
//     {
//         path: '/',
//         redirect: '/login'
//     },
//     {
//         path: '*',
//         meta: {
//             title: '页面未找到',
//             ignoreAuth: true
//         },
//         component: NotFound
//     }
// ]