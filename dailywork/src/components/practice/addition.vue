<template>
    <div>
        <h1>addition of 2 numbers</h1>
        <button v-on:click="fun()">click on it</button>
        <h1>
            
        </h1>
    </div>
</template>
<script>


export default {
    name:"AdditioN",
    data(){
        return{
           a:5,
           b:6,
           c:7,
           d:11
        }
    },
    methods:{
        fun(){
         console.log(this.a+this.b)
         console.log(this.c+this.d)
        }
    }
}
</script>
