<template>
  <div id="app">
     
    <ul>
      <li v-for="user in users" :key="user.id">
         {{user.name}}
         {{user.email}}
         {{user._id}}
       </li>
    </ul>
  </div>
</template>

<script>
import usersData from '@/components/Assignment-8(20apr)/users.json'

export default {
    name:"QstN11",
  data() {
    return {
      users: usersData,
      
    };
  },
};
</script>