<template>
  <div>
    <b-table striped hover :fields="userfields"></b-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "FetchinG",
  data() {
    return {
     
      userfields:["userId","id","title","completed"]
    };
  },
  created() {
    // Simple GET request using axios
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => this.userfields = response.fields);
  }
};
</script>
