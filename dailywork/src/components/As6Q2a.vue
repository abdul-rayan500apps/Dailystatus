<template>
  <div>
    <h1 align="center">Country List</h1>

    <b-container>
      <b-form-select v-model="value" :options="countries"></b-form-select><br />

      <b-button variant="primary" @click="getData">Search</b-button>

<b-col lg="6" class="my-1">
        <b-form-group
          label="search"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="center"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="value"
              options="countries"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>










      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>

      <b-row cols-md="7">
        <b-table
          id="my-table"
          :per-page="perPage"
          :current-page="currentPage"
          striped
          hover
          :items="items"
        >
          <b-col
            ><p>university_name: {{ value.university_name }}</p></b-col
          >

          <b-col
            ><p>domains: {{ value.domains }}</p></b-col
          >

          <p @click="redirect(value.website_url)">
            website_url: {{ value.website_url }}
          </p>

          <!-- <template slot="actions" >


<button class="btn btn-dark" @click="redirect(value.website_url)" :ref="'btn'">website_url: {{value.website_url}}</button>


</template> -->

          <b-col
            ><p>state_province: {{ value.state_province }}</p></b-col
          >
        </b-table>
      </b-row>
    </b-container>
  </div>
</template>



<script>
const { getNames } = require("country-list");

export default {
  name: "As6Q2a",

  data() {
    return {
      perPage: 50,

      currentPage: 1,

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

  rows() {
    return this.items.length;
  },
  methods: {
    redirect(value) {
      window.open(value, "_blank");
    },

    async getData() {
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
  },

  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>