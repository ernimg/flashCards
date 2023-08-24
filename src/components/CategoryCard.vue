<template>
  <li v-for="cat in categories" :key="cat.category">
    <base-box>
      <h3>{{ cat.category }}</h3>
      <nav>
        <button @click="setActiveTab('flash-cards-colletion', cat.category)">
          Show
        </button>
      </nav>
    </base-box>
  </li>
</template>
<script>
export default {
  inject: ["categories", "setActiveTab"],
  data() {},
};
</script>
