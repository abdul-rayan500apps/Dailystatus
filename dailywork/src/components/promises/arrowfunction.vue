<template>
  <div class="arrow">
      <button @click="person()">press</button>
      </div>
</template>

<script>
export default {
    name:"ArroW",
    data(){
        return{
            name:"jack",
            age:"25"
        }
    },
    methods:{
       person(){
           console.log(this.name)
       }
        
    }

}
</script>

<style>

</style>