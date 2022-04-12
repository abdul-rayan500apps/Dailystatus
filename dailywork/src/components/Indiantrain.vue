<template>
  <div>
    <h2>Creating APIs</h2>

    <h4>Rest Api Concept</h4>

    <div>
      <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    </div>

    <b-button @click="getData()">Click Me!</b-button>

    <div>
      {{ searchData.data }}

      <table border="2px" align="center">
        <thead>
          <tr>
            <th>TrainName</th>

            <th>TrainNumber</th>

            <th>TrainFrom</th>

            <th>TrainTo</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in searchData.data" :key="user.id">
            <td>{{ user.name }}</td>

            <td>{{ user.train_num }}</td>

            <td>{{ user.train_from }}</td>

            <td>{{ user.train_to }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
var axios = require("axios").default;

export default {
  name: "sampleApis",

  data() {
    return {
      options: {
        method: "POST",

        url: "https://trains.p.rapidapi.com/",

        headers: {
          "content-type": "application/json",

          "X-RapidAPI-Host": "trains.p.rapidapi.com",

          "X-RapidAPI-Key":
            "0030c715ecmsh58180c0530cc6e6p188880jsncda365dc0d9f",
        },

        data: { search: "" },
      },

      text: "",

      searchData: {},
    };
  },

  methods: {
    async getData() {
      this.options.data.search = this.text;

      this.searchData = await axios.request(this.options);
    },
  },
};
</script>