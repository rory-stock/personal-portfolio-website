// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    provider: "cloudflare",
    cloudflare: {
        baseURL: "https://www.rorystock.dev",
    }
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [
        // Primary Meta Tags
        {
          name: "title",
          content: "Rory Stock - New Zealand Based Photographer",
        },
        {
          name: "description",
          content:
            "Rory Stock is a New Zealand based sports and product photographer specialising in mountain biking.",
        },
        {
          name: "keywords",
          content:
            "photography, mountain bike photography, action photography, product photography, portfolio, Rory Stock photography",
        },
        { name: "author", content: "Rory Stock" },
        { name: "copyright", content: "Rory Stock" },
        { name: "language", content: "English" },
        { name: "robots", content: "index, follow" },

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://rorystock.com/" },
        {
          property: "og:title",
          content: "Rory Stock - New Zealand Based Photographer",
        },
        {
          property: "og:description",
          content:
            "Rory Stock is a New Zealand based sports and product photographer specialising in mountain biking.",
        },

        // Twitter
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://rorystock.com/" },
        {
          property: "twitter:title",
          content: "Rory Stock - New Zealand Based Photographer",
        },
        {
          property: "twitter:description",
          content:
            "Rory Stock is a New Zealand based sports and product photographer specialising in mountain biking.",
        },
      ],

      link: [
        // Fonts
        { rel: "stylesheet", href: "https://use.typekit.net/nqc5atv.css" },

        // Favicon
        { rel: "icon", href: "/favicons/favicon.svg", type: "image/svg+xml" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicons/site.webmanifest" },
      ],
    },
  },

  modules: ["@nuxt/image"],
});
