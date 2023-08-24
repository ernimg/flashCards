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
import FlashCardsColletion from "./FlashCardsColletion.vue";
export default {
  components: { FlasCardCategories, AddFlashCard, FlashCardsColletion },

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
      addC: this.addFlasCard,
    };
  },

  methods: {
    setActiveTab(tab, arg = "") {
      this.activeTab = tab;
      if (arg !== "") {
        const filterCategory = this.categories.filter(
          (category) => category.category === arg
        );
        for (const element of filterCategory[0].flashCardVal) {
          console.log("w for", this.activeFlasCard);
          this.activeFlasCard.push(element);
        }
      } else {
        this.activeFlasCard.length = 0;
      }
    },
    addFlasCard(word, translate, cat) {
      console.log(word, translate, cat);
      const filterCategory = this.categories.filter(
        (category) => category.category === cat
      );
      const newCategory = {
        category: cat,
        flashCardVal: [{ En: translate, Pl: word }],
      };
      const newFlashContent = { En: translate, Pl: word };

      filterCategory.length == 0
        ? this.categories.push(newCategory)
        : filterCategory[0].flashCardVal.push(newFlashContent);
      console.log(filterCategory, newCategory, newFlashContent);
    },
  },
};
</script>
