<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <TesT v-bind:header="header"/>
    <TesT2 v-bind:header="header"/> -->
  </div>
</template>
<script>
// import TesT from './components/communication/Test.vue';
// import TesT2 from './components/communication/Test2.vue';
export default {
  name: 'ParentComponenet3',
  components: {
    // TesT, TesT2
  },
  data (){
    return {
      header:'initial header'
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>