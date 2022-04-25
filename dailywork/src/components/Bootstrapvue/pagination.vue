<template>
  <div>
    <b-pagination
      v-model="currentpage"
      :total-rows="rows"
      :per-page="perpage"
      :aria-controls="my - table"
    ></b-pagination>
    <p class="mt-3">current page:{{ currentpage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perpage"
      :current-page="currentpage"
    ></b-table>
  </div>
</template>



<script>
export default {
  name: "PaginatioN",
  data() {
    return {
      perpage: 4,
      currentpage: 1,
      items: [
        
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 10, first_name: "Abdul", last_name: "rayan" },
        { id: 11, first_name: "mohan", last_name: "naidu" },
        { id: 12, first_name: "rohan", last_name: "wagh" },
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>
