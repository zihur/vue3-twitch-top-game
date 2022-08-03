<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { throttle, trimEmptyURLParams } from "../utils/index";
import LoadingAnimation from "./LoadingAnimation.vue";

const props = defineProps({
  gameId: String,
});
const cards = ref([]);
const isLoading = ref(true);

let pageCursor = "";
const twitchAuthHeaders = {
  Authorization: "Bearer knsypx5wbc5ep7190ieqjnr98c4r86",
  "Client-Id": "u2i5e5oy5cwidtrgmt44nf110ty1vd",
};

const fetchStreams = async (limit = 24) => {
  let streams = [];
  let usersId = [];
  const urlSearchParams = new URLSearchParams({
    first: limit,
    after: pageCursor,
    game_id: props.gameId,
  });

  isLoading.value = true;

  trimEmptyURLParams(urlSearchParams);
  const res = await fetch(
    "https://api.twitch.tv/helix/streams?" + urlSearchParams,
    {
      headers: { ...twitchAuthHeaders },
    }
  );
  if (res.status < 200 || res.status >= 300) {
    isLoading.value = false;
    return;
  }
  const json = await res.json();
  streams = json.data;
  pageCursor = json.pagination.cursor;
  streams.forEach((stream) => {
    stream.thumbnail_url = stream.thumbnail_url.replace("{width}", "800");
    stream.thumbnail_url = stream.thumbnail_url.replace("{height}", "450");
    usersId.push(["id", stream.user_id]);
  });
  const usersData = await fetchUsers(usersId);
  streams = streams.map((stream) => {
    const isDuplicate = cards.value.find((card) => card.id === stream.id);
    if (isDuplicate) return stream;

    if (!stream.user) {
      stream.user = usersData.find((user) => stream.user_id === user.id);
    }

    cards.value.push(stream);
    return stream;
  });
  isLoading.value = false;
  return streams;
};

const fetchUsers = async (usersId) => {
  const urlSearchParams = new URLSearchParams(usersId);
  const res = await fetch(
    "https://api.twitch.tv/helix/users?" + urlSearchParams,
    {
      headers: { ...twitchAuthHeaders },
    }
  );
  const json = await res.json();
  return json.data;
};

const handleScroll = async () => {
  const scrollY = window.scrollY;
  const innerHeight = window.innerHeight;
  const scrollHeight = document.body.scrollHeight;
  if (scrollY + innerHeight >= scrollHeight) {
    isLoading.value = true;
    await fetchStreams(12);
    isLoading.value = false;
  }
};

watch(
  () => props.gameId,
  (newVal, oldVal) => {
    cards.value.splice(0);
    pageCursor = "";
    fetchStreams();
  }
);

onMounted(async () => {
  fetchStreams();
  window.addEventListener("scroll", throttle(handleScroll));
});
onUnmounted(() => {
  window.removeEventListener("scroll", throttle(handleScroll));
});
</script>

<template>
  <div class="card--wrapper">
    <div class="card" v-for="card in cards" :key="card.id">
      <a :href="'https://www.twitch.tv/' + card.user_login" target="_blank">
        <img :src="card.thumbnail_url" alt="" class="card__figure" />
      </a>
      <div class="card__header">
        <div class="card__avatar">
          <a
            :href="'https://www.twitch.tv/' + card.user_login + '/about'"
            target="_blank"
          >
            <img :src="card.user.profile_image_url" alt="" />
          </a>
        </div>
        <div class="card__info">
          <a :href="'https://www.twitch.tv/' + card.user_login" target="_blank">
            <h3 class="card__title" :title="card.title">{{ card.title }}</h3>
          </a>
          <a
            :href="'https://www.twitch.tv/' + card.user_login + '/about'"
            target="_blank"
          >
            <p class="card__auther" :title="card.user.display_name">
              {{ card.user.display_name }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
  <LoadingAnimation v-if="isLoading" />
</template>

<style>
.card--wrapper {
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: initial;
}

.card {
  flex: 1 0 auto;
  width: 250px;
  max-width: 48%;
  border: 1px #383838 solid;
  margin: 1%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  opacity: 0.75;
}

.card:hover {
  transform: scale(1.05);
  opacity: 1;
}

.card__figure {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
}

.card__header {
  display: flex;
  background-color: rgba(22, 22, 22, 1);
}

.card__avatar {
  width: 25%;
}

.card__avatar img {
  width: 100%;
  border-radius: 100%;
  padding: 0.5rem;
}

.card__info {
  width: 75%;
  font-size: 1rem;
  padding: 0.5rem;
}

.card__title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.card__auther {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
