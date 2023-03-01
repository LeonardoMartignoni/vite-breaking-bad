<script>
import { store } from "./assets/data/store";
import axios from "axios";

export default {
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

<template></template>

<style scoped></style>
