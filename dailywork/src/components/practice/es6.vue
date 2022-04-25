<template>
    <div>
       
            <!-- <input type="text" name="word" id="word" placeholder="enter text"> -->
            <button @click="fun()">search</button>
        
    </div>
</template>
<script>


export default {
    name:"Es6S",
    data(){
        return{
            array:["agile","crm","mantra","technologies","500apps","infinity"],
            res:[],
        }
    },
    methods:{
        fun(){
            let res=this.array.filter(row => {
                return row.includes("a") 
            
            })
            document.write(res)
        //    let a = document.getElementById("word").value;
        //     const match = this.array.filter(row =>{
        //         if(row.includes(a)){
        //             return true;
        //         }
        //     })
        //     document.write(match)
        //     if(match!==this.array){
        //         console.log("error")
        //     }
        }

    }
}
</script>
