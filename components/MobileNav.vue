<script setup lang="ts">
const isOpen = ref(false);

const route = useRoute();

watch(
  () => route.path,
  () => {
    isOpen.value = false;
  },
);

onNuxtReady(() => {
  watchEffect(() => {
    if (isOpen.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
});
</script>

<template>
  <div class="md:hidden">
    <div @click="isOpen = !isOpen" class="absolute top-10 right-8">
      <Hamburger :isOpen="isOpen" />
    </div>
    <MobileMenu :isOpen="isOpen" />
  </div>
</template>

<style scoped></style>
