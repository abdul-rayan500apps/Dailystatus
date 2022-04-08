<template>
  <div>
    <form name="form1">
      <label for="" name="num1">enter the 1st number</label>
      <input type="text" name="num1" id="sep1" /><br />
      <label for="" name="num2">enter 2nd number</label>
      <input type="text" name="num2" id="sep2" /><br />
      <button @click="multi()">multiply</button>
      
      <button @click="div()">division</button>
      <h5>the result is :</h5>
      <p id="sap3"></p>
    </form>
  </div>
</template>
<script>
export default {
  name: "PracticE",
  data() {
    return {
      z: "",
    };
  },
  methods: {
    multi() {
      var x = document.getElementById("sap1").value;
      var y = document.getElementById("sap2").value;
      var z = Number(x * y);
      document.getElementById("sap3").innerhtml = z;
      console.log(z);
    },
    div() {
      var x = document.getElementById("sap1").value;
      var y = document.getElementById("sap2").value;
      var z = Number(x / y);
      document.getElementById("sap3").innerHTML = z;
      console.log(z);
    },
  },
};
</script>
