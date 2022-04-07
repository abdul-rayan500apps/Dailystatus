<template>
  <div>
    <h1>hi</h1>

    {{ txt }}
  </div>
</template>

<script>
var axios = require("axios").default;

export default {
  name: "AxioS",

  data() {
    return {
      txt: "",
    };
  },

  mounted() {
    axios

      .get("https://api.coindesk.com/v1/bpi/currentprice.json")

      .then((response) => (this.txt = response));
  },
};
</script>

