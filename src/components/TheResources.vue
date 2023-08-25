<template>
  <base-box>
    <base-button @click="setActiveTab('flas-card-categories')"
      >Categories</base-button
    >
    <base-button @click="setActiveTab('add-flash-card')"
      >Add FlasCard</base-button
    >
  </base-box>

  <keep-alive> <component :is="activeTab"></component> </keep-alive>
</template>
<div>{{setActiveFlashCards}}</div>
<script>
import BaseBox from "../UI/BaseBox.vue";
import AddFlashCard from "./AddFlashCard.vue";
import FlasCardCategories from "./FlasCardCategories.vue";
import FlashCardsColletion from "./FlashCardsColletion.vue";
export default {
  components: {
    FlasCardCategories,
    AddFlashCard,
    FlashCardsColletion,
    BaseBox,
  },

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
          this.activeFlasCard.push(element);
        }
      } else {
        this.activeFlasCard.length = 0;
      }
    },
    addFlasCard(word, translate, cat) {
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
    },
  },
};
</script>
<style>
@media only screen and (max-width: 1000px) {
  .card {
    grid-column-end: span 6;
  }
}

@media only screen and (max-width: 700px) {
  main {
    grid-gap: 20px;
  }
  .card {
    grid-column-end: span 12;
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
  .card {
    grid-column-end: span 6;
  }
}
</style>
