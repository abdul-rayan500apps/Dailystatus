<template>
  <div>
    <button @cick="formatDate()">click</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "InfinitY",

  data() {
    return {
      users: [],
    };
  },

  methods: {
    formatDate(dateString) {
      let convertedDate = new Date(dateString);

      return convertedDate.toDateString();
    },

    getInitialUsers() {
      axios.get(`https://randomuser.me/api/?results=5`).then((response) => {
        this.users = response.data.results;
      });
    },

    getNextUser() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          axios.get(`https://randomuser.me/api/`).then((response) => {
            this.users.push(response.data.results[0]);
          });
        }
      };
    },
  },

  beforeMount() {
    this.getInitialUsers();
  },

  mounted() {
    this.getNextUser();
  },
};
</script>