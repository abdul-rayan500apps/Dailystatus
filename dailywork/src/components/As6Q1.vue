<template>
  <div>
    <h1>Question 1</h1>

    <b-col lg="6" class="my-1">
      <b-form-group
        v-model="value"
        options="countries"
        label="Filter"
        label-for="filter-input"
        label-cols-sm="3"
        label-align-sm="right"
        label-size="sm"
        class="mb-0"
      >
        <b-input-group size="sm">
          <b-form-input
            id="filter-input"
            v-model="filter"
            type="search"
            placeholder="Type to Search"
          ></b-form-input>
          <b-input-group-append>
            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-col lg="6" class="my-1">
      <b-table striped hover :items="items"></b-table>
      <b-button variant="primary" @click="getData">Get Data</b-button>

      <p @click="redirect(value.website_url)">
        website_url:--{{ value.website_url }}
      </p>

      <b-form-group
        v-model="sortDirection"
        label="Filter On"
        description="Leave all unchecked to filter on all data"
        label-cols-sm="3"
        label-align-sm="right"
        label-size="sm"
        class="mb-0"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          v-model="filterOn"
          :aria-describedby="ariaDescribedby"
          class="mt-1"
        >
          <b-form-checkbox value="name">Name</b-form-checkbox>
          <b-form-checkbox value="age">Age</b-form-checkbox>
          <b-form-checkbox value="isActive">Active</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
    </b-col>
    <b-col sm="5" md="6" class="my-1">
      <b-form-group
        label="Per page"
        label-for="per-page-select"
        label-cols-sm="6"
        label-cols-md="4"
        label-cols-lg="3"
        label-align-sm="right"
        label-size="sm"
        class="mb-0"
      >
        <b-form-select
          id="per-page-select"
          v-model="perPage"
          :options="pageOptions"
          size="sm"
        ></b-form-select>
      </b-form-group>
    </b-col>
  </div>
</template>
<script>
const { getNames } = require("country-list");
export default {
  name: "As6Q1",
  data() {
    return {
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
  },
};
</script>