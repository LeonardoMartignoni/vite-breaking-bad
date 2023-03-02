<script>
import deckType from "../assets/data/partials/_deckType.js";

export default {
  data() {
    return {
      deckType,
    };
  },
};
</script>

<template>
  <select name="type_selector">
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
