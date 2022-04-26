<template>
    <div>
        <h3>Question no 3</h3>
        <b-table items="Names" :fields="fields"></b-table>
        <b-form-input id="id1" v-model="text" placeholder="Enter first name"></b-form-input> 
        <b-form-input id="id2" v-model="text" placeholder="Enter last name"></b-form-input>
        <button @click="add()">Add button</button>
        <button @click="remove()">Deletebutton</button>
    </div>
</template>
<script>


export default {
    name:"QsTN3",
    data(){
        return{
            Names:[{firstname:"Agile",lastname:"CRM"}],
            
        }
    },
    methods:{
        add(){
            this.Names.push({firstname:(document.getElementById("id1").value),lastname:(document.getElementById("id2").value)});
       },
       remove(){
           this.Names.pop()
       }
    }
}
</script>
