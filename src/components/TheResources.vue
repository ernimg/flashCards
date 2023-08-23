<template>
  <button @click="setActiveTab('flas-card-categories')">Categories</button>
  <button @click="setActiveTab('add-flash-card')">Add FlasCard</button>
  <!-- <keep-alive> -->
  <component :is="activeTab"></component>
  <!-- </keep-alive> -->
</template>
<div>{{setActiveFlashCards}}</div>
<script>
import AddFlashCard from "./AddFlashCard.vue";
import FlasCardCategories from "./FlasCardCategories.vue";
import FlasCardsColletion from "./FlasCardsColletion.vue";
export default {
  components: { FlasCardCategories, AddFlashCard, FlasCardsColletion },

  data() {
    return {
      activeTab: "flas-card-categories",
      activeFlasCard: [],
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

  provide() {
    return {
      categories: this.categories,
      setActiveTab: this.setActiveTab,
      selectedCategory: this.activeFlasCard,
    };
  },

  methods: {
    setActiveTab(tab, arg = "") {
      this.activeTab = tab;
      if (arg !== "") {
        const filterCategory = this.categories.filter(
          (category) => category.category === arg
        );

        filterCategory[0].flashCardVal.forEach((items) => {
          this.activeFlasCard.push(items);
        });
      } else {
        this.activeFlasCard = [];
      }
    },
  },
};
</script>
