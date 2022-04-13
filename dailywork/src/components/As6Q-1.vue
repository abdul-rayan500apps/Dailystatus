<template>
  <div>
    <h1 align="center">This is Question 1</h1>

    <b-form-select v-model="value" :options="countries"> </b-form-select
    ><br /><br />

    <b-button variant="warning" @click="getData">Get Data</b-button><br /><br />

    <center>
      

      <input
        type="text"
        name="search"
        id="search"
        v-on:keyup="search()"
        placeholder="search .."
      />
    </center>

    <br /><br /><br />

   

    <b-table striped hover :items="items" id="mytable">
      <p>university_name:-- {{ value.university_name }}</p>

      <p>domains:{{ value.domains }}</p>

      <a :href="value.website_url" target="_blank">{{ value.website_url }}</a>

      <p @click="redirect(value.website_url)">
        website_url:{{ value.website_url }}
      </p>

      <p>state_province:{{ value.state_province }}</p>
    </b-table>
  </div>
</template>

<script>
const { getNames } = require("country-list");

export default {
  name: "AS6q1",

  data() {
    return {
      array: [{}],

      value: "",

      items: [],

      countries: [],
    };
  },

  mounted() {
    let countries = getNames();

    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });

    if (this.countries.length) this.value = this.countries[0].text;
  },

  methods: {
    redirect(value) {
      window.open(value, "_blank");
    },

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

          domains: row.domains,

          website_url: row.web_pages[0],

          state_province: row["state-province"],
        };
      });
    },

    search() {
      var searchbar, filter, table, tr, td, i, txt;

      searchbar = document.getElementById("search");

      filter = searchbar.value.toUpperCase();

      table = document.getElementById("mytable");

      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];

        if (td) {
          txt = td.textContent || td.innerText;

          if (txt.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    },
  },
};
</script>