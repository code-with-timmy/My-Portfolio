import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import WorkPage from "./components/WorkPage.vue";
import MyBlog from "./components/MyBlog.vue";
import AboutMe from "./components/AboutMe.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },

    {
      path: "/work",
      component: WorkPage,
    },

    {
      path: "/blogs",
      component: MyBlog,
    },

    {
      path: "/about",
      component: AboutMe,
    },
  ],
});

export default router;
