<template>
  <div>
    <h2>Question-3</h2>
    <h4>{{ time }}</h4>
    <button @click="findtime()"></button>
  </div>
</template>
<script>
export default {
  name: "QstN3",
  data() {
    return {
      time: [],
    };
  },
  methods: {
    findtime() {
      //using set time
      setTimeout(() => {
        this.time = new Date();
      }, 5000);
      //using set interval
      setInterval(() => {
        this.time = new Date();
      }, 600);
    },
  },
};
</script>
