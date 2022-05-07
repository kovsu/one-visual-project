<script setup lang="ts">
import EnergyStruct from "../components/echarts/EnergyStruct.vue";
import CoalStruct from "../components/echarts/CoalStruct.vue";
</script>

<template>
  <div class="container container--row">
    <div class="forest-item">
      <div class="energy-struct">
        <div class="energy-struct__front">
          <div class="energy-struct__title energy-struct__title--1">
            <h2 class="heading">能源结构预测</h2>
          </div>
          <p class="energy-struct__des">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            quibusdam voluptate a dolorum maiores similique placeat omnis
            distinctio soluta, sit architecto, nulla tempora eius maxime
            voluptatum atque! Deserunt, perferendis nihil?
          </p>
        </div>
        <div class="energy-struct__end">
          <EnergyStruct />
        </div>
      </div>
    </div>

    <div class="forest-item">
      <div class="energy-struct">
        <div class="energy-struct__front">
          <div class="energy-struct__title energy-struct__title--2">
            <h2 class="heading">煤炭使用预测</h2>
          </div>
          <p class="energy-struct__des">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            quibusdam voluptate a dolorum maiores similique placeat omnis
            distinctio soluta, sit architecto, nulla tempora eius maxime
            voluptatum atque! Deserunt, perferendis nihil?
          </p>
        </div>
        <div class="energy-struct__end">
          <CoalStruct />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container--row {
  flex-direction: row !important;
  justify-content: space-evenly;
}

.forest-item {
  width: 60rem;
  height: 52rem;
  margin-bottom: 5rem;
}

.heading {
  font-size: 3rem;
  letter-spacing: 3px;
  color: #fff;
}

.energy-struct {
  width: 60rem;
  border-radius: 3px;
  position: relative;
  perspective: 150rem;

  &__front {
    width: 60rem;
    height: 52rem;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    overflow: hidden;
    transition: all 0.8s ease;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    &--1 {
      width: 100%;
      height: 30rem;
      background-image: linear-gradient(
        to right bottom,
        $color-tertiary-light,
        $color-tertiary-dark
      );
      text-align: center;
      line-height: 30rem;
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    }

    &--2 {
      width: 100%;
      height: 30rem;
      background-image: linear-gradient(
        to right bottom,
        $color-fourth-light,
        $color-fourth-dark
      );
      text-align: center;
      line-height: 30rem;
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    }
  }

  &__des {
    margin-top: 2rem;
    width: 100%;
    padding: 0 10rem;
    display: block;
    font-size: 1.4rem;
    line-height: 1.7;
    letter-spacing: 1px;
  }

  &__end {
    width: 60rem;
    height: 52rem;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    overflow: hidden;
    transition: all 0.8s ease;
    transform: rotateY(-180deg);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover &__front {
    transform: rotateY(180deg);
  }

  &:hover &__end {
    transform: rotateY(0);
  }
}
</style>
