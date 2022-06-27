<script setup>
const props = defineProps({
  game: Object,
})
</script>
<template>
<div>
  <font-awesome-icon icon="fa-solid fa-star" v-for="star in game.starCount" />
  <font-awesome-icon icon="fa-regular fa-star-half-stroke" v-for="star in game.starHalfCount" />
  <font-awesome-icon icon="fa-regular fa-star" v-for="star in game.starEmptyCount" />
</div>
</template>