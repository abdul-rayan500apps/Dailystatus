import vue from 'vue'
import Router from 'vue-router'
import Add from "@/components/Add.vue"
import Home from "@/components/HelloWorld.vue";
import Cookies from "@/components/cookies.vue";
import BTable from "@/components/Table.vue";





vue.use(Router)

const routes = [
    {
        path:'/',
        name:"Home",
        component:Home
    },
    {
        path:'/add',
        name:"Add",
        component:Add
    },
    {
        path:'/cookies',
        name:"cookies",
        component:Cookies
    },
    {
        path:'/table',
        name:"BTable",
        component:BTable
    },





]
    








    let router = new Router({routes})

export default router