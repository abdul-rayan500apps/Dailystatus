<template>
  <div>
    <h1 align="center">This is Question 1</h1>

    <b-form-select v-model="value" :options="countries"> </b-form-select
    ><br /><br />

    <b-button variant="warning" @click="getData">Get Data</b-button><br /><br />
    

    <b-table striped hover :items="items" id="mytable"> </b-table>
    
  </div>
</template>

<script>
const { getNames } = require("country-list");

export default {
  name: "AS10q1",


  data() {
    return {
      items: [],

      countries: [],

      

    };
  },

  mounted() {
    let countries = getNames();

    this.countries = countries.map((row) => {
      return { value: row, text: row ,};
    });

    
  },

  methods: {
    async getData() {
      // Get the response

      const response = await fetch(
        "http://universities.hipolabs.com/search?country=" + this.value,

        {
          method: "GET",
        }
      );

      const responseText = await response.json();

      this.items = responseText.map((row) => {
        return {
          university_name: row.name,
          
          website_url: row.web_pages[0],

          
        };
      });
    },
  },
};
</script>