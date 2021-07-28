import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        auth: false,
        title: "Francisco Llanquipichun",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About"),
      meta: {
        auth: false,
        title: "About | Francisco Llanquipichun",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/views/Projects"),
      meta: {
        auth: false,
        title: "Projects | Francisco Llanquipichun",
      },
    },
    {
      path: "*",
      name: "Error",
      component: () => import("@/views/Error"),
      meta: {
        auth: false,
        title: "Not found",
      },
    },
  ],
  linkActiveClass: "is-active",
});
