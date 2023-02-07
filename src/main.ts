import App from "./App.vue";
import { createApp } from "vue";
import "./registerServiceWorker";
import "./assets/css/tailwind.css";
import "./assets/css/wallets.css";
import "./assets/css/charts.css";
import VueApexCharts from "vue3-apexcharts";
import Notifications from "@kyvg/vue3-notification";
import velocity from "velocity-animate";
import { store } from "./services/store";
import router from "./router";
import { useWorkspace } from "./services/wallets/useWorkspace";

useWorkspace(); // Init Solana Wallets

createApp(App)
  .use(store)
  .use(router)
  .use(Notifications, { velocity })
  .use(VueApexCharts)
  .mount("#app");
