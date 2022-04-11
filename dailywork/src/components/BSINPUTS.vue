<template>
    <div class="form-group">
        
        <label for="usr">Name:</label>
        <input type="text" class="form-control" id="usr">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd">
        <label for="comment">comment:</label>
        <textarea class="form-control" rows="5" id="comment"></textarea>
        <b-button @click="fun()">submmit</b-button>
    </div>
</template>

<script>


export default{
    name:"BsInputs",
   
    methods: {
         fun() {
             document.getElementById("usr").value
             document.getElementById("pwd").value

        
       document.write((document.getElementById("usr").value)),
       document.write((document.getElementById("pwd").value))
      
/////////////not getting correct output//////////////
       
       



       }

}
}



</script>
