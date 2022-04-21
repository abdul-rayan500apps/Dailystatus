<template>
    <div>
        <h1>for each example</h1>
   
    <button @click="fun()">click</button>
    </div>
</template>
<script>


export default {
    name:"ForeacH",
    data(){
        return{
    copy:[]
        }
    },


methods:{
    fun(){
        let items =[12,24,36]
        items.forEach(item=>{
            this.copy.push(item +item +2)
            console.log(item + item + 2)
            document.write(item +item + 2 ,"</br>")
        })
    
    
    }
    

}
}
</script>
