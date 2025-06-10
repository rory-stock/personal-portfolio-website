<script setup lang="ts"></script>

<template>
  <footer>
    <!------------------- SCROLLING TEXT ------------------->
    <div class="bg-black overflow-x-hidden">
      <ScrollingText
        text="Rory Stock ● New Zealand Based Photographer"
        :length="6"
      />
      <!---------------------------------------------------->

      <!------------------- PERSONAL/CONTACT INFO ------------------->
      <div
        class="text-white text-sm md:text-lg font-semibold font-neue-haas-grotesk-text uppercase pl-3 md:pl-5 pt-5 pb-5 selection:bg-none selection:text-blue-499"
      >
        <p>© Rory Stock 2024 // 2025</p>
        <br />
        <p>Nelson // New Zealand</p>
        <br />
        <!----------------- INSTAGRAM ----------------->
        <div class="flex">
          <p>Instagram:&nbsp;</p>
          <NuxtLink
            to="https://www.instagram.com/rorystockphoto/"
            target="_blank"
            aria-label="Instagram profile link"
            aria-hidden="false"
          >
            <p
              class="text-white font-bold lowercase underline hover:text-blue-499 transition-colors duration-100"
            >
              @rorystockphoto
            </p>
          </NuxtLink>
        </div>
        <!----------------------------------------->
        <!----------------- EMAIL ----------------->
        <div class="flex">
          <p>Email:&nbsp;</p>
          <NuxtLink
            to="mailto:contact@rorystock.com"
            target="_blank"
            aria-label="Email link"
            aria-hidden="false"
          >
            <p
              class="text-white font-bold lowercase underline hover:text-blue-499 transition-colors duration-100"
            >
              contact@rorystock.com
            </p>
          </NuxtLink>
        </div>
        <!----------------------------------------->
        <br />
        <DigitalTime />
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
