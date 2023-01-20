import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/HomePage";

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
      component: () => import("@/views/AboutPage"),
      meta: {
        auth: false,
        title: "About | Francisco Llanquipichun",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/views/ProjectsPage"),
      meta: {
        auth: false,
        title: "Projects | Francisco Llanquipichun",
      },
    },
    {
      path: "*",
      name: "Error",
      component: () => import("@/views/ErrorPage"),
      meta: {
        auth: false,
        title: "Not found",
      },
    },
  ],
  linkActiveClass: "is-active",
});
