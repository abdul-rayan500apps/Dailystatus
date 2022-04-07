<template>
  <div>
    <h1>vue cookies</h1>
    <button @click="setCookie">set Cookie</button>
  </div>
</template>
<script>
export default {
  name: "CookiesTest",
  methods: {
    setCookie() {
      //console.log("cookies", this.$cookies)
      //it sets the cookie called 'username'
      this.$cookies.set("username", "abdulrayan", "1d");
      //this.$cookies.get("username"); // abdulrayan
      //console.log("cookies", this.$cookies.get('username'))
    },
  },
};
</script>
