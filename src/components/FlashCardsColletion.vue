<template>
  <h2>FlashCardsCollection</h2>
  <div class="card" v-for="category in selectedCategory" :key="category.Pl">
    <div class="card-inner">
      <div class="card-front">
        <p>{{ category.Pl }}</p>
      </div>
      <div class="card-back">
        <p>{{ category.En }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["selectedCategory"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
  margin: 2.2rem 2rem;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #6a2c70;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #6a2c70;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
}

.card-back {
  background-color: #f08a5d;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #f08a5d;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}
</style>
