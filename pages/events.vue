<script setup lang="ts">
useHead({
  title: "Events",
});

const events = [
  //--------------- NZ MTB RALLY 2025 ---------------//
  {
    title: "2025 NZ MTB Rally",
    location: "Nelson and Tasman",
    date: "March 22 - 28",
    url: "https://drive.google.com/drive/folders/1Br8y_ljztNp0DDGWYlZVI3UNFkQTs2Xm?usp=drive_link",
    coverImage: "/events/R5RS4767.jpg",
  },
  //-----------------------------------------------------//
  //--------------- 2025 CABLE BAY ENDURO ---------------//
  {
    title: "2025 Cable Bay Enduro",
    location: "Cable Bay Adventure Park",
    date: "February 28 - March 2",
    url: "https://drive.google.com/drive/folders/1AFsyxNwcZJrnd7hsa5uIHhEMkF3PRaK9?usp=sharing",
    coverImage: "/events/R5RS8016.jpg",
  },
  //------------------------------------------------------------//
  //--------------- 2025 CABLE BAY JUNIOR ENDURO ---------------//
  {
    title: "2025 Cable Bay Junior Enduro",
    location: "Cable Bay Adventure Park",
    date: "February 1",
    url: "https://drive.google.com/drive/folders/172kipqxUfvIngl1iKfmn5wGXy--eBlDH?usp=sharing",
    coverImage: "/events/R5RS3573.jpg",
  },
  //-----------------------------------------------//
  //--------------- 2024 GRITT CAMP ---------------//
  {
    title: "2024 Gritt Camp",
    location: "Cable Bay Adventure Park",
    date: "December 14 - 15",
    url: "https://drive.google.com/drive/folders/1-l__vXPYAsgy6XWyqU10YuBj-2TGTWK-",
    coverImage: "/events/R5RS7535.jpg",
  },
  //--------------------------------------------------------//
  //--------------- 2024 CODGERS KIDS ENDURO ---------------//
  {
    title: "2024 Codgers Kids Enduro",
    location: "Koata Park",
    date: "October 19",
    url: "https://drive.google.com/drive/folders/1sGzvAzK25DWmg07eiC4aQigIrnu0jgMn",
    coverImage: "/events/R5RS2243.jpg",
  },
  //--------------------------------------------------//
  //--------------- 2024 BROKEN AXE DH ---------------//
  {
    title: "2024 Broken Axe DH",
    location: "Waitarake (Sharlands)",
    date: "September 29",
    url: "https://drive.google.com/drive/folders/1ziCONk0tXcDflEy_isSNqRrl5ExKkp6J",
    coverImage: "/events/R5RS0585.jpg",
  },
  //-----------------------------------------------------------//
  //--------------- 2024 MIDWINTER GORGE ENDURO ---------------//
  {
    title: "2024 Midwinter Gorge Enduro",
    location: "Wairoa Gorge",
    date: "June 29",
    url: "https://drive.google.com/drive/folders/1QboN8bNWIamXMn6GMDatkMi73pJD7Slf",
    coverImage: "/events/R5RS1675.jpg",
  },
  //----------------------------------------------------------//
  //--------------- 2024 GRAVITY JUNIOR ENDURO ---------------//
  {
    title: "2024 Gravity Junior Enduro",
    location: "Koata Park",
    date: "May 26",
    url: "https://drive.google.com/drive/folders/18d3Uv77XhR3Dr51-hac-8Nk8_JSxl8us",
    coverImage: "/events/R5RS9284.jpg",
  },
  //---------------------------------------------------//
  //--------------- 2024 MAMMOTH ENDURO ---------------//
  {
    title: "2024 Mammoth Enduro",
    location: "Nelson",
    date: "March 23 - 24",
    url: "https://drive.google.com/drive/folders/1cIqTphnBZZaIxAeQaIHQQZ1QeERhcprF",
    coverImage: "/events/0I0A2280.jpg",
  },
  //-----------------------------------------------------//
  //--------------- 2024 CABLE BAY ENDURO ---------------//
  {
    title: "2024 Cable Bay Enduro",
    location: "Cable Bay Adventure Park",
    date: "March 1 - 3",
    url: "https://drive.google.com/drive/folders/1dkZcDASg2Pu7vy4tAF8ePtcIHLMbJtUM",
    coverImage: "/events/P1027141.jpg",
  },
  //------------------------------------------------------------//
];
</script>

<template>
  <div>
    <!------------------------- USAGE MESSAGE ------------------------->
    <p
      class="flex justify-center font-georgia text-gray-500 selection:text-blue-499 text-base md:text-lg lg:text-xl pl-4 pr-4 pt-4"
    >
      Photos free for personal use with credit. Contact me for any brand or
      commercial use.
    </p>
    <!-------------------------------------------------------------------->
    <div
      class="flex flex-col gap-4 items-center md:items md:grid md:grid-cols-2 md:gap-6 pl-4 pr-4 pt-4 pb-4"
    >
      <div
        v-for="event in events"
        :key="event.title"
        class="flex flex-col items-center font-neue-haas-grotesk-display group"
      >
        <!------------------------ EVENT CARD ------------------------>
        <div
          class="w-full items-baseline flex flex-row justify-center xl:justify-between"
        >
          <!---------------------- EVENT DATE ----------------->
          <p
            class="hidden xl:flex md:text-lg text-blue-499 font-bold group-hover:text-black transition-colors duration-100"
          >
            {{ event.date }}
          </p>
          <!---------------------------------------------------->
          <!---------------------- EVENT TITLE ----------------->
          <p
            class="sm:text-xl md:text-2xl font-bold text-blue-499 xl:text-black xl:group-hover:text-blue-499 transition-colors duration-100"
          >
            {{ event.title }}
          </p>
          <!------------------------------------------------------->
          <!---------------------- EVENT LOCATION ----------------->
          <p
            class="hidden xl:flex md:text-lg text-blue-499 font-bold group-hover:text-black transition-colors duration-100"
          >
            {{ event.location }}
          </p>
          <!--------------------------------------------------------->
        </div>
        <!------------------------ EVENT PHOTO/LINK ------------------------>
        <NuxtLink
          :to="event.url"
          target="_blank"
          aria-label="Link to event photos"
          aria-hidden="false"
        >
          <NuxtPicture
            :src="event.coverImage"
            :alt="event.title"
            class="w-full h-96 object-cover"
            decoding="async"
            :modifiers="{ auto: 'format,compress' }"
          />
        </NuxtLink>
        <!----------------------------------------------------------------->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
