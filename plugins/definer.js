import Spiner from "@/components/Ui/Spiner";
import Toast, { useToast } from "vue-toastification";
import useTest from "@/composables/useTest";
import Utils from "~/utils";
import { vMaska } from "maska";
import "vue-toastification/dist/index.css";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component(Spiner);
  nuxtApp.vueApp.use(Toast);
  nuxtApp.vueApp.directive("maska", vMaska);

  return {
    provide: {
      testus: useTest(),
    },
  };
});
