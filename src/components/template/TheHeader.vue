<template>
  <header>
    <h1>{{ setHeaderValue }}</h1>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["content"],
  computed: {
    setHeaderValue() {
      if (this.content === "") {
        return "Welcome in Flash Cards App VUE";
      } else {
        return this.content;
      }
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #27866f;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>
