<script setup lang="ts">
import HeadNav from "./components/HeadNav.vue";
</script>

<template>
  <HeadNav />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  // 1rem = 10px
  font-size: 62.5%;
}

.container {
  min-height: 95vh;
  padding: 4rem 3rem;
  background-color: $color-grey-light-2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
</style>
