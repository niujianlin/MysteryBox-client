import { createRouter, createWebHashHistory } from 'vue-router'

let routes = [
    { path: "/login", component: () => import("../views/login/index.vue")},
    { path: "/", redirect: "/lotto" },
    { path: "/layout", component: () => import("../views/layout/index.vue"), children:[
        // {path: "/layout/lotto", component: () => import("../views/lotto/index.vue")},
        // {path: "/layout/hall", component: () => import("../views/hall/index.vue")},
        // {path: "/layout/my", component: () => import("../views/my/index.vue")},
        {path: "/lotto", component: () => import("../views/lotto/index.vue")},
        {path: "/hall", component: () => import("../views/hall/index.vue")},
        {path: "/my", component: () => import("../views/my/index.vue")},
    ] },
    // { path: "/hall", component: () => import("../views/hallpage/HallBoard.vue")},
    // { path: "/login", component: () => import("../views/Login.vue") },
    // { path: "/detail", component: () => import("../views/Detail.vue") },
    // { path: "/homeboard", component: () => import("../views/homepage/HomeBoard.vue")},
    // { path: "/dashboard", component: () => import("../views/dashboard/Dashboard.vue") },
    // {
    //     path: "/dashboard", component: () => import("../views/dashboard/Dashboard.vue"), children: [
    //         { path: "/dashboard/category", component: () => import("../views/dashboard/Category.vue") },
    //         { path: "/dashboard/article", component: () => import("../views/dashboard/Article.vue") },
    //         { path: "/dashboard/user", component: () => import("../views/dashboard/User.vue") },
    //         { path: "/dashboard/comment", component: () => import("../views/dashboard/Comment.vue") },
    //     ]
    // },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export { router, routes }