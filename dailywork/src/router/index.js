import vue from 'vue'
import Router from 'vue-router'
import Add from "@/components/Add.vue"
import Home from "@/components/HelloWorld.vue";
import Cookies from "@/components/cookies.vue";
import BTable from "@/components/Table.vue";
import ApiFetchData from "@/components/Apidata.vue";
import AxioS from "@/components/api2.vue";





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
    {
        path:'/api',
        name:"ApiFetchData",
        component:ApiFetchData
    },
    {
        path:'/api2',
        name:"AxioS",
        component:AxioS
    },




]
    








    let router = new Router({routes})

export default router