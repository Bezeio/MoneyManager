import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase"

const requireAuth = (to, from, next) => {
    const user = projectAuth.currentUser
    if (!user) next({ name: 'Login', params: {} })

    else next()
}

const routes = [{
        path: "/",
        name: "Home",
        meta: {
            leading: true,
            text: "Hi, Thanh Phong",
            isShowFooter: true

        },
        component: () =>
            import ( /* webpackChunkName: "home" */ "../views/index.vue"),
    },
    {
        path: "/register",
        name: "Register",
        meta: {
            layout: "auth",
        },
        component: () =>
            import ( /* webpackChunkName: "register" */ "../views/register.vue"),
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            layout: "auth",
        },
        component: () =>
            import ( /* webpackChunkName: "login" */ "../views/login.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        meta: {
            text: "Profile",
            leading: false,
            isShowFooter: true
        },
        component: () =>
            import ( /* webpackChunkName: "profile" */ "../views/profile.vue"),
        beforeEnter: requireAuth
    },
    {
        path: "/logout",
        name: "Logout",
        component: () =>
            import ( /* webpackChunkName: "logout" */ "../views/logout.vue"),
    },
    {
        path: "/report",
        name: "Report",
        meta: {
            leading: true,
            text: "Report",
            isShowFooter: true
        },
        component: () =>
            import ( /* webpackChunkName: "report" */ "../views/report.vue"),
    },
    {
        path: "/budget",
        name: "Budget",
        meta: {
            leading: true,
            text: "Budget",
            isShowFooter: true
        },
        component: () =>
            import ( /* webpackChunkName: "budget" */ "../views/budget.vue"),
    },
    {
        path: "/new-transaction",
        name: "NewTransaction",
        meta: {
            leading: true,
            text: "NewTransaction",
            isShowFooter: true
        },
        component: () =>
            import ( /* webpackChunkName: "new-transaction" */ "../views/new-transaction.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;