<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <nav>
    <ul
      class="hidden lg:inline-flex gap-4 font-neue-haas-grotesk-text font-semibold text-xl items-center pr-6"
    >
      <li>
        <NuxtLink
          to="/"
          :class="route.name === 'index' ? 'text-blue-499' : 'text-gray-500'"
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/personal"
          :class="route.name === 'personal' ? 'text-blue-499' : 'text-gray-500'"
          >Personal</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/projects"
          :class="route.name === 'projects' ? 'text-blue-499' : 'text-gray-500'"
          >Projects</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/events"
          :class="route.name === 'events' ? 'text-blue-499' : 'text-gray-500'"
          >Events</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/contact"
          :class="route.name === 'contact' ? 'text-blue-499' : 'text-gray-500'"
          >Contact</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
