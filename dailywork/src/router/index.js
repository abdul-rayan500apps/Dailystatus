import vue from 'vue'
import Router from 'vue-router'
import Add from "@/components/Add.vue"
import Home from "@/components/HelloWorld.vue";
import Cookies from "@/components/cookies.vue";
import BTable from "@/components/Table.vue";
import ApiFetchData from "@/components/Apidata.vue";
import AxioS from "@/components/api2.vue";
import FormTags from "@/components/FormTags.vue";
import QuestioN1 from "@/components/Question1"
import QuestioN2 from "@/components/Question2";
import QuestioN6 from "@/components/Question6";
import QuestioN7 from "@/components/Question7";
import QuestioN4 from "@/components/Question4"
import QuestioN5 from "@/components/Question5"
import QuestioN3 from "@/components/Question3"
//import PracticE from '@/components/practice'
import BsInputs from "@/components/BSINPUTS";
import DropDown from "@/components/Q6";
import ARRAy from "@/components/Asg3Qs1";
import ObjecT from "@/components/Asg3Qst3";
import sampleApis from "@/components/Indiantrain";
import SearcH from "@/components/Searchfilter";
import As6Q1 from "@/components/As6Q1";
import As6Q2 from "@/components/As6Q2";
import As6Q2a from "@/components/As6Q2a";
import AS6q1 from "@/components/As6Q-1"
import AS6q2 from "@/components/As6Q-2"
import matHS from "@/components/circle"
import UniquE from "@/components/uniquearray"
import LogIN from '@/components/Login'
import RestApi from '@/components/Rest'
import GetRequest from '@/components/practice/Fetch'
//////aprl20/as-8///////////////////////
import QstN1 from '@/components/Assignment-8(20apr)/Qstn1'
import QstN2 from '@/components/Assignment-8(20apr)/Qstn2'
import QstN3 from '@/components/Assignment-8(20apr)/Qstn3'
import QstN4 from '@/components/Assignment-8(20apr)/Qstn4'
import QstN5 from '@/components/Assignment-8(20apr)/Qstn5'
import QstN6 from '@/components/Assignment-8(20apr)/Qstn6'
import QstN7 from '@/components/Assignment-8(20apr)/Qstn7'
import QstN8 from '@/components/Assignment-8(20apr)/Qstn8'
import QstN9 from '@/components/Assignment-8(20apr)/Qstn9'
import QstN10 from '@/components/Assignment-8(20apr)/Qstn10'

////practice aprl20//////////

import TablE from '@/components/practice/Table'
//////////paractice aprl 21/////////
/////bootstrap///////////////
import ExamplE1 from '@/components/Bootstrapvue/Example1'
import ForeacH from '@/components/practice/foreach'
import ForeacH1 from '@/components/practice/foreach1'
import MaP from '@/components/practice/map'
import FilteR from '@/components/practice/filterarray'

vue.use(Router)

const routes = [
    { path: '/table', name: "TablE", component: TablE },
    { path: '/example', name: "ExamplE1", component: ExamplE1 },
    { path: '/foreach', name: "ForeacH", component: ForeacH },
    { path: '/foreach1', name: "ForeacH1", component: ForeacH1 },
    { path: '/map', name: "MaP", component: MaP },
    { path: '/filter', name: "FilteR", component: FilteR },




    //////aprl20/as-8///////////////////////
    { path: '/as8q1', name: "QstN1", component: QstN1 },
    { path: '/as8q2', name: "QstN2", component: QstN2 },
    { path: '/as8q3', name: "QstN3", component: QstN3 },
    { path: '/as8q4', name: "QstN4", component: QstN4 },
    { path: '/as8q5', name: "QstN5", component: QstN5 },
    { path: '/as8q6', name: "QstN6", component: QstN6 },
    { path: '/as8q7', name: "QstN7", component: QstN7 },
    { path: '/as8q8', name: "QstN8", component: QstN8 },
    { path: '/as8q9', name: "QstN9", component: QstN9 },
    { path: '/as8q10', name: "QstN10", component: QstN10 },








    { path: '/login', name: "LogIN", component: LogIN },
    { path: '/fetch', name: "GetRequest", component: GetRequest },

    { path: '/rest', name: "RestApi", component: RestApi },

    { path: '/as6q1', name: "As6Q1", component: As6Q1 },
    ///////apr14////////
    { path: '/circle', name: "maHS", component: matHS },
    { path: '/unique', name: "UniquE", component: UniquE },

    // 13/APR/WORK/ //
    { path: '/as6q-1', name: "AS6q1", component: AS6q1 },

    { path: '/as6q-2', name: "AS6q2", component: AS6q2 },

    { path: '/as6q2a', name: "As6Q2a", component: As6Q2a },

    { path: '/as6q2', name: "As6Q2", component: As6Q2 },

    { path: '/sampleapi', name: "sampleApis", component: sampleApis },

    { path: '/search', name: "SearcH", component: SearcH },

    { path: '/', name: "Home", component: Home },

    { path: '/add', name: "Add", component: Add },

    { path: '/cookies', name: "cookies", component: Cookies },

    { path: '/table', name: "BTable", component: BTable },

    { path: '/api', name: "ApiFetchData", component: ApiFetchData },

    { path: '/api2', name: "AxioS", component: AxioS },

    { path: '/form', name: "FormTags", component: FormTags },

    { path: '/math', name: "QuestioN2", component: QuestioN2 },

    { path: '/data', name: "QuestioN7", component: QuestioN7, },

    { path: '/drop', name: "QuestioN6", component: QuestioN6, },

    { path: '/1ST', name: "QuestioN1", component: QuestioN1, },

    { path: '/4TH', name: "QuestioN4", component: QuestioN4, },

    { path: '/5TH', name: "QuestioN5", component: QuestioN5, },

    { path: '/3rd', name: "QuestioN3", component: QuestioN3, },

    { path: '/input', name: "BsInputs", component: BsInputs, },

    { path: '/list', name: "DropDown", component: DropDown },

    { path: '/asq1', name: "ARRAy", component: ARRAy },

    { path: '/asq3', name: "ObjecT", component: ObjecT }



]









let router = new Router({ routes })

export default router