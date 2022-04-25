<template>
    <div>
        <h1>question no1</h1>
    <b-table :items="items" :fields="fields"></b-table>

    </div>
</template>
<script>


export default {
    name:"QsT1",
    data(){
        return{
            fields:['id','name'],
            items:[{id:0,name:"agile crm",},
            {id:1,name:"mantra technologies"},
            {id:2,name:"500apps python"},
            {id:3,name:"500apps infinity"},
            ]

        }
    }
}
</script>
