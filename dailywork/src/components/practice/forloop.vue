<template>
  <div>
    <h1>display a text five times</h1>
    <button @click="fun()">click on it</button>
  </div>
</template>
<script>
export default {
  name: "ForLoop",
  data() {
    return {};
  },
  methods: {
    fun() {
      const n = 5;
      for (let i = 1; i <= n; i++) {
        console.log("i love india");
      }
    },
  },
};
</script>
