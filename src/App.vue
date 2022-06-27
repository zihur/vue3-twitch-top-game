<script setup>
import StreamCard from './components/StreamCard.vue';
import { ref } from 'vue'
import NavBar from './components/header/NavBar.vue';
import AsideFeatures from './components/aside/AsideFeatures.vue';

const gameId = ref('');
const gameTitle = ref('Twitch Live Games');

const changeGame = (id, title) => {
  gameId.value = id;
  gameTitle.value = title;
}

</script>

<template>
  <NavBar @change-game="changeGame" />
  <main>
    <AsideFeatures />
    <div class="stream-list">
      <h1>
        {{ gameTitle }}
      </h1>
      <div class="description">
        Top popular live streams sorted by current viewers
      </div>
      <StreamCard :game-id="gameId" />
    </div>
  </main>
  <footer>
    <p class="footer">
      This page is created by <a href="#">me</a> - <a href="#">View on Github</a>
    </p>
  </footer>
</template>

<style>
body {
  color: aliceblue;
  background-image: url("./assets/bg.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-attachment: fixed;
}

main {
  position: relative;
  display: flex;
}

.stream-list {
  max-width: 1280px;
  width: calc(100% - 240px);
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}

.stream-list h1 {
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.25rem;
  font-weight: lighter;
  color: #b8dafa;
  margin-bottom: 1.5rem;
}

.footer {
  text-align: center;
  color: #7a7a7a;
  padding-bottom: 50px;
}

.footer a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
}
</style>