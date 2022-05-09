<script setup lang="ts">
import { reactive } from "vue";
import CarbonAndEnergy from "./echarts/CarbonAndEnergy.vue";
const card = reactive({
  width: "20rem",
  height: "20rem",
});
</script>

<template>
  <div class="home-views">
    <nav class="sidebar">
      <ul class="sidebar__list">
        <li class="sidebar__item">
          <router-link to="/home/carbon-energy" class="sidebar__link"
            >固碳量与能源消耗</router-link
          >
        </li>
        <li class="sidebar__item">
          <router-link to="/home/carbon-gdp" class="sidebar__link"
            >固碳量与GDP</router-link
          >
        </li>
        <li class="sidebar__item">
          <router-link to="/home/all-energy" class="sidebar__link"
            >能源消耗占比总览</router-link
          >
        </li>
        <li class="sidebar__item">
          <router-link to="/home/development" class="sidebar__link"
            >发展的指标情况</router-link
          >
        </li>
      </ul>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.home-views {
  width: 80rem;
  margin-top: 3rem;
  border-radius: 3px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: $shadow;
}

.sidebar {
  width: 100%;
  height: 5rem;
  box-sizing: content-box;
  margin-bottom: 2rem;
  border-bottom: 1px solid $color-grey-light-2;

  &__list {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }

  &__item {
    display: inline-block;
    height: 100%;
  }

  &__link {
    color: $color-black;
    text-decoration: none;
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 300;
    height: 100%;
    line-height: 5rem;
    text-align: center;
    position: relative;

    &:hover::after {
      background-color: $color-primary-dark;
      transform: scaleX(1);
    }

    &::after {
      content: "";
      display: inline-block;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background-color: $color-primary-light;
      position: absolute;
      top: 0;
      left: 0;
      transform: scaleX(0);
      transition: all 0.6s;
    }
  }
}

.router-link-exact-active {
  &::after {
    transform: scaleX(1);
  }
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
