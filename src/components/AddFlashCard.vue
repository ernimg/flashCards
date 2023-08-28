<template>
  <base-box>
    <form @submit.prevent="handleForm">
      <div class="form-control">
        <label for="wordPL">Word(PL)</label>
        <input type="text" id="wordPL" ref="Polish" />
      </div>
      <div class="form-control">
        <label for="wordEn">Translation</label>
        <input type="text" id="wordEn" ref="English" />
      </div>
      <div class="form-control">
        <label for="category">Category</label>
        <input type="text" id="category" ref="Category" />
      </div>
      <base-button>Add</base-button>
    </form>
  </base-box>
  <teleport to="body">
    <base-dialog
      v-if="err"
      :title="errMsg"
      @close="handleCloseErr"
    ></base-dialog>
  </teleport>
</template>
<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  inject: ["addC"],
  data() {
    return {
      err: false,
      errMsg: "",
    };
  },
  methods: {
    handleForm(evt) {
      evt.preventDefault();
      const plWord = this.$refs.Polish.value;
      const enWord = this.$refs.English.value;
      const category = this.$refs.Category.value;
      if (plWord === "" || enWord === "" || category === "") {
        this.errMsg = "uspełnij wszystkie pola";
        this.err = true;
      } else {
        this.addC(plWord, enWord, category);
      }
    },
    handleCloseErr() {
      this.err = false;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
