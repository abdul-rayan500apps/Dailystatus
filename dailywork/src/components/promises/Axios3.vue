

<template>
  <div>
    <h1>Axios With async and await</h1>

    {{ info }}
  </div>
</template>


<script>
var axios = require("axios").default;

export default {
  name: "AxioS2",

  data() {
    return {
      info: " ",
    };
  },
  async created() {
    // GET request using axios with async/await
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos"                           );
    this.info = response;
  }

  
};
</script>