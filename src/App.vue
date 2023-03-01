<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./assets/data/store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store,
    };
  },

  created() {
    axios.get(store.endpoint).then((response) => {
      store.decks = response.data.data;
      console.log(store.decks);
    });
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <AppMain class="mt-5" />
  </main>
</template>

<style lang="scss">
body {
  background-color: coral;
}
</style>
