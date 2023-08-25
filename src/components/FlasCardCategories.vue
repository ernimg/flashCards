<template>
  <main>
    <section class="cards">
      <category-card></category-card>
    </section>
  </main>
</template>
<script>
import CategoryCard from "./CategoryCard.vue";
export default {
  components: {
    CategoryCard,
  },
  data() {},
};
</script>
<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
  grid-gap: 40px;
  padding: 60px 0;
}
.cards {
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 40px;
}

@media only screen and (max-width: 700px) {
  main {
    grid-gap: 20px;
  }
}

@media only screen and (max-width: 500px) {
  main {
    grid-template-columns: 10px repeat(6, 1fr) 10px;
    grid-gap: 10px;
  }
  .cards {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }
}
</style>
