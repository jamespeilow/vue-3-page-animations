<template>
  <div
    class="grid"
    :style="gridStyles"
  >
    <div
      v-for="(item, index) in items"
      class="column"
    >
      <p class="column__number">
        {{ formatNumber(index + 1) }}
      </p>
      <div class="column__content">
        {{ item.title }}
      </div>
      <div class="column__hover-content">
        <p class="column__hover-text">
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Spider-Man: Far From Home',
        },
        {
          title: 'Avengers Endgame',
        },
        {
          title: 'Guardians of the Galaxy Vol. 2',
        },
        {
          title: 'Captain Marvel',
        },
        {
          title: 'Thor: Ragnarok',
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
    }
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
  display: flex;
  height: 100%;
  position: relative;
  align-items: flex-end;
  overflow: hidden;

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
    transform: translateY(-100%);
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

  &:hover {
    .column__hover-content {
      transform: translateY(0);
    }
  }
}
</style>