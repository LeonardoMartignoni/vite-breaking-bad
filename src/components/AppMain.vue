<script>
import { store } from "../assets/data/store";
import DeckCards from "./DeckCards.vue";
import FetchType from "./FetchType.vue";

export default {
  components: {
    DeckCards,
    FetchType,
  },

  data() {
    return {
      store,
    };
  },

  methods: {
    fetchType(type) {
      this.$emit("fetch-type", type);
      // console.log(type);
    },
  },
};
</script>
<template>
  <div class="container">
    <FetchType
      class="my-3"
      @fetch-type="fetchType($event)"
    />
    <div class="deck_cards p-4">
      <div class="row row-cols-5">
        <DeckCards
          v-for="card in store.decks"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.deck_cards {
  background-color: white;
}
</style>
