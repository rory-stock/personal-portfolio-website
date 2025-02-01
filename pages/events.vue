<script setup lang="ts">
useHead({
  title: "Events",
});

const events = [
  {
    title: "2025 Cable Bay Junior Enduro",
    location: "Cable Bay Adventure Park",
    date: "February 1",
    url: "https://drive.google.com/drive/folders/172kipqxUfvIngl1iKfmn5wGXy--eBlDH?usp=sharing",
    coverImage: "/events/R5RS3573.jpg",
  },
  {
    title: "2024 Gritt Camp",
    location: "Cable Bay Adventure Park",
    date: "December 14 - 15",
    url: "https://drive.google.com/drive/folders/1-l__vXPYAsgy6XWyqU10YuBj-2TGTWK-",
    coverImage: "/events/R5RS7535.jpg",
  },
  {
    title: "2024 Codgers Kids Enduro",
    location: "Koata Park",
    date: "October 19",
    url: "https://drive.google.com/drive/folders/1sGzvAzK25DWmg07eiC4aQigIrnu0jgMn",
    coverImage: "/events/R5RS2243.jpg",
  },
  {
    title: "2024 Broken Axe DH",
    location: "Waitarake (Sharlands)",
    date: "Sebtember 29",
    url: "https://drive.google.com/drive/folders/1ziCONk0tXcDflEy_isSNqRrl5ExKkp6J",
    coverImage: "/events/R5RS0585.jpg",
  },
  {
    title: "2024 Midwinter Gorge Enduro",
    location: "Wairoa Gorge",
    date: "June 29",
    url: "https://drive.google.com/drive/folders/1QboN8bNWIamXMn6GMDatkMi73pJD7Slf",
    coverImage: "/events/R5RS1675.jpg",
  },
  {
    title: "2024 Gravity Junior Enduro",
    location: "Koata Park",
    date: "May 26",
    url: "https://drive.google.com/drive/folders/18d3Uv77XhR3Dr51-hac-8Nk8_JSxl8us",
    coverImage: "/events/R5RS9284.jpg",
  },
  {
    title: "2024 Mammoth Enduro",
    location: "Nelson",
    date: "March 23 - 24",
    url: "https://drive.google.com/drive/folders/1cIqTphnBZZaIxAeQaIHQQZ1QeERhcprF",
    coverImage: "/events/0I0A2280.jpg",
  },
  {
    title: "2024 Cable Bay Enduro",
    location: "Cable Bay Adventure Park",
    date: "March 1 - 3",
    url: "https://drive.google.com/drive/folders/1dkZcDASg2Pu7vy4tAF8ePtcIHLMbJtUM",
    coverImage: "/events/P1027141.jpg",
  },
];
</script>

<template>
  <div>
    <p
      class="flex justify-center font-georgia text-gray-500 selection:text-blue-499 text-base md:text-lg lg:text-xl pl-4 pr-4 pt-4"
    >
      Photos free for personal use with credit. Contact me for any brand or
      commercial use.
    </p>
    <div
      class="flex flex-col gap-4 items-center md:items md:grid md:grid-cols-2 md:gap-6 pl-4 pr-4 pt-4 pb-4"
    >
      <div
        v-for="event in events"
        :key="event.title"
        class="flex flex-col items-center font-neue-haas-grotesk-display group"
      >
        <div
          class="w-full items-baseline flex flex-row justify-center xl:justify-between"
        >
          <p
            class="hidden xl:flex md:text-lg text-blue-499 font-bold group-hover:text-black"
          >
            {{ event.date }}
          </p>
          <p
            class="sm:text-xl md:text-2xl font-bold text-blue-499 xl:text-black xl:group-hover:text-blue-499"
          >
            {{ event.title }}
          </p>
          <p
            class="hidden xl:flex md:text-lg text-blue-499 font-bold group-hover:text-black"
          >
            {{ event.location }}
          </p>
        </div>
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
      </div>
    </div>
  </div>
</template>

<style scoped></style>
