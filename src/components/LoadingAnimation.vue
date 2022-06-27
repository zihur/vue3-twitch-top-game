<script setup>
</script>

<template>
  <div class="loading">
    <div class="loading-circle"></div>
    <div class="loading-circle"></div>
    <div class="loading-circle"></div>
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  margin-bottom: 1.3rem;
}

.loading-circle {
  margin: 3px;
  width: 15px;
  height: 15px;
  background-color: #ffffff;
  border-radius: 100%;
  animation: loading-bounce;
  animation-duration: .7s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate-reverse;
}

.loading-circle:nth-child(2) {
  animation-delay: 0.1s;
}

.loading-circle:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes loading-bounce {
  from {
    transform: translateY(10px);
  }

  to {
    background-color: #b1b1b153;
  }
}
</style>