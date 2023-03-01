<script>
import AppHeader from "./components/AppHeader.vue";
import { store } from "./assets/data/store";
import axios from "axios";

export default {
  components: {
    AppHeader,
  },

  data() {
    return {
      store,
    };
  },

  created() {
    axios.get(store.endpoint).then((response) => {
      store.decks = response.data;
      console.log(store.decks);
    });
  },
};
</script>

<template>
  <AppHeader />
</template>

<style lang="scss" scoped></style>
