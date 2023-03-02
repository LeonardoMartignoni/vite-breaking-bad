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
          // console.log(store.decks);
        })
        .catch((error) => {
          store.decks = [];
          console.error(error);
        })
        .finally(() => {
          // REMOVE THIS LINE IN BUILD (DEBUG)
          setTimeout(() => {
            store.isPageLoading = false;
          }, 300);

          // ADD THIS LINE IN BUILD
          // store.isPageLoading = false;
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
      <AppMain
        @fetch-type="
          fetchDecks(
            `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0&type=${$event}`
          )
        "
      />
    </div>
    <DeckLoading v-else />
  </main>
</template>

<style lang="scss">
body {
  background-color: coral;
}
</style>
