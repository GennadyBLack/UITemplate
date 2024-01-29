import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import Maska from "maska";
import "./plugins/validate";
import { registerComponents, registerComposables } from "./utils";

const elem = document.createElement("div");
elem.id = "rdbxxx";
document.body.appendChild(elem);
const app = createApp(App).use(Maska);
// registerComposables(app);
registerComponents(app);

app.mount("#rdbxxx");
