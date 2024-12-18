<script setup lang="ts">
defineProps({
  text: String,
  length: Number,
});
</script>

<template>
  <div
    class="max-w-full overflow-hidden font-neue-haas-grotesk-display font-extrabold text-base md:text-lg select-none uppercase pt-2"
  >
    <div
      class="whitespace-nowrap overflow-hidden inline-block animate-scroll-right-to-left text-white"
    >
      <div v-for="i in length" :key="i" class="inline-block">
        <p class="inline-block">{{ text }}</p>
        <span class="w-4 inline-block bg-black"></span>
        <p class="inline-block">//</p>
        <span class="w-4 inline-block bg-black"></span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
