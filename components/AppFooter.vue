<script setup lang="ts">
import DigitalClock from "~/components/DigitalClock.vue";
</script>

<template>
  <footer class="bg-black">
    <!------------------- PERSONAL/CONTACT INFO ------------------->
    <div
      class="px-2 pt-5 pb-5 font-geist text-xs text-white selection:bg-white selection:text-black md:px-5 md:text-base"
    >
      <div class="flex justify-between">
        <!----------------- EMAIL ----------------->
        <div class="flex">
          <p>Email:&nbsp;</p>
          <NuxtLink
            to="mailto:hello@rorystock.com"
            target="_blank"
            aria-label="Email link"
            class="lowercase underline transition-all duration-200 hover:brightness-125 hover:text-blue-499"
          >hello@rorystock.com
          </NuxtLink>
        </div>
        <!----------------------------------------->
        <p>Nelson / New Zealand</p>
      </div>

      <div class="flex justify-between">
        <!----------------- INSTAGRAM ----------------->
        <div class="flex">
          <p>Instagram:&nbsp;</p>
          <NuxtLink
            :to="`https://www.instagram.com/rorystockphoto/`"
            target="_blank"
            aria-label="Instagram profile link"
            class="lowercase underline transition-all duration-200 hover:brightness-125 hover:text-blue-499"
          >
            @rorystockphoto
          </NuxtLink>
        </div>
        <!----------------------------------------->

        <!---------------- DIGITAL CLOCK ------------------>
        <div class="flex">
          <p>Local Time /&nbsp;</p>
          <DigitalClock />
        </div>
        <!-------------------------------------------------->
      </div>

      <!---------------- Copyright ------------------>
      <div class="mt-7 flex justify-between">
        <p>&copy; 2024 / 2025 Rory Stock</p>
      </div>
      <!--------------------------------------------->
    </div>
  </footer>
</template>
