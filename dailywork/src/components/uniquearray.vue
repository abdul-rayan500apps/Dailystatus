<template>
    <div>
        <h1>Question no 3</h1>
        <button @click="remove()">try it</button>
    </div>
</template>
<script>


export default {
    name:"UniquE",
    data() {
        return {
            array:[1,1,2,2,2,3,4,3,2],
            
        }
    },
    methods:{
        remove(){
            console.log(this.array=[...new Set(this.array)])
        }

    }
}

</script>
