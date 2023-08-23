<template>
  <h2>Add Flash Card</h2>
  <form @submit.prevent="handleForm">
    <div>
      <label for="wordPL">Słowo(PL)</label>
      <input type="text" id="wordPL" ref="Polish" />
    </div>
    <div>
      <label for="wordEn">Tłumaczenie</label>
      <input type="text" id="wordEn" ref="English" />
    </div>
    <div>
      <label for="category">Kategoria</label>
      <input type="text" id="category" ref="Category" />
    </div>
    <button>Dodaj</button>
  </form>
</template>
<script>
export default {
  inject: ["addC"],
  data() {
    return {};
  },
  methods: {
    handleForm(evt) {
      evt.preventDefault();
      const plWord = this.$refs.Polish.value;
      const enWord = this.$refs.English.value;
      const category = this.$refs.Category.value;
      if (plWord === "" || enWord === "" || category === "")
        return alert("uspełnij wszystkie pola");
      // console.log(plWord, enWord, category);
      this.addC(plWord, enWord, category);
    },
  },
};
</script>
