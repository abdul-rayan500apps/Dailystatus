

<template>
  <div>
    <h1>Axios With simple get request</h1>

    {{ info }}
  </div>
</template>


<script>
var axios = require("axios").default;

export default {
  name: "AxioS1",

  data() {
    return {
      info: " ",
    };
  },

  created(){
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
          this.info=response;})
  
  }
};
</script>