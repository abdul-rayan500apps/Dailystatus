<template>
  <div id="app">
     
       <b-table striped hover :items="users" :fields="userfields"></b-table>
        
  </div>
</template>

<script>
import usersData from '@/components/Assignment-8(20apr)/users.json'

export default {
    name:"QstN11",
  data() {
    return {
      users: usersData,
      userfields:["name","_id","email"]
    }
  },
  
}
</script>