<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import DeckLoading from "./components/DeckLoading.vue";
import { store } from "./assets/data/store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppMain,
    DeckLoading,
  },

  data() {
    return {
      store,
    };
  },

  methods: {
    fetchDecks(url) {
      store.isPageLoading = true;
      axios
        .get(url)
        .then((response) => {
          store.decks = response.data.data;
          console.log(store.decks);
        })
        .catch((error) => {
          store.decks = [];
          console.error(error);
        })
        .finally(() => {
          store.isPageLoading = false;
        });
    },
  },

  created() {
    this.fetchDecks(store.endpoint);
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <div v-if="!store.isPageLoading">
      <AppMain />
    </div>
    <DeckLoading v-else />
  </main>
</template>

<style lang="scss">
body {
  background-color: coral;
}
</style>
