<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <nav>
    <ul
      class="hidden md:inline-flex gap-4 font-neue-haas-grotesk-text font-semibold md:text-xl lg:text-2xl items-center pr-6"
    >
      <!------------------- HOME PAGE ------------------->
      <li>
        <NuxtLink
          to="/"
          :class="
            route.name === 'index'
              ? 'text-blue-499'
              : 'text-gray-500 hover:text-blue-499 transition-colors duration-100'
          "
          >Home</NuxtLink
        >
      </li>
      <!---------------------------------------------------->
      <!------------------- PROJECTS PAGE ------------------->
      <li>
        <NuxtLink
          to="/projects"
          :class="
            route.name === 'projects'
              ? 'text-blue-499'
              : 'text-gray-500 hover:text-blue-499 transition-colors duration-100'
          "
          >Projects</NuxtLink
        >
      </li>
      <!---------------------------------------------------->
      <!------------------- EVENTS PAGE ------------------->
<!--      <li>-->
<!--        <NuxtLink-->
<!--          to="/events"-->
<!--          :class="-->
<!--            route.name === 'events'-->
<!--              ? 'text-blue-499'-->
<!--              : 'text-gray-500 hover:text-blue-499 transition-colors duration-100'-->
<!--          "-->
<!--          >Events</NuxtLink-->
<!--        >-->
<!--      </li>-->
      <!---------------------------------------------------->
      <!------------------- CONTACT PAGE ------------------->
      <li>
        <NuxtLink
          to="/contact"
          :class="
            route.name === 'contact'
              ? 'text-blue-499'
              : 'text-gray-500 hover:text-blue-499 transition-colors duration-100'
          "
          >Contact</NuxtLink
        >
      </li>
      <!---------------------------------------------------->
    </ul>
  </nav>
</template>

<style scoped></style>
