<template>
    <div>
        <h1>display a text</h1>
        <button @click="fun()">click on it</button>
    </div>
</template>
<script>


export default {
    name:"FunctioN",
    data(){
        return{

        }
    },
    methods:{
        fun(){
            console.log("hello there")
        }
    }
}
</script>
