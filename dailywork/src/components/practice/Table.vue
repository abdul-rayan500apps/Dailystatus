<template>
    <div>
        <b-table striped hover :items="items"></b-table>
    </div>
</template>
<script>

export default {
    name:"TablE",
    data(){
        return{
            fields:["Email","id","Name"],
            items:[
                {email:"rayan.abdul53@gmail.com",id:1,name:"abdul rayan"},
                {email:"abdul-rayan@500apps.com",id:2,name:"abdul hannan"},
                {email:"abdulrayan@yahoo.com",id:3,name:"abdul mannan"},
            ]
        }
    }
}
</script>
