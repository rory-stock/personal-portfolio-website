<script setup lang="ts">
useHead({
  title: "Contact",
});
</script>

<template>
  <div class="pb-4">
    <div class="flex xl:items-center pt-4 pl-3 md:pl-6">
      <p
        class="font-ghost text-black selection:text-blue-499 text-xl md:text-3xl lg:text-4xl font-normal pr-1"
      >
        <span
          class="capitalize text-blue-499 selection:text-black font-neue-haas-grotesk-display font-medium md:font-semibold"
        >
          Want to work together?&nbsp;
        </span>
        If you've got a project or idea, I'm keen to hear about it.
      </p>
    </div>
    <div class="flex items-center pt-6 pl-3 md:pl-6 pr-3">
      <p
        class="font-georgia text-black selection:text-blue-499 text-xl md:text-3xl lg:text-4xl font-normal"
      >
        Whether you’re looking to collaborate or just want to chat, send me a
        message at
        <NuxtLink
          to="mailto:hello@rorystock.com"
          target="_blank"
          class="underline hover:text-blue-499 transition-colors duration-200"
          >hello@rorystock.com</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
