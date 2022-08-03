<script setup>
import { onMounted, ref } from "vue";
import GameCard from "../GameCard.vue";
import LoadingAnimation from "../LoadingAnimation.vue";
import { shuffle, trimEmptyURLParams } from "/src/utils/index";

const recommendGames = ref([]);
const foundGames = ref([]);
const searchVal = ref("");
const isTryFounded = ref(false);
const isLoading = ref(false);
const fetchRecommendGames = async () => {
  const res = await fetch("https://api.twitch.tv/helix/games/top", {
    headers: {
      Authorization: "Bearer knsypx5wbc5ep7190ieqjnr98c4r86",
      "Client-Id": "u2i5e5oy5cwidtrgmt44nf110ty1vd",
    },
  });
  const json = await res.json();
  const tempArr = json.data.slice(3);
  shuffle(tempArr);
  for (let i = 0; i < 5; i++) {
    recommendGames.value.push(tempArr[i]);
  }
  recommendGames.value.forEach((game) => {
    game.box_art_url = game.box_art_url.replace("{width}", "188");
    game.box_art_url = game.box_art_url.replace("{height}", "250");

    // 假定原始資料為 41 ~ 100，轉為星星數
    const rate = Math.random() * 60 + 41;
    const starCount = Math.floor(rate / 20);
    const starHalfCount = rate % 20 >= 10 ? 1 : 0;
    game.starCount = starCount;
    game.starHalfCount = starHalfCount;
    game.starEmptyCount = 5 - starCount - starHalfCount;
  });
};

const fetchGames = async (name = "") => {
  const urlSearchParams = new URLSearchParams({
    name: name,
  });
  trimEmptyURLParams(urlSearchParams);
  const res = await fetch(
    "https://api.twitch.tv/helix/games?" + urlSearchParams,
    {
      headers: {
        Authorization: "Bearer knsypx5wbc5ep7190ieqjnr98c4r86",
        "Client-Id": "u2i5e5oy5cwidtrgmt44nf110ty1vd",
      },
    }
  );
  const json = await res.json();
  return json;
};

const typeSearch = (e) => {
  searchVal.value = e.target.value;
};

const submit = async () => {
  if (!searchVal.value) return;
  isLoading.value = true;
  const json = await fetchGames(searchVal.value);
  foundGames.value = json.data;
  foundGames.value.forEach((game) => {
    game.box_art_url = game.box_art_url.replace("{width}", "188");
    game.box_art_url = game.box_art_url.replace("{height}", "250");
  });
  isTryFounded.value = true;
  isLoading.value = false;
  searchVal.value = "";
};

onMounted(async () => {
  await fetchRecommendGames();
});
</script>

<template>
  <input type="checkbox" name="" id="aside-switch" />
  <aside>
    <div class="aside__container">
      <div class="search--wrapper">
        <h3>Find Other Games</h3>
        <form class="search" @submit.prevent="submit($event)">
          <input type="search" :value="searchVal" @input="typeSearch($event)" />
          <button type="submit">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </form>
        <div class="search__result" v-if="foundGames.length !== 0">
          <h3>Search Result</h3>
          <GameCard v-for="foundGame in foundGames" :game="foundGame" />
        </div>
        <p v-if="foundGames.length === 0 && isTryFounded">
          Sorry! Can't find result.<br />
          Try other keywords.
        </p>
        <LoadingAnimation v-if="isLoading" />
      </div>
      <hr />
      <div>
        <h3>Recommend Games</h3>
        <GameCard
          v-for="recommendGame in recommendGames"
          :game="recommendGame"
          :key="recommendGame.id"
        />
      </div>
    </div>
  </aside>
  <label for="aside-switch" class="aside__switch">
    <font-awesome-icon
      icon="fa-solid fa-chevron-right"
      transform="right-4"
      beat
    />
  </label>
</template>
<style>
@import "/src/assets/base.css";

aside {
  flex-shrink: 0;
  width: 0;
  padding: 0;
  height: calc(100vh - var(--header-height));
  position: sticky;
  top: var(--header-height);
  overflow: hidden auto;
  background: rgba(4, 24, 47, 0.9);
  transform: translateX(calc(0px - var(--aside-width)));
}

aside::-webkit-scrollbar {
  width: 6px;
}

aside::-webkit-scrollbar-thumb {
  background: rgba(209, 209, 209, 0);
  border-radius: 3px;
}

aside:hover::-webkit-scrollbar-thumb {
  background: rgba(209, 209, 209, 0.3);
}

aside:hover::-webkit-scrollbar-thumb:hover {
  background: rgba(209, 209, 209, 0.5);
}

#aside-switch {
  display: none;
}

#aside-switch:checked ~ aside {
  width: var(--aside-width);
  padding: 1rem;
  transform: translateX(0);
}

#aside-switch:checked ~ .aside__switch {
  left: var(--aside-width);
  transform: rotate(180deg);
}

.aside__switch {
  padding: 25px 10px;
  font-size: 1.2rem;
  position: fixed;
  left: 0;
  top: 50vh;
  z-index: 1;
}

.aside__switch:hover {
  transform: scale(1.5);
}

.aside__container p {
  margin: 0.3rem 0;
}

h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.search--wrapper {
  margin-bottom: 1rem;
}

.search {
  display: flex;
  width: 100%;
  font-size: 1.2rem;
}

.search input,
.search button {
  border: none;
}

.search input[type="search"] {
  width: 100%;
  outline-style: none;
  border-radius: 3px 0 0 3px;
  padding: 3px;
  color: rgb(50 50 50);
}

.search button {
  border-radius: 0 3px 3px 0;
  padding: 5px 10px;
}

.search button:active {
  background-color: rgb(220, 220, 220);
}
</style>
