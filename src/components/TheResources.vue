<template>
  <button @click="setActiveTab('flas-card-categories')">Categories</button>
  <button @click="setActiveTab('add-flash-card')">Add FlasCard</button>
  <component :is="activeTab"></component>
</template>
<script>
import AddFlashCard from "./AddFlashCard.vue";
import FlasCardCategories from "./FlasCardCategories.vue";

export default {
  components: { FlasCardCategories, AddFlashCard },
  data() {
    return {
      activeTab: "flas-card-categories",
      categories: [
        {
          category: "Jedzenie",
          flashCardVal: [
            { En: "potatoes", Pl: "ziemniaki" },
            { En: "tomatoes", Pl: "pomidory" },
          ],
        },
        {
          category: "Ubrania",
          flashCardVal: [
            { En: "suit", Pl: "garnitur" },
            { En: "dress", Pl: "sukienka" },
          ],
        },
      ],
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>
