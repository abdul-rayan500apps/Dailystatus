<template>
    <div>
        <h1>summ of 2 numbers</h1>
        <button @click="fun()">click on it</button>
        
     
    </div>
</template>

<script>


export default {
    name:"SuM",
    Data(){
        return{
     result:""
        }
    },
    methods:{
        fun(){
            let number1 = Number(prompt("enter first number:  "))
            let number2 = Number(prompt("enter second number: "))
            this.result = Number(number1 + number2)
            console.log(this.result)
        }
    }
}
</script>
