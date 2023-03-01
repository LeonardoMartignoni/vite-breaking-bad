import { createApp } from "vue";

// Import Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

/* Import FontAwesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

/* Add icons to the library */
library.add(faSpinner);

import App from "./App.vue";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
