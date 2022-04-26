<template>
    <div>
        <h1>Question no2</h1>
        <form name="myform">
            <label for="" name="num1">1st number</label>
            <input type="text" name="num1" id="id1"><br>
            <label for="" name="num2">2nd number</label>
            <input type="text" name="num2" id="id2"><br>
            <button @click="mul()">multiply</button>
            <button @click="div()">divide</button>
            <h5>the result is :</h5>
            <p id="id3"></p>
        </form>
    </div>
</template>

<script>


export default {
    name:"QsTN2",
    data(){
        return{
         z:"",
        }
    },
    methods:{
        mul(){
            var x = document.getElementById("id1").value
            var y = document.getElementById("id2").value
            this.z=Number(x*y)
            document.getElementById("id3").innerHTML=this.z
            console.log(this.z);
        },
        div(){
         var x = document.getElementById("id1").value
            var y = document.getElementById("id2").value
            this.z=Number(x/y)
            document.getElementById("id3").innerHTML=this.z
            console.log(this.z)
            
        }
    }
}
</script>
