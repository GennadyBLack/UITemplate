import Spiner from "@/components/Ui/Spiner";
import Toast, { useToast } from "vue-toastification";
import Utils from "~/utils";
import { vMaska } from "maska";
import "vue-toastification/dist/index.css";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component(Spiner);

  nuxtApp.vueApp.use(Toast);
  nuxtApp.vueApp.directive("maska", vMaska);

  // nuxtApp.vueApp.directive("clickoutside", {
  //   beforeMount(el, binding, vnode) {
  //     function documentHandler(e) {
  //       if (el.contains(e.target)) {
  //         return false;
  //       }
  //       binding.value(e);
  //     }
  //     el.__vueClickOutside__ = documentHandler;
  //     isClient && document.addEventListener("click", documentHandler);
  //   },

  //   getSSRProps(binding, vnode) {
  //     return {};
  //   },

  //   unmounted(el, binding) {
  //     isClient && document.removeEventListener("click", el.__vueClickOutside__);
  //     delete el.__vueClickOutside__;
  //   },
  // });
});
