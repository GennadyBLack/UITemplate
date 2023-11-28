// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    renderJsonPayloads: false,
  },
  components: [
    { path: "~/components/Ui", prefix: "Ui", global: true },
    "~/components",
  ],
});
