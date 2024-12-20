<script setup lang="ts">
useHead({
  title: "Home",
});

const images = [
  {
    src: "R5RS0282.jpg",
    alt: "Close up portrait of mountain biker",
  },
  {
    src: "R5RS9085.jpg",
    alt: "Silhouette portrait of mountain biker in fog",
  },
  {
    src: "0I0A3820.jpg",
    alt: "Mountain biker doing a jump",
  },
  {
    src: "R5RS8604.jpg",
    alt: "Person digging bike track with slow shutter speed",
  },
  {
    src: "R5RS9058.jpg",
    alt: "Mountain biker walking up hill with slow shutter speed",
  },
  {
    src: "R5RS4616.jpg",
    alt: "Close up portrait of mountain biker using a slow shutter speed",
  },
  {
    src: "R5RS4298.jpg",
    alt: "Mountain biker going off a jump",
  },
  {
    src: "R5RS4522.jpg",
    alt: "Mountain biker going round a berm",
  },
  {
    src: "R5RS4625.jpg",
    alt: "Mountain biker walking back up a trail",
  },
  {
    src: "R5RS8774.jpg",
    alt: "Person digging bike track with slow shutter speed",
  },
  {
    src: "R5RS9106.jpg",
    alt: "Mountain biker going round a berm",
  },
  {
    src: "R5RS8895.jpg",
    alt: "Mountain biker going round a berm",
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-4 items-center md:items md:grid md:grid-cols-3 md:gap-6 pl-4 pr-4 pt-4 pb-4"
  >
    <div v-for="image in images" :key="image.src">
      <NuxtPicture
        :src="image.src"
        :alt="image.alt"
        loading="lazy"
        class="w-auto"
        decoding="async"
      />
    </div>
  </div>
</template>

<style scoped></style>
