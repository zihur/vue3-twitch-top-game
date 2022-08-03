<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const topGames = ref([]);
const nav = ref(null);

const navItemClass = (gameId) => {
  return {
    navbar__item: true,
    "navbar__item--active":
      gameId === computed(() => store.state.chosenGame.id).value,
  };
};

const reloadPage = () => location.reload();

const fetchTopGames = async () => {
  const res = await fetch("https://api.twitch.tv/helix/games/top?first=3", {
    headers: {
      Authorization: "Bearer knsypx5wbc5ep7190ieqjnr98c4r86",
      "Client-Id": "u2i5e5oy5cwidtrgmt44nf110ty1vd",
    },
  });
  const json = await res.json();
  topGames.value = json.data;
};

const chooseGame = (topGame) => {
  store.dispatch("setChosenGame", {
    gameId: topGame.id,
    gameTitle: topGame.name,
  });
};

onMounted(async () => {
  await fetchTopGames();
});
</script>

<template>
  <nav ref="nav">
    <div class="logo" @click="reloadPage">Twitch Live Games</div>
    <input id="hamburger__toggle" type="checkbox" />
    <label for="hamburger__toggle">
      <div class="hamburger">
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
      </div>
    </label>
    <ul class="navbar__list">
      <li
        v-for="topGame in topGames"
        :key="topGame.id"
        @click="chooseGame(topGame)"
        :class="navItemClass(topGame.id)"
      >
        {{ topGame.name }}
      </li>
    </ul>
    <div class="header-text">
      Top 3 popular games on Twitch <mark>NOW</mark>
    </div>
  </nav>
</template>

<style scoped>
@import "../../assets/base.css";

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: black;
  white-space: nowrap;
  position: sticky;
  top: 0;
  z-index: 1;
}

nav mark {
  background-color: white;
  color: black;
  padding: 0.2rem;
}

.logo {
  font-size: 1.25rem;
  margin-right: 1rem;
}

.navbar__list {
  display: flex;
  flex: 1;
}

.navbar__item {
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  padding: 0 0.75rem;
}

.navbar__item--active,
.navbar__item:hover {
  color: rgb(255 79 79);
}

.navbar__item:active {
  color: rgba(255, 255, 255, 0.8);
}

#hamburger__toggle {
  display: none;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 29px;
  height: 23px;
}

.hamburger__line {
  width: 100%;
  height: 3px;
  background-color: azure;
  border-radius: 3px;
  transition: all 0.5s ease-in-out;
}

@media (max-width: 992px) {
  .navbar__list {
    position: absolute;
    flex-direction: column;
    align-items: center;
    margin-top: var(--header-height);
    top: 0px;
    left: 0;
    width: 100%;
    background-color: black;
  }

  .navbar__item {
    display: flex;
    align-items: center;
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  #hamburger__toggle:checked ~ .navbar__list .navbar__item {
    height: 33px;
  }

  #hamburger__toggle:checked ~ .navbar__list .navbar__item:last-child {
    margin-bottom: 2rem;
  }

  .header-text {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  #hamburger__toggle:checked + label .hamburger__line:nth-child(1) {
    transform-origin: 0% 0%;
    transform: rotate(45deg);
  }

  #hamburger__toggle:checked + label .hamburger__line:nth-child(2) {
    transform: scaleY(0);
  }

  #hamburger__toggle:checked + label .hamburger__line:nth-child(3) {
    transform-origin: 0% 100%;
    transform: rotate(-45deg);
  }
}
</style>
