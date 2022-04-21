<template>
    <div>
        <h1>map function</h1>
        <button @click="fun()">submit</button>
        <p>{{new_arr}}</p>
    </div>
</template>
<script>


export default {
    name:"MaP",
    data(){
        return{
            new_arr:[ ]
        }
    },
    methods:{
        fun(){
            let arr = [10,20,30,40,50,60,70,80]
            this.new_arr = arr.map(num=>{
               return num/2
            })
            console.log(this.new_arr)
            document.write(this.new_arr)
            
            
          
            
            
            
        }

    }
}
</script>
