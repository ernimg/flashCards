<template>
  <section class="cards"></section>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.cards {
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 40px;
}
</style>
