<template>
  <main-header />
  <router-view v-slot="{ Component, route }">
    <transition
      @before-enter="(el) => beforeEnter(el, route)"
      @enter="(el, done) => enter(el, done, route)"
      @leave="(el, done) => leave(el, done)"
      mode="out-in"
      :css="false"
    >
      <component
        :is="Component"
        :key="route.path"
        :transition-ended="transitionEnded"
      />
    </transition>
    <div class="overlay"></div>
  </router-view>
</template>

<script>
import gsap from 'gsap'

import gameTransitions from './scripts/transitions/game'
import homeTransitions from './scripts/transitions/home'

import MainHeader from './components/MainHeader.vue'

export default {
  components: {
    MainHeader
  },

  data () {
    return {
      transitionEnded: false
    }
  },

  methods: {
    /**
     * Transitions
     */
    beforeEnter(el, route, component) {
      gsap.set('.overlay', {
        width: '0%',
      })

      switch(route.path) {
        case '/':
          this.$nextTick(() => {
            homeTransitions.beforeEnter(el)
          })
          break
        case '/game':
          this.$nextTick(() => {
            gameTransitions.beforeEnter(el)
          })
          break
      }
    },

    enter(el, done, route) {
      switch (route.path) {
        case '/':
          homeTransitions.enter(el, () => {
            this.transitionEnded = true
            done()
          })
          break
        case '/game':
          gameTransitions.enter(el, done)
          break
        default:
          done()
      }
    },

    leave(el, done) {
      gsap.to('.overlay', {
        width: '100%',
        duration: 0.5,
        onComplete: done,
      })
    },
  }
}
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.overlay {
  background-color: #fff;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 0%;
  z-index: 16;
}
</style>
