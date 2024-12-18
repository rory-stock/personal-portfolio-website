<script setup lang="ts">
useHead({
  title: "Home",
});

const images = [
  {
    src: "/images/4.jpg",
    alt: "Person digging bike track",
  },
  {
    src: "/images/Digital.jpg",
    alt: "Close up portrait of mountain biker",
  },
  {
    src: "/images/P1003670.jpg",
    alt: "Mountain biker riding off large drop",
  },
  {
    src: "/images/P1027141.jpg",
    alt: "Mountain biker riding off large drop",
  },
];
</script>

<template>
  <div class="flex flex-col md:hidden gap-4 pl-4 pr-4 pt-4 pb-4">
    <div v-for="image in images" :key="image.src">
      <NuxtPicture
        :src="image.src"
        :alt="image.alt"
        loading="lazy"
        class="w-auto"
      />
    </div>
  </div>
</template>

<style scoped></style>
