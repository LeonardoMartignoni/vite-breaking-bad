<script>
import { store } from "../assets/data/store";

export default {
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
        <div
          class="col"
          v-for="card in store.decks"
          :key="card.id"
        >
          <div class="card_content p-2">
            <img
              :src="card.card_images[0].image_url"
              alt="YuGiOh Card"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.deck_cards {
  background-color: white;
}
</style>
