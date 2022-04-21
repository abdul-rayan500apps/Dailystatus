<template>
    <div>
        <h1>calculate saquare of every element</h1>
        <button @click="fun()">submit</button>
    </div>
</template>

<script>


export default {
    name:"ForeacH1",

data(){
    return{
        copy:[]
    }
},
methods:{
fun(){
    let items = [1,29,47];
    items.forEach(item=> {
this.copy.push(item*item)
console.log(item*item)
 document.write(item * item ,"</br>")

    })
}
}}
</script>
