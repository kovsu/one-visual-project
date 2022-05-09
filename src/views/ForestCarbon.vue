<script setup lang="ts">
import { ref } from "vue";
import CarbonAndForest from "../components/echarts/CarbonAndForest.vue";
import CarbonAndRain from "../components/echarts/CarbonAndRain.vue";
import CarbonAndForestArgs from "../components/echarts/CarbonAndForestArgs.vue";

const show = ref(false);
</script>

<template>
  <div class="container">
    <div class="forest-description">
      <div class="forest-description__item">
        <svg class="forest-description__icon--1">
          <use xlink:href="../assets/sprites.svg#icon-bug"></use>
        </svg>
        <h2 class="heading-secondary">森林病害</h2>
        <p class="paragraph">
          在2020年，森林病害发生面积达295.14万公顷，与固碳量关系系数达0.617，对固碳量的影响处于中等，相较于造林，我们更应该防治病虫灾害。
        </p>
      </div>
      <div class="forest-description__item">
        <svg class="forest-description__icon--2">
          <use xlink:href="../assets/sprites.svg#icon-fire"></use>
        </svg>
        <h2 class="heading-secondary">火灾</h2>
        <p class="paragraph">
          在2020年，火灾受害面积达8526.2公顷，与固碳量关系系数达0.789，对固碳量的影响最大，我们要尽量避免森林火灾的发生。
        </p>
      </div>
      <div class="forest-description__item">
        <svg class="forest-description__icon--3">
          <use xlink:href="../assets/sprites.svg#icon-forrst"></use>
        </svg>
        <h2 class="heading-secondary">造林面积</h2>
        <p class="paragraph">
          在2020年，造林面积达6933.7千公顷，与固碳量关系系数达0.508，关联系数较小，但也存在一定的关系，在造林的同时也要防止乱砍乱伐。
        </p>
      </div>
    </div>
    <div class="carbon-rain">
      <div class="carbon-rain__heading">
        <img src="../assets/bg1.jpg" alt="" class="carbon-rain__photo" />
        <img src="../assets/bg2.jpg" alt="" class="carbon-rain__photo" />
        <img src="../assets/bg3.jpg" alt="" class="carbon-rain__photo" />
      </div>
      <div class="carbon-rain__way">
        <p class="carbon-rain__paragraph">
          为了探究哪些因素与总体固碳量有较为明显的简单线性关系，使用 Pearson
          相关系数对变量之间进行相关分析，为防止数值差异的影响，对原始数据进行归一化处理，使得指标之间的量级相同，方便比较。使用
          min-max 归一化方法，对原始数线性变换。计算得出 Z=2.5>1.96,
          落入拒绝域，因此我们有 95%的把握认为森林固碳量与降雨量有关系。
        </p>
        <button class="carbon-rain__btn" @click="show = true">生成结果</button>
      </div>
      <div class="carbon-rain__detail">
        <transition name="fade" mode="out-in">
          <span v-if="!show"></span>
          <CarbonAndRain v-else="show" />
        </transition>
      </div>
    </div>
    <div class="carbon-forest">
      <div class="carbon-forest__left">
        <h2 class="heading-secondary">树木年龄与固碳量</h2>
        <p class="carbon-forest__des">
          通过调查我们发现树木固碳量与树木的年龄具有一定关系，我们选择普遍的树木年龄固碳能力的数据进行分析，得到相关直方图并进行拟合，从图中我们可以发现中龄树木的固碳能力最强，低龄木以及老龄木的固碳量均不及中龄木。具体说来，由于低龄木的整体储备少，光合作用的积累并不占优势，而对于老龄木呼吸作用与光合作用的固碳量几乎持平
        </p>
      </div>
      <div class="carbon-forest__right">
        <CarbonAndForest />
      </div>
    </div>
    <div class="carbon-area">
      <table class="carbon-area__table" align="center">
        <tr>
          <th>指标</th>
          <th>病害面积</th>
          <th>火灾面积</th>
          <th>造林面积</th>
          <th>森林面积</th>
          <th>年降雨量</th>
          <th>中龄林占比</th>
        </tr>
        <tr>
          <td>关联系数</td>
          <td>0.617</td>
          <td>0.789</td>
          <td>0.508</td>
          <td>0.423</td>
          <td>0.824</td>
          <td>0.513</td>
        </tr>
      </table>
      <CarbonAndForestArgs />
    </div>
  </div>
