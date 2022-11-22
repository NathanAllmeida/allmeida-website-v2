import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/experiences",
      name: "experiences",
      component: () => import("../views/ExperiencesView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/code",
      name: "code",
      component: () => import("../views/CodeView.vue"),
    },
    {
      path: "/mentoring",
      name: "mentoring",
      component: () => import("../views/MentoringView.vue"),
    },
    {
      path: "/allmeida-tech",
      name: "allmeida-tech",
      component: () => import("../views/FreelancerView.vue"),
    },
  ],
});

export default router;
