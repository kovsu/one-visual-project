<script setup lang="ts">
import { reactive, ref } from "vue";
import CarbonAndEnergy from "./echarts/CarbonAndEnergy.vue";
const card = reactive({
  width: "20rem",
  height: "20rem",
});

const des1 =
  "灰色关联分析是一种多因素统计分析的方法。我们想要了解某个因变量受其他的因素影响的相对强弱，或已知某一个指标可能是与其他的某几个因素相关的，为了发现这个指标与其他哪个因素相对来说更有关系，而哪个因素相对关系弱一点，我们将这些因素排个序，得到一个分析结果，我们就可以知道我们关注的这个指标，与因素中的哪些更相关。而灰色关联系数则是刻画了不同因素的变化与因变量变化曲线之间的相似程度。灰色关联系数越大表示该自变量与因变量的相关性越大，越小表示该自变量与因变量的相关性越小。";
const des2 =
  "将能源、经济、环境的相关数值指标综合起来，接着给出能源、经济、环境协调度，表征三者在发展过程中的相互促进影响关系，值越大表示协调程度越高，发展情况越好。综合发展指数 G 是对能源、经济、环境发展的综合指标，最后确定三者构成系统的耦合度，这是一个与指标协调度和综合发展指数相关指标，耦合度越大表示总体社会发展协调情况较好。";
// true 展示第一段文字
let showDes = ref(true);

const change = (b: boolean) => {
  showDes.value = b;
};
</script>

<template>
  <div class="infoIntroduce">
    <p v-text="showDes ? des1 : des2"></p>
  </div>
  <div class="home-views">
    <nav class="sidebar">
      <ul class="sidebar__list">
        <li class="sidebar__item">
          <router-link
            to="/home/carbon-energy"
            class="sidebar__link"
            @click="change(true)"
            >固碳量与能源消耗</router-link
          >
        </li>
        <li class="sidebar__item">
          <router-link
            to="/home/carbon-gdp"
            class="sidebar__link"
            @click="change(true)"
            >GDP与能源</router-link
          >
        </li>
        <li class="sidebar__item">
          <router-link
            to="/home/all-energy"
            class="sidebar__link"
            @click="change(true)"
            >能源消耗占比总览</router-link
          >
        </li>
        <li class="sidebar__item">
          <router-link
            to="/home/development"
            class="sidebar__link"
            @click="change(false)"
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
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
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

.infoIntroduce {
  width: 80rem;
  padding: 3rem;
  margin: 2rem 0;
  background-color: #fff;
  box-shadow: $shadow;
  font-size: 1.6rem;
  line-height: 1.6;
  color: #aaa;
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
