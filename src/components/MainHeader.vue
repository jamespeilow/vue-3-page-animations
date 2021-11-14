<template>
  <transition appear>
    <header class="main-header">
      <div class="main-header__item">
        <router-link to="/" class="main-header__link">
          Home
        </router-link>
      </div>
      <div class="main-header__item"></div>
    </header>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.main-header {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  height: 50px;
  margin: auto;
  position: fixed;
  width: 100%;
  z-index: 100;

  &__item {
    justify-self: end;
    margin: 0 2rem;
    width: 45vw;
  }

  &__link {
    color: #222;
    font-size: 13.3px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
  }

  &.v-enter-active,
  &.v-leave-active {
    transition: all 2s ease-in-out 0.8s;
    .main-header__item:first-child {
      transition: all 0.4s ease-in-out 0.8s;
    }
  }

  &.v-enter-from {
    .main-header__item:first-child {
      opacity: 0;
      transform: translateX(-50px);
    }
  }
}
</style>