<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="energy-container">
      <nav class="energy-nav">
        <ul class="energy-nav__list">
          <li class="energy-nav__item">
            <router-link to="/energy/china-energy" class="energy-nav__link"
              ><span>中国能源消耗量</span></router-link
            >
          </li>
          <li class="energy-nav__item">
            <router-link to="/energy/per-energy" class="energy-nav__link"
              ><span>人均能源消耗</span></router-link
            >
          </li>
          <li class="energy-nav__item">
            <router-link to="/energy/per-coal" class="energy-nav__link"
              ><span>人均煤炭消耗量</span></router-link
            >
          </li>
          <li class="energy-nav__item">
            <router-link to="/energy/per-gas" class="energy-nav__link"
              ><span>人均天然气消耗量</span></router-link
            >
          </li>
          <li class="energy-nav__item">
            <router-link to="/energy/china-energy2" class="energy-nav__link"
              ><span>中国能源不同行业消耗情况</span></router-link
            >
          </li>
        </ul>
      </nav>
      <div class="energy-content">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.energy-container {
  min-width: 100rem;
  display: flex;
  flex-direction: row;
}

.energy-nav {
  flex: 0 0 30%;
  background-color: $color-grey-dark-3;

  &__list {
    list-style: none;
    margin-top: 2rem;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }

  &__link {
    font-size: 1.6rem;
    font-weight: 500;
    text-decoration: none;
    color: $color-white;
    display: block;
    height: 5rem;
    text-align: center;
    line-height: 5rem;
    box-sizing: content-box;

    position: relative;

    span {
      position: relative;
      z-index: 2;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background-color: $color-primary-light;
      transform: scaleY(0);
      transition: transform 0.3s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.3s;
      z-index: 1;
    }

    &:hover::before {
      transform: scaleY(1);
      width: 100%;
    }
  }
}

.energy-content {
  flex: 1;
  height: auto;
  padding: 2rem 3rem;
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-link-exact-active {
  &::before {
    transform: scaleY(1);
    width: 100%;
  }
}
</style>
