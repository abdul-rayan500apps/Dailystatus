<template>
<div>
</div>
</template>
<script>
var axios = require("axios").default;
export default {
name: 'fetcH',
components: {},
async mounted(){
  let response=await this.getData()
    console.log(response)
            // Hit API and fetch data through function var response = getData();
            },
methods: {
    getData(){
let response= new Promise((resolve, reject) => {         
// Using axios to fetch API URL         
axios.get("http://myjson.dit.upm.es/api/bins/fov1").then((response) => {                
 // resolve when response is received                 
 resolve(response.data);          
    }).catch((error) => {         
            // reject when error is occured                 
            reject(error);
            }); 
            });
   response.then((data) => {console.log("response", data) }).catch((err) => {console.log(err)})  
}
// let mypromise= new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve(586)
// },5000)
    
// })
}
}
</script>
