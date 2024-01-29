import { getCurrentInstance } from "vue";

export function useRender(render) {
  const vm = getCurrentInstance();
  if (!vm) {
    throw new Error({ message: "Нельзя меен" });
  }
  vm.render = render;
}
