<script>
export default {
  props: {
    card: Object,
  },
};
</script>
<template>
  <div class="card_content p-2">
    <div class="card_infos text-center">
      <img
        :src="card.card_images[0].image_url"
        alt="YuGiOh Card"
        class="img-fluid"
      />
      <span class="card_name text-uppercase fw-bold">{{ card.name }}</span>
      <span class="card_archetype">{{ card.archetype }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card_infos {
  background-color: coral;
  .card_name {
    color: white;
    display: inline-block;
    height: 3rem;
  }
  .card_archetype {
    display: block;
  }
}
</style>
