<script>
import { store } from "../assets/data/store";
import DeckCards from "./DeckCards.vue";

export default {
  components: {
    DeckCards,
  },

  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="container">
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
