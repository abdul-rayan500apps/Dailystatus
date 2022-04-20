<template>
<div>
<h2>Question-9</h2>

<b-form>

<b-form-input
id = "a"
v-model = "form.name"
placeholder = "Enter name"
required></b-form-input>

<b-form-input
id ="b"
v-model ="form.email"
type = "email"
placeholder = "Enter Email"
required>
</b-form-input>
<b-form-input
id = "c"
v-model = "form.Age"
placeholder = "Enter Age"
required></b-form-input>
<b-form-input
id = "d"
v-model = "form.Contact"
placeholder = "Enter contact number"
required></b-form-input>
<button @click="display()">SAVE BUTTON</button>
</b-form>

</div>
</template>
<script>
export default{
    name:'QstN9',
data(){
    return{
    form:{name:'',email:'',Age:'',Contact:''}
    }
},
methods:{
    display(){
    document.write("name is : "+document.getElementById("a").value+"<br>"+
    "email is : "+document.getElementById("b").value+"<br>"+
    "Age is : "+document.getElementById("c").value+"<br>"+
    "Contact number is : "+document.getElementById("d").value+"<br>")
    }
}
}
</script> 