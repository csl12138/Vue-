import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from "views/DefaultPage"
import Home from "views/Home.vue"
import cookie from "@/utils/cookie"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: {
      name: "home"
    },
    component: DefaultPage,
    children: [
      {
        path: "home",
        name: "home",
        component: Home
      },
      {
        path: "changeCity",
        name: "changeCity",
        component: () => import("views/ChangeCity"),
        meta: {
          needLogin: true
        }
      },
      {
        path: "search/:keyword",
        name: "searchRes",
        component: () => import("views/SearchRes")
      },
      {
        path: "detail/:store",
        name: "detail",
        component: () => import("views/Detail")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("views/Login")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("views/Register")
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin && !cookie.get("user")) {
    const toLogin = window.confirm("需要登录才能访问该页面，跳转到登录页面吗？");
    if (toLogin) {
      next({ name: "login" });
    } else {
      next(false);
    }
  } else {
    next();
  }
})

export default router
