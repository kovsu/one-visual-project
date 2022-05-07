<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="logo-title">
      <p>泛能源大数据可视化</p>
    </div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/home" class="nav__link">主页</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/energy" class="nav__link">能源</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/forest" class="nav__link">森林固碳</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/forecast" class="nav__link">预测</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  padding: 2rem 4rem;
  border-bottom: 1px solid $color-grey-light-2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-title {
  font-size: 2rem;
  font-weight: 700;
  background-image: linear-gradient(
    to right bottom,
    $color-primary-light,
    $color-primary-dark
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.nav {
  &__list {
    list-style: none;
    display: flex;
  }

  &__item {
    padding: 0.5rem 1rem;
  }

  &__link {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 100;
    color: $color-black;
    text-decoration: none;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 110%;
      display: inline-block;
      border-radius: 3px;
      width: 0;
      height: 2px;
      background-color: $color-primary;
      transition: all 0.6s;
    }
  }
}

.router-link-active {
 &::after {
   width: 100%;
 }
}
</style>
