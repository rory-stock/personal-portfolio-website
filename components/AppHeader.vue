<script setup lang="ts"></script>

<template>
  <header>
    <div class="flex flex-col gap-1 md:gap-2">
      <!-------------------- B&W GRADIENT BAR -------------------->
      <div class="flex flex-row">
        <span class="bg-white w-1/12 h-5 md:h-8"></span>
        <span class="bg-gray-50 w-1/12 h-5 md:h-8"></span>
        <span class="bg-gray-100 w-1/12 h-5 md:h-8"></span>
        <span class="bg-gray-200 w-1/12 h-5 md:h-8"></span>
        <span class="bg-gray-300 w-1/12 h-5 md:h-8"></span>
        <span class="bg-gray-400 w-1/12 h-5 md:h-8"></span>
        <span class="bg-gray-500 w-1/12 h-5 md:h-8"></span>
        <span class="bg-gray-600 w-1/12 h-5 md:h-8"></span>
        <span class="bg-gray-700 w-1/12 h-5 md:h-8"></span>
        <span class="bg-gray-800 w-1/12 h-5 md:h-8"></span>
        <span class="bg-gray-900 w-1/12 h-5 md:h-8"></span>
        <span class="bg-black w-1/12 h-5 md:h-8"></span>
      </div>
      <!---------------------------------------------------------->

      <div
        class="flex flex-row items-center align-middle pb-1 md:pb-0 justify-between select-none"
      >
        <h1
          class="font-neue-haas-grotesk-display text-4xl md:text-5xl lg:text-6xl font-semibold pl-2"
        >
          Rory Stock
        </h1>
        <MobileNav />
        <DesktopNav />
      </div>

      <div class="bg-black w-screen h-1"></div>
    </div>
  </header>
</template>

<style scoped></style>
