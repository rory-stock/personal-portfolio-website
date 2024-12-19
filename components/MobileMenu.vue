<script setup lang="ts">
defineProps({
  isOpen: Boolean,
});
const route = useRoute();
</script>

<template>
  <div class="md:hidden">
    <Teleport to="#teleports">
      <div
        class="md:hidden absolute top-[4.7rem] w-full bg-black"
        :class="
          isOpen
            ? 'block transition-all ease-in-out duration-500 h-full'
            : 'transition-all ease-in-out duration-500 h-0'
        "
      >
        <div
          class="gap-4 items-center justify-center text-3xl font-bold h-full"
          :class="isOpen ? 'animate-menu-item-fade flex flex-col' : 'hidden'"
        >
          <NuxtLink
            to="/"
            :class="route.name === 'index' ? 'text-blue-499' : 'text-white'"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/events"
            :class="route.name === 'events' ? 'text-blue-499' : 'text-white'"
            >Events</NuxtLink
          >
          <NuxtLink
            to="/contact"
            :class="route.name === 'contact' ? 'text-blue-499' : 'text-white'"
            >Contact</NuxtLink
          >
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
