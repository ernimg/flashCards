<template>
  <div class="card" v-for="cat in categories" :key="cat.category">
    <h3>{{ cat.category }}</h3>
    <nav>
      <base-button @click="setActiveTab('flash-cards-colletion', cat.category)">
        Show
      </base-button>
    </nav>
  </div>
</template>
<script>
export default {
  inject: ["categories", "setActiveTab"],
  data() {},
};
</script>
<style scoped>
.card {
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  padding: 0.8rem 0.4rem;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.card h3 {
  font-size: 1.7rem;
  margin-bottom: 1rem;
}
.card nav {
  text-align: center;
}
@media only screen and (max-width: 1000px) {
  .card {
    grid-column-end: span 6;
  }
}
@media only screen and (max-width: 700px) {
  .card {
    grid-column-end: span 12;
  }
}
@media only screen and (max-width: 500px) {
  .card {
    grid-column-end: span 6;
  }
}
</style>
