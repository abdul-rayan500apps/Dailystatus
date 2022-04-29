<template>
    <div>
        <h1>fetching example from vuejs doc</h1>
        {{info}}
    </div>
</template>
<script>

const axios = require('axios').default;
export default {
    name:"FetcH",
    data(){
     return{
         info:null,
         
     }
    },
    mounted(){
        axios.get('http://universities.hipolabs.com/search?country=$%7BCountryName')
        .then(response =>(this.info = response))   
        .catch(error => console.log(error))
                     
    }
}


</script>
