<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { getSimpleDes } from "../api/get";

let des = reactive({
  arr: [],
});

onMounted(async () => {
  let res = (await getSimpleDes()) as any;
  // console.log(res);
  des.arr = res.data;
});
</script>

<template>
  <div class="simple-description">
    <div class="simple-description__item">
      <p class="simple-description__title">森林总面积</p>
      <span class="simple-description__unit">万公顷</span>
      <p class="simple-description__num simple-description__num--1">
        {{ des.arr[0] }}
      </p>
    </div>
    <div class="simple-description__item">
      <p class="simple-description__title">造林总面积</p>
      <span class="simple-description__unit">万公顷</span>
      <p class="simple-description__num simple-description__num--2">
        {{ des.arr[1] }}
      </p>
    </div>
    <div class="simple-description__item">
      <p class="simple-description__title simple-description__unit--2">
        能源消耗
      </p>
      <span class="simple-description__unit">万吨</span>
      <p class="simple-description__num simple-description__num--3">
        {{ des.arr[2] }}
      </p>
    </div>
    <div class="simple-description__item">
      <p class="simple-description__title simple-description__unit--2">
        固碳量
      </p>
      <span class="simple-description__unit">百万吨</span>
      <p class="simple-description__num simple-description__num--4">
        {{ des.arr[3] }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.simple-description {
  width: 80rem;
  background-color: $color-white;
  padding: 2rem 4rem;
  border-radius: 3px;
  box-shadow: $shadow;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &__item {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.08) translateY(-4px);
    }
  }

  &__title {
    display: inline-block;
    padding: 1rem 1.5rem 0 1.5rem;
    font-size: 1.8rem;
    font-weight: 700;
    position: relative;
    overflow: hidden;
    z-index: 10;
  }

  &__unit {
    position: absolute;
    top: 0.2rem;
    right: 1.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    color: #c4c4c4;
    z-index: 1;
  }

  &__num {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;

    &--1 {
      @include text-color($color-primary-light, $color-primary-dark);
    }

    &--2 {
      @include text-color($color-secondary-light, $color-secondary-dark);
    }

    &--3 {
      @include text-color($color-tertiary-light, $color-tertiary-dark);
    }

    &--4 {
      @include text-color($color-fourth-light, $color-fourth-dark);
    }
  }
}
</style>
