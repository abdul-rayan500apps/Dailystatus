<template>
  <div id="app">
   <!-- <h1>send props child to parent</h1>-->
  
    <h2>{{tittle}}</h2> 
    <EmiT v-on:changetittle="updatetittle($event)"/>
  </div>
</template>

<script>
import EmiT from '@/components/Assignment9(25-apr)/Qst5aemit'
export default {
  name: 'App',
  components: {EmiT},
  data(){
      return{tittle:"emit(child) component"}
  },
  methods:{
updatetittle(tittle){
    this.tittle=tittle
}
  }
    
  
}
</script>

<style>