<template>
  <h2>FlashCardsCollection</h2>
  <section>
    <div v-for="category in selectedCategory" :key="category.Pl">
      <div>{{ category.Pl }}</div>
      <div>{{ category.En }}</div>
    </div>
  </section>
</template>
<script>
export default {
  inject: ["selectedCategory"],
  data() {
    return {};
  },
};
</script>
