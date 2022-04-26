<template>
    <div>
        <h1>if else statement</h1>
        <h1>check if the number is positive or negative/zero</h1>
        <button @click="fun()">click it</button>
    </div>
</template>
<script>


export default {
    name:"IfelsE",
    data(){
        return{

        }
    },
    methods:{
fun(){
    const number = prompt("enter a number")
if(number > 0){
    console.log("the number is positive")
}
else{
    console.log("the number is either a negative or 0")
}
}
    }
}
</script>
