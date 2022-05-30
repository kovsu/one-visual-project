<script setup lang="ts">
import EnergyStruct from "../components/echarts/EnergyStruct.vue";
import CoalStruct from "../components/echarts/CoalStruct.vue";
import { computed, ComputedRef, ref } from "vue";

let energyReady = ref(false);
let coalReady = ref(false);

const changeStatus = (status: boolean) => {
  energyReady.value = status;
};

const changeStatus2 = (status: boolean) => {
  coalReady.value = status;
};

</script>

<template>
  <div class="container">
    <div class="forest-item">
      <div class="energy-struct">
        <div class="energy-struct__title energy-struct__title--1">
          <h2 class="heading">能源结构预测</h2>
        </div>
        <div class="des">
          <img src="../assets/energy.jpg" alt="" class="energy-struct__img" />
          <p class="energy-struct__des">
            我们发现能源的利用情况能够大幅度的影响环境以及整个综合指标的评估，因此对能源利用作出最佳决策是十分必要的，由于马尔可夫预测具有无后效性的特点,
            可以基于近期数据做出较为准确的预测。预测结果表明: 与 2019 年相比,
            我国煤炭能源在总体使用的比例将进一步下降,
            原油、天然气等优质清洁能源的使用占比将会持续升高。
          </p>
        </div>

        <div
          class="energy-struct__content"
          :style="{ 'max-height': energyReady ? '50rem' : '0' }"
        >
          <EnergyStruct @change="changeStatus" />
        </div>
      </div>
    </div>

    <div class="forest-item">
      <div class="energy-struct">
        <div class="energy-struct__title energy-struct__title--2">
          <h2 class="heading">煤炭使用预测</h2>
        </div>
        <div class="des">
          <img src="../assets/coal.jpg" alt="" class="energy-struct__img" />
          <p class="energy-struct__des">
            我们发现目前煤炭的使用占市场主导地位，因此动态掌握煤炭的使用情况分析未来煤炭使用趋势可作为后续能源发展的参考，并且煤炭的使用量为时间序列，因此我们使用gru模型，一种循环神经网络的变体，可以捕捉到长期有效的信息，可以对近期的煤炭使用量做出较为准确的预测，准确率达到85%，预测结果看出煤炭的使用在逐渐下降。
          </p>
        </div>
        <div
          class="energy-struct__content"
          :style="{ 'max-height': coalReady ? '50rem' : '0' }"
        >
         
          <CoalStruct @ready="changeStatus2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.forest-item {
  width: 80rem;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: $shadow;
  margin-bottom: 2rem;
  padding: 5rem;
}

.energy-struct {
  &__title {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 2rem;

    &--1 {
      @include text-color($color-tertiary-light, $color-tertiary-dark);
    }

    &--2 {
      @include text-color($color-fourth-light, $color-fourth-dark);
    }
  }

  &__img {
    float: left;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin-right: 2rem;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
  }

  &__des {
    font-size: 1.6rem;
    color: #aaa;
    line-height: 1.6;
  }

  &__content {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: max-height 1s ease-in-out;
  }
}
</style>
