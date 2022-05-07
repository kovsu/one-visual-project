import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  // 路由规则
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("../views/HomePage.vue"),
      redirect: "/home/carbon-energy",
      children: [
        {
          path: "carbon-energy",
          component: () => import("../components/echarts/CarbonAndEnergy.vue"),
        },
        {
          path: "carbon-gdp",
          component: () => import("../components/echarts/CarbonAndGdp.vue"),
        },
        {
          path: "all-energy",
          component: () => import("../components/echarts/AllEnergy.vue"),
        },
        {
          path: "development",
          component: () => import("../components/echarts/TheDevelopment.vue"),
        },
      ],
    },
    {
      path: "/energy",
      component: () => import("../views/EnergySources.vue"),
      redirect: "/energy/china-energy",
      children: [
        {
          path: "china-energy",
          component: () => import("../components/echarts/ChinaEnergy.vue"),
        },
        {
          path: "per-energy",
          component: () => import("../components/echarts/PerEnergy.vue"),
        },
        {
          path: "per-coal",
          component: () => import("../components/echarts/PerCoal.vue"),
        },
        {
          path: "per-gas",
          component: () => import("../components/echarts/PerGas.vue"),
        },
        {
          path: "china-energy2",
          component: () => import("../components/echarts/ChinaEnergy2.vue"),
        },
      ],
    },
    {
      path: "/forest",
      component: () => import("../views/ForestCarbon.vue"),
    },
    {
      path: "/forecast",
      component: () => import("../views/TheForecast.vue"),
    },
  ],
});
