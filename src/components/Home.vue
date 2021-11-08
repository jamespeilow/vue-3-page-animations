<template>
  <div
    class="grid"
    :style="gridStyles"
  >
    <div
      v-for="(item, index) in items"
      class="column"
      :style="{
        backgroundImage: `url(${item.image}`
      }"
    >
      <p class="column__number">
        {{ formatNumber(index + 1) }}
      </p>
      <div class="column__content">
        {{ item.title }}
      </div>
      <div
        class="column__hover-content"
        :style="{ backgroundColor: item.color }"
      >
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
          color: '#5A3020',
          image: 'https://images.igdb.com/igdb/image/upload/t_original/ar4sz.jpg',
          title: 'The Legend of Zelda: Breath of the Wild',
        },
        {
          color: '#4B4319',
          image: 'https://images.igdb.com/igdb/image/upload/t_original/hj3spi7odlvp4pfvnwtv.jpg',
          title: 'Super Mario Odyssey',
        },
        {
          color: '#542662',
          image: 'https://images.igdb.com/igdb/image/upload/t_original/ar7u5.jpg',
          title: 'Celeste',
        },
        {
          color: '#003345',
          image: 'https://images.igdb.com/igdb/image/upload/t_original/m18xmrbbbzlmh8bru5lm.jpg',
          title: 'Hollow Knight',
        },
        {
          color: '#750525',
          image: 'https://images.igdb.com/igdb/image/upload/t_original/fd9fak2dziwkrewahczb.jpg',
          title: 'Mario Kart 8 Deluxe',
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