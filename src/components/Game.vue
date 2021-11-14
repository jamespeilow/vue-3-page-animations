<template>
  <main class="content">
    <div class="content__wrapper">
      <h1 class="content__title" data-splitting>The Legend of Zelda: Breath of the Wild</h1>
      <p class="content__meta">
        Release date: 03/03/2017
      </p>

      <div class="content__grid">
        <div class="content__video">
          <iframe width="480" height="270" src="https://www.youtube.com/embed/zw47_q9wbBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <div class="content__image content__image--1">
          <img src="https://images.igdb.com/igdb/image/upload/t_original/mftmubfp9ntwbreejfi7.jpg">
        </div>

        <div class="content__image content__image--2">
          <img src="https://images.igdb.com/igdb/image/upload/t_original/ayjm7juog9vitiwbfrcz.jpg">
        </div>

        <div class="content__image content__image--3">
          <img src="https://images.igdb.com/igdb/image/upload/t_original/mepn5qujlccdlkhfkwr8.jpg">
        </div>

        <p class="content__description">
          In this 3D open-world entry in the Zelda series, Link is awakened from a deep slumber without his past memories in the post-apocalyptic Kingdom of Hyrule, and sets off on a journey to defeat the ancient evil Calamity Ganon. Link treks, climbs and glides through fields, forests and mountain ranges while meeting and helping friendly folk and defeating enemies in order to gather up the strength to face Ganon.
        </p>
      </div>
    </div>

    <div class="content__carousel-wrapper">
      <div class="content__carousel">
      </div>
    </div>
  </main>
</template>

<script>
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

export default {
}
</script>

<style lang="scss">
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  &__wrapper {
    justify-self: end;
    width: 45vw;
    margin-left: auto;
  }

  &__carousel-wrapper {
    position: relative;
  }

  &__carousel {
    background-image: url('https://images.igdb.com/igdb/image/upload/t_original/ar4sz.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    position: sticky;
    top: 0;
    right: 0;
  }

  &__wrapper {
    margin: 4rem 2rem 1rem;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 1;
    margin: 0 0 0.25rem;
    text-transform: uppercase;
  }

  &__meta {
    color: #666;
    font-size: 13.3px;
    margin: 0 0 2rem;
    text-transform: uppercase;
  }

  &__description {
    font-size: 13.3px;
    grid-row: span 2;
  }

  &__grid {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: repeat(3, auto) 1fr;
    gap: 2rem 1rem;
  }

  &__video {
    background-color: #000;
    grid-row: 1/3;
    min-height: 200px;
    
    iframe {
      width: 100%;
      height: 100%;
    }
  }

  &__image {
    background-color: #666;
    height: auto;
    display: block;
    grid-column: 2/3;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>