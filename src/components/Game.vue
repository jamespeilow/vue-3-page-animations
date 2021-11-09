<template>
  <main class="content">
    <div class="content__wrapper">
      <router-link to="/">
        Back to home
      </router-link>
      <h1 class="content__title">Title</h1>
      <p class="content__meta">
        Release date: dd/mm/yyyy
      </p>

      <div class="content__grid">
        <div class="content__video">

        </div>
        
        <div class="content__image content__image--1">

        </div>

        <div class="content__image content__image--2">

        </div>

        <div class="content__image content__image--3">

        </div>

        <p class="content__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur egestas, nisl nunc
        </p>
      </div>
    </div>

    <div class="content__carousel">

    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  &__carousel {
    background-color: gold;
  }

  &__wrapper {
    margin: 4rem 2rem 1rem;
  }

  &__title {
    font-size: 2.5rem;
    margin: 0 0 0.25rem;
    text-transform: uppercase;
  }

  &__meta {
    margin: 0 0 2rem;
    text-transform: uppercase;
  }

  &__grid {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: 3fr 2fr;
    gap: 2rem 1rem;
  }

  &__video {
    background-color: #000;
    grid-row: 1/3;
    min-height: 200px;
  }

  &__image {
    background-color: #666;
    height: 110px;
    display: block;
    padding: 1rem;
    grid-column: 2/3;
  }
}
</style>