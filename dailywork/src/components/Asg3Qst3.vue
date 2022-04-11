<template>
<div >
    <b-table :items="items" :fields="fields"></b-table>
</div>
    
</template>
<script>


export default {
    name:"ObjecT",
    data(){
        return {
            fields:['name','description','location','details'],
            items:[
                {name:"agilecrm", description:"software product", location:"hyderabad",details:"product based"}
            ]

        }
    }
}
</script>
