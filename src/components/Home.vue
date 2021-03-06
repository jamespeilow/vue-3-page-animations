<template>
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
        :css="false"
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
</template>
<script>
import gsap from 'gsap'

export default {
  props: {
    transitionEnded: Boolean,
  },

  data() {
    return {
      items: [
        {
          color: '#5A3020',
          image: '/images/cover-botw.jpg',
          title: 'The Legend of Zelda: Breath of the Wild',
          showOverlay: false,
        },
        {
          color: '#4B4319',
          image: '/images/cover-mario-odyssey.jpg',
          title: 'Super Mario Odyssey',
          showOverlay: false,
        },
        {
          color: '#542662',
          image: '/images/cover-celeste.jpg',
          title: 'Celeste',
          showOverlay: false,
        },
        {
          color: '#003345',
          image: '/images/cover-hollow-knight.jpg',
          title: 'Hollow Knight',
          showOverlay: false,
        },
        {
          color: '#750525',
          image: '/images/cover-mario-kart-8.jpg',
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
      if (!this.transitionEnded) { return }
      item.showOverlay = true
    },

    overlayBeforeEnter(el) {
      this.$nextTick(() => {
        gsap.set(el, {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        })
      })
    },

    overlayEnter(el, done) {
      gsap.to(el, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.35,
        onComplete: done
      })
    },

    overlayLeave(el, done) {
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
  height: calc(100vh - 50px);
  position: relative;
  top: 50px;
}

.column {
  background-size: cover;
  background-position: center;
  display: flex;
  height: 100%;
  position: relative;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  text-decoration: none;

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
    font-size: 3rem;
    font-weight: 900;
    line-height: 1.2;
    margin: 1rem 0 0;
    text-transform: uppercase;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
  }
}
</style>