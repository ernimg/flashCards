<template>
  <button @click="setActiveTab('flas-card-categories')">Categories</button>
  <button @click="setActiveTab('add-flash-card')">Add FlasCard</button>
  <keep-alive>
    <component :is="activeTab"></component>
  </keep-alive>
</template>
<script>
import AddFlashCard from "./AddFlashCard.vue";
import FlasCardCategories from "./FlasCardCategories.vue";
import FlasCardsColletion from "./FlasCardsColletion.vue";
export default {
  components: { FlasCardCategories, AddFlashCard, FlasCardsColletion },
  provide() {
    return {
      categories: this.categories,
      setActiveTab: this.setActiveTab,
    };
  },
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
    setActiveTab(tab, arg = "") {
      this.activeTab = tab;
      if (arg !== "") {
        console.log(arg);
      } else {
        return "";
      }
    },
  },
};
</script>
