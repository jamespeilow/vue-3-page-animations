<template>
  <main class="content">
    <div class="content__wrapper">
      <h1 class="content__title" data-splitting>The Legend of Zelda: Breath of the Wild</h1>
      <p class="content__meta">
        Release date: 03/03/2017
      </p>

      <div class="content__grid">
        <div class="content__video">
          <lite-youtube videoid="zw47_q9wbBE" playlabel="Play: The Legend of Zelda: Breath of the Wild - Nintendo Switch Presentation 2017 Trailer"></lite-youtube>
        </div>
        
        <div class="content__image content__image--1">
          <img src="/images/botw-screen1.jpg">
        </div>

        <div class="content__image content__image--2">
          <img src="/images/botw-screen2.jpg">
        </div>

        <div class="content__image content__image--3">
          <img src="/images/botw-screen3.jpg">
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
    margin: 4rem 2rem 1rem;
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
    
    iframe, lite-youtube {
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