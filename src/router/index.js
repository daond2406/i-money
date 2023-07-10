import { projectAuth } from "@/configs/firebase";
import { createRouter, createWebHistory } from "vue-router";

// Auth Guards
const requiedAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  console.log("userrrrr", user);
  if (!user) {
    next({ name: "Login", params: {} });
  } else next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      text: "Home",
      leading: false,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/logout.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: true,
      icon: "t2ico-plus",
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/budget.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: true,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/report.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "New Transaction",
      leading: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "transaction" */ "../views/new-transaction.vue"
      ),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile.vue"),
    beforeEnter: requiedAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
