

<template>
  <div>
    <h1>Axios With with error handling</h1>

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

  mounted() {
    return new Promise((reject) => {
      axios

        .get("https://jsonplaceholder.typicode.com/todos")

        .then((response) => {
          this.info = response;
        })

        .catch((error) => {
          reject(error);
        });
    });
  },
};
</script>