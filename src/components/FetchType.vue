<script>
import deckType from "../assets/data/partials/_deckType.js";

export default {
  data() {
    return {
      deckType,
      selectedType: "all",
    };
  },

  methods: {
    searchType() {
      this.$emit("fetch-type", this.selectedType);
    },
  },
};
</script>

<template>
  <select
    name="type_selector"
    @change="searchType"
    v-model="selectedType"
  >
    <option value="all">All types</option>
    <option
      v-for="deck in deckType.types"
      :value="deck.type"
      :key="deck.type"
    >
      {{ deck.type }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
