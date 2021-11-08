<template>
  <div class="grid">
    <div class="column">
      <p class="column__number">
        01
      </p>
      <div class="column__content">
        Spider-Man: Far From Home
      </div>
      <div class="column__hover-content">
        <p class="column__hover-text">
          Spider-Man: Far From Home
        </p>
      </div>
    </div>
    <div class="column">
      <p class="column__number">
        01
      </p>
      <div class="column__content">
        Spider-Man: Far From Home
      </div>
      <div class="column__hover-content">
        <p class="column__hover-text">
          Spider-Man: Far From Home
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
    font-size: 4rem;
    font-weight: 900;
    position: absolute;
    left: -0.5rem;
    top: 0;
  }

  &__content {
    color: #ffffff;
    font-weight: bold;
    padding: 0.5rem 0;
    text-align: left;
    transform: rotate(-90deg);
    transform-origin: top left;
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
    font-size: 4rem;
    font-weight: 900;
    margin: 0;
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