</template>

<style lang="scss">
.heading-secondary {
  font-size: 1.8rem;
}

.paragraph {
  font-size: 1.4rem;
  color: $color-grey-dark-2;
  text-align: center;
  line-height: 1.7;
  letter-spacing: 1px;
  transition: all 0.3s;
}

.forest-description {
  width: 100rem;
  display: flex;
  justify-content: space-between;
  &__item {
    width: 30rem;
    padding: 2rem 4rem;
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    box-shadow: $shadow;
    transition: all 0.4s;

    &:hover {
      transform: scale(1.05) translateY(-2px);
      .paragraph {
        @include text-color($color-primary-light, $color-primary-dark);
      }
    }
  }

  &__icon {
    &--1 {
      width: 3.5rem;
      height: 3.5rem;
      fill: #ff7730;
    }

    &--2 {
      width: 3.5rem;
      height: 3.5rem;
      fill: #e83f62;
    }

    &--3 {
      width: 3.5rem;
      height: 3.5rem;
      fill: $color-primary;
    }
  }
}

.carbon-forest {
  width: 100rem;
  height: auto;
  border-radius: 3px;
  margin-top: 5rem;
  background-image: linear-gradient(
    to right,
    $color-primary-light,
    $color-primary-dark
  );
  box-shadow: $shadow;

  display: flex;
  align-items: center;

  &__left {
    flex: 0 0 40%;
    align-self: stretch;
    background-color: rgba($color-white, 0.7);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > * {
      margin-top: 2rem;
    }
  }

  &__right {
    flex: 1;
    padding: 4rem 0;
  }

  &__des {
    display: block;
    width: 70%;
    font-size: 1.4rem;
    line-height: 1.7;
    color: $color-grey-dark-2;
  }
}

.carbon-rain {
  width: 100rem;
  margin-top: 4rem;
  background-color: #fff;
  box-shadow: $shadow;
  border-radius: 3px;
  overflow: hidden;

  &__heading {
    width: 100%;
    display: flex;
  }

  &__photo {
    width: 33.33333%;
    overflow: hidden;
    align-self: stretch;
  }

  &__way {
    border-bottom: 1px solid $color-grey-light-2;
    display: flex;
    align-items: center;
  }

  &__paragraph {
    width: 80%;
    margin-right: auto;
    font-size: 1.4rem;
    color: $color-grey-dark-2;
    text-align: center;
    line-height: 1.2;
    letter-spacing: 1px;
    padding: 2rem 1rem;
  }

  &__btn {
    align-self: stretch;
    outline: none;
    border: none;
    background-color: $color-primary;
    padding: 2rem;
    color: $color-white;
    cursor: pointer;
    font-size: 1.6rem;
    letter-spacing: 2px;
  }

  &__detail {
    margin-top: 4rem;
    min-height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      background-image: linear-gradient(
        to right,
        $color-primary-light,
        $color-primary-dark
      );
      display: block;
      width: 50rem;
      height: 5px;
      border-radius: 100px;
      animation: detail-scale 2.4s infinite;
    }
  }
}

@keyframes detail-scale {
  0% {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

.carbon-area {
  width: 100rem;
  margin-top: 5rem;
  padding: 4rem 2rem;
  background-color: #fff;
  box-shadow: $shadow;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__table {
    width: 100%;
    margin-bottom: 4rem;
    border-right: 1px solid $color-primary;
    border-bottom: 1px solid $color-primary;
    text-align: center;
  }
}

th,
td {
  padding: 1rem 2rem;
  text-align: center;
  border-left: 1px solid $color-primary;
  border-top: 1px solid $color-primary;
}

td:not(:first-child) {
  font-size: 1.6rem;
  font-weight: 500;
  color: $color-grey-dark-2;
}
</style>
