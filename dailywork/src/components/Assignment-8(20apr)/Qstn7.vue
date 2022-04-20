<template>
<div>
<h1>Question-7</h1>
<h2>Normal Function</h2>
<p>In Normal Function bydefault we have the one keyword that is function and any function name paranthesis and curly braces</p>
<p>Normal Function syntax :</p>
<p>function FunName( ){
    //conditions
    //statements
}</p>
<h2>Arrow Function</h2>
<p>In Arrow Function we don't have any keywrords or any function name. It looks like paranthesis Arrow Function(=>) curly braces</p>
<p>Arrow Function syntax :</p>
<p>( ) => {
    //conditions
    //statements
}</p>
<button @click="func(2);">normal function</button>
<button @click="func2(5);">Arrow function</button>
</div>
</template>
<script>
export default{
    name:'QstN7',
    data(){
        return{
            
        }
    },
    methods:{
        func(a){
            if(a%2==0){
                console.log("It is an Even Number")
            }
        },
        func2(b){
            if(b%2!=0){
                console.log("It is an odd Number")
            }
        }
        // (b)=>{
        //     if(b%2!=0){
        //         console.log("It is an odd Number")
        //     }
        // }
    }
}
</script> 