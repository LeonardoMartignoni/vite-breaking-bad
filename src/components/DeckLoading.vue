<script></script>
<template>
  <div class="loading_page">
    <span class="fs-4 fst-italic">Deck loading, please wait...</span>
    <font-awesome-icon
      icon="fa-solid fa-spinner"
      class="mt-3 fa-3x fa-spin-pulse"
    />
  </div>
</template>
<style lang="scss" scoped>
.loading_page {
  color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #000000, $alpha: 0.4);
}
</style>
