<script setup>
defineProps({
  changeOrder: {
    type: Boolean,
  },
  path: {
    type: String,
  },
  title: {
    type: String,
  },
  text: {
    type: String,
  },
});
</script>

<template>
  <div class="items-center gap-20 md:flex">
    <div
      class="md:w-8/12"
      :class="[changeOrder ? 'order-first' : ' order-last']"
    >
      <img :src="path" alt="" />
    </div>
    <div class="py-6 md:w-4/12">
      <div class="text-center text-2xl font-extrabold md:mb-6 md:text-4xl">
        {{ title }}
      </div>
      <p class="leading-6">{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
