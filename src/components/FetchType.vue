<script>
import deckType from "../assets/data/partials/_deckType.js";

export default {
  data() {
    return {
      deckType,
    };
  },

  methods: {
    searchType() {
      // console.log(this.deckType.selectedType);
      this.$emit("fetch-type", this.deckType.selectedType);
    },
  },
};
</script>

<template>
  <select
    name="type_selector"
    @change="searchType"
    v-model="deckType.selectedType"
  >
    <option value="all">All types</option>
    <option
      value=""
      disabled
    >
      ---------------
    </option>
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
