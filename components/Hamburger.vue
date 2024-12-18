<script setup lang="ts">
defineProps({
  isOpen: Boolean,
});
</script>

<template>
  <div class="w-11 content-center flex flex-col gap-1 cursor-pointer">
    <div
      class="w-full h-1 bg-black block"
      :class="
        isOpen
          ? 'transition ease-in-out transform duration-300 rotate-45 translate-y-1'
          : ' transition ease-in-out transform duration-300'
      "
    ></div>
    <div
      class="w-full h-1 bg-black block"
      :class="
        isOpen
          ? 'transition ease-in-out transform duration-300 -rotate-45 -translate-y-1'
          : ' transition ease-in-out transform duration-300'
      "
    ></div>
  </div>
</template>

<style scoped></style>
