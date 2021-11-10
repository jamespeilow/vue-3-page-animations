<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    :css="false"
    appear
    mode="out-in"
  >
    <div
      class="grid"
      :style="gridStyles"
    >
      <router-link
        v-for="(item, index) in items"
        :key="item.title"
        class="column"
        to="/game"
        :style="{
          backgroundImage: `url(${item.image}`
        }"
        @mouseover="handleMouseOver(item)"
        @mouseleave="item.showOverlay = false"
      >
        <p class="column__number">
          {{ formatNumber(index + 1) }}
        </p>
        <div class="column__content">
          {{ item.title }}
        </div>

        <transition
          @before-enter="overlayBeforeEnter"
          @enter="overlayEnter"
          @leave="overlayLeave"
          css="false"
        >
          <div
            v-if="item.showOverlay"
            class="column__hover-content"
            :style="{ backgroundColor: item.color }"
          >
            <p class="column__hover-text">
              {{ item.title }}
            </p>
          </div>
        </transition>
      </router-link>
    </div>
  </transition>
</template>
<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      loaded: false,
      items: [
        {
          color: '#5A3020',
          image: 'https://images.igdb.com/igdb/image/upload/t_original/ar4sz.jpg',
          title: 'The Legend of Zelda: Breath of the Wild',
          showOverlay: false,
        },
        {
          color: '#4B4319',
          image: 'https://images.igdb.com/igdb/image/upload/t_original/hj3spi7odlvp4pfvnwtv.jpg',
          title: 'Super Mario Odyssey',
          showOverlay: false,
        },
        {
          color: '#542662',
          image: 'https://images.igdb.com/igdb/image/upload/t_original/ar7u5.jpg',
          title: 'Celeste',
          showOverlay: false,
        },
        {
          color: '#003345',
          image: 'https://images.igdb.com/igdb/image/upload/t_original/m18xmrbbbzlmh8bru5lm.jpg',
          title: 'Hollow Knight',
          showOverlay: false,
        },
        {
          color: '#750525',
          image: 'https://images.igdb.com/igdb/image/upload/t_original/fd9fak2dziwkrewahczb.jpg',
          title: 'Mario Kart 8 Deluxe',
          showOverlay: false,
        }
      ]
    }
  },

  computed: {
    gridStyles() {
      return {
        gridTemplateColumns: `repeat(${this.items.length}, 1fr)`
      }
    }
  },

  methods: {
    formatNumber(number) {
      const numberString = number.toString()
      return numberString.length > 1 ? numberString : `0${numberString}`
    },

    handleMouseOver(item) {
      if (!this.loaded) { return }
      item.showOverlay = true
    },

    /**
     * Transitions
     */
    beforeEnter(el) {
      this.$nextTick(() => {
        gsap.set('.column', {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        })
      })
    },

    enter(el, done) {
      console.log('enter firing')
      gsap.to('.column', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.5,
        stagger: 0.2,
        onComplete: () => {
          this.loaded = true;
          done()
        },
      })
    },

    leave(el, done) {
      console.log('leave firing')
      gsap.to('.column', {
        opacity: 0,
        translateY: '100%',
        duration: 5,
        onComplete: done,
      })
    },

    overlayBeforeEnter(el) {
      this.$nextTick(() => {
        gsap.set(el, {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        })
      })
    },

    overlayEnter(el, done) {
      console.log('enter')
      gsap.to(el, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.35,
        onComplete: done
      })
    },

    overlayLeave(el, done) {
      console.log('leave')
      gsap.to(el, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        duration: 0.35,
        delay: 0.25,
        onComplete: done
      })
    },
  }
}
</script>

<style lang="scss">
.grid {
  display: grid;
  outline: 1px solid;
  height: 100vh;
}

.column {
  background: rgba(0,0,0,0.5);
  background-size: cover;
  background-position: center;
  display: flex;
  height: 100%;
  position: relative;
  align-items: flex-end;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    background: rgba(0,0,0,0.5);
    position: absolute;
    inset: 0;
  }

  &__number {
    -webkit-text-stroke: 1px #ffffff;
    color: transparent;
    font-size: 4rem;
    font-weight: 900;
    position: absolute;
    left: -0.5rem;
    top: 0;
    z-index: 1;
  }

  &__content {
    color: #ffffff;
    font-weight: bold;
    padding: 1rem 0.5rem;
    text-align: left;
    transform: rotate(-180deg);
    writing-mode: vertical-rl;
    z-index: 1;
  }

  &__hover-content {
    background: red;
    display: flex;
    justify-content: center;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  &__hover-text {
    -webkit-text-stroke: 1px #ffffff;
    color: transparent;
    font-size: 3.75rem;
    font-weight: 900;
    margin: 1rem 0 0;
    text-transform: uppercase;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
  }
}
</style>