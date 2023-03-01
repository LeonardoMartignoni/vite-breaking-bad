<script>
export default {
  props: {
    card: Array,
  },
};
</script>
<template>
  <div class="card_content p-2">
    <img
      :src="card.card_images[0].image_url"
      alt="YuGiOh Card"
      class="img-fluid"
    />
  </div>
</template>
<style lang="scss" scoped></style>
