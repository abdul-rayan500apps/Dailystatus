<template>
<div id="fetch">
       <h1>{{text}}</h1>
</div>
   
</template>

<script>
import axios from 'axios';

export default{
    name:"GetRequest",
    data(){
        return{
            text:null,
        };   
    },
    mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}

</script>
