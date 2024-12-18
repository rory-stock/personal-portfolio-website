<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped></style>
