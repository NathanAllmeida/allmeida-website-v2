import { createApp } from "vue";
import { createPinia } from "pinia";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngular,faPhp,faJs,faGithub  } from '@fortawesome/free-brands-svg-icons'

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/main.css";

library.add(faAngular)
library.add(faPhp)
library.add(faJs)
library.add(faGithub)

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount("#app");
