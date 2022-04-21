<template>
    <div>
        <h1>filter function</h1>
        <button @click="fun()">submit</button>
    </div>
</template>
<script>


export default {
    name:"FilteR",
    data(){
        return{
result:[]
        }
    },
    

    methods:{
        fun(){
            let numbers = [1,2,3,4,5,6,7,8,9,10]
            this.result = numbers.filter(number =>number > 5)
            console.log(this.result)

        }

    }
}
</script>
