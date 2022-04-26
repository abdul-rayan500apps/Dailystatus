<template>
    <div>
        <h1>check if number is positive</h1>
        <button @click="fun()">click on it</button>
    </div>
</template>
<script>


export default {
  name:"StatemenT",
  data(){
      return{

      }
  },
  methods:{
      fun(){
          const number = prompt("enter a number: ");
          if(number > 0){
              console.log("the number is positive");
          }
          console.log("the if statement is easy")
      }
  }
}
</script>
