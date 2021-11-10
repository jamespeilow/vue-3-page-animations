<template>
  <router-view v-slot="{ Component, route }">
    <transition
      @before-enter="(el) => beforeEnter(el, route.path)"
      @enter="(el, done) => enter(el, done, route.path)"
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

export default {
  data () {
    return {
      transitionEnded: false
    }
  },

  methods: {
    /**
     * Transitions
     */
    beforeEnter(el, path) {
      console.log(path)
      gsap.set('.overlay', {
        width: '0%',
      })

      this.$nextTick(() => {
        if (!document.querySelector('.column')) { 
          return
        }

        gsap.set('.column', {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        })
      })
    },

    enter(el, done, path) {
      console.log(path)
      console.log('enter firing')

      if (!el.querySelector('.column')) { 
        done()
        return
      }

      gsap.to('.column', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.5,
        stagger: 0.2,
        onComplete: () => {
          this.transitionEnded = true;
          done()
        },
      })
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
  color: #2c3e50;
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
