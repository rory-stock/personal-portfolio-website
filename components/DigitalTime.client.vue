<script setup lang="ts">
const { currentTime } = useCurrentTime();
</script>

<template>
  <div>
    <p
      class="text-white text-sm md:text-lg font-semibold font-neue-haas-grotesk-text uppercase select-none"
    >
      {{ currentTime.toLocaleTimeString() }}
    </p>
  </div>
</template>

<style scoped></style>
