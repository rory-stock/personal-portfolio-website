<script setup lang="ts">
useHead({
  title: "Home",
});

const images = [
  // ----------------- ROW ----------------- //
  {
    src: "/home/R5RS6542-2.jpg",
    alt: "Mountain biker doing a jump",
  },
  {
    src: "/home/R5RS9085.jpg",
    alt: "Silhouette portrait of mountain biker in fog",
  },
  {
    src: "/home/R5RS8252.jpg",
    alt: "Mountain biker doing a jump",
  },
  // ----------------------------------------- //
  // ----------------- ROW ----------------- //
  {
    src: "/home/R5RS9096.jpg",
    alt: "Rider cornering with dust trail",
  },
  {
    src: "/home/R5RS3890.jpg",
    alt: "Jackson Goldstone celebrating a win",
  },
  {
    src: "/home/R5RS6835.jpg",
    alt: "Two riders going round a dusty corner",
  },

  // ----------------- ROW ----------------- //
  {
    src: "/home/R5RS0282.jpg",
    alt: "Close up portrait of mountain biker",
  },
  {
    src: "/home/R5RS0751.jpg",
    alt: "Mountain biker doing a jump",
  },
  {
    src: "/home/R5RS2488.jpg",
    alt: "Close up of a rider going round a flat corner",
  },
  // ----------------------------------------- //
  // ----------------- ROW ----------------- //
  {
    src: "/home/R5RS4616.jpg",
    alt: "Close up portrait of mountain biker using a slow shutter speed",
  },
  {
    src: "/home/R5RS4298.jpg",
    alt: "Mountain biker going off a jump",
  },
  {
    src: "/home/R5RS7389.jpg",
    alt: "Close up portrait of Jackson Goldstone celebrating a win",
  },
  // ----------------------------------------- //
  // ----------------- ROW ----------------- //
  {
    src: "/home/R5RS8637.jpg",
    alt: "Portrait of Lachie Stevens-Mcnab at a mountain bike event",
  },
  {
    src: "/home/R5RS7448.jpg",
    alt: "Portrait of a person speaking at a mountain bike event",
  },
  {
    src: "/home/R5RS0565.jpg",
    alt: "Mountain biker doing a jump",
  },
  // ----------------------------------------- //
  // ----------------- ROW ----------------- //
  {
    src: "/home/R5RS5760.jpg",
    alt: "Mountain biker doing a jump",
  },
  {
    src: "/home/R5RS4625.jpg",
    alt: "Mountain biker walking back up a trail",
  },
  {
    src: "/home/R5RS6438.jpg",
    alt: "Silhouette of crowd at a mountain bike event",
  },
  // ----------------------------------------- //
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
        class="w-auto"
        decoding="async"
        :modifiers="{ auto: 'format,compress' }"
      />
    </div>
  </div>
</template>

<style scoped></style>
