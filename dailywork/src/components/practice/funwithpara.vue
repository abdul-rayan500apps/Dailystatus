<template>
    <div>
        <h1>functions with parameters</h1>
        <button v-on:click="fun(name)">click on it</button>
        {{name}}
    </div>
</template>
<script>


export default {
    name:"ParameterS",
    data(){
        return{
        x:"name"

        }
    },
    methods:{
        fun(){
            this.name=prompt("enter a name:")
            console.log("hello :" + this.name + ":)");
        }
    }
}
</script>
