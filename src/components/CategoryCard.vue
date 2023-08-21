<template>
  <li v-for="cat in categories" :key="cat.category">
    <h3>{{ cat.category }}</h3>
    <nav>
      <button @click="setActiveTab('flas-cards-colletion', cat.category)">
        Show
      </button>
    </nav>
  </li>
</template>
<script>
export default {
  inject: ["categories", "setActiveTab"],
  data() {},
};
</script>
