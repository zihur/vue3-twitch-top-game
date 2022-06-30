<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import RateStar from "./aside/RateStar.vue";

const store = useStore();
const props = defineProps({
  game: Object,
});
const fakeTags = ref([
  "手機遊戲",
  "卡牌與桌遊",
  "射擊",
  "冒險遊戲",
  "FPS",
  "動作",
  "RPG",
  "街機",
  "運動",
  "節奏與音樂遊戲",
  "手機遊戲",
  "派對",
]);

const randomIndex = (arr) => Math.floor(Math.random() * arr.length);

const chooseGame = (game) => {
  store.dispatch("setChosenGame", { gameId: game.id, gameTitle: game.name });
};
</script>

<template>
  <div class="game-card" @click="chooseGame(props.game)">
    <img :src="game.box_art_url" alt="" class="game-card__img" />
    <div class="game-card__info">
      <div class="game-card__title" :title="game.name">{{ game.name }}</div>
      <RateStar class="game-card__rate" :game="game" />
    </div>
    <div class="game-tag">
      <div class="game-tag__item">{{ fakeTags[randomIndex(fakeTags)] }}</div>
      <div class="game-tag__item">{{ fakeTags[randomIndex(fakeTags)] }}</div>
      <div class="game-tag__item">{{ fakeTags[randomIndex(fakeTags)] }}</div>
    </div>
  </div>
</template>

<style scoped>
.game-card {
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  margin: 1rem auto 1rem auto;
  cursor: pointer;
}

.game-card__img {
  display: block;
  width: 100%;
  margin-bottom: 0 auto 0.3rem auto;
}

.game-card__info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.game-card__title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.game-card__rate {
  flex-shrink: 0;
}

.game-tag {
  display: flex;
  flex-wrap: wrap;
}

.game-tag__item {
  font-size: 0.8rem;
  background-color: rgb(166, 166, 166);
  border-radius: 999px;
  padding: 0 7px;
  margin: 0 5px 5px 0;
}

.game-tag__item:hover {
  background-color: rgb(117, 117, 117);
}
</style>
