<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
      <div></div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title
      ? `Rory Stock - ${title}`
      : "Rory Stock - New Zealand Based Photographer";
  },
  bodyAttrs: {
    class: "bg-white",
  },
  htmlAttrs: {
    class: "bg-black",
    lang: "en",
  },
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
