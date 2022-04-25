<template>
    <div>
        <h1>question no 6</h1>
        <b-table :items="items" :fields="fields"></b-table>
    <b-card>
    <b-card-text>
          name :" Agile CRM" , description :" A company of excellence" 
          name:"mantra technologies", description:"500apps"  
          name:"500apps Python", description:"Backend built using python" 
          name:"500apps infinity", description:"Builtusing vue JS" 
    </b-card-text>
    </b-card>
    </div>
</template>
<script>


export default {
    name:"QsT6",
    data(){
        return{
            fields:["name","description"],
            users:[{name:"agile CRM",description:"a company of excellence"},
            {name:"mantra technologies",description:"500apps"},
            {name:"500apps python",description:"Backend built using python"},
            {name:"500apps infinity",description:"built using vue JS"}
            ]
        }
    }
}
</script>
