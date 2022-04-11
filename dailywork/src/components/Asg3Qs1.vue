<template>
    <div>
        <h1>insert 4 and 5 values in a given in built array</h1>
        <button @click="fun()">click here</button>
    </div>
</template>

<script>


export default {
    name:"ARRAy",
    data(){
        return {
            array:[1,2,3,7,8,6,9,10],
        }
    },
    methods:{
        fun(){
            document.write("before inserting :" + this.array + "<br>" +"<br>")
            this.array.splice(5,0,4,5)
            document.write("after inserting :"+this.array)
        }
    }
    }

</script>
