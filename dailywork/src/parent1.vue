/<template>
  <div class="parentcomponent">
<ChildComponent :message="name" />



  </div>
</template>

<script>
import ChildComponent from '@/components/communication/child'

export default {
    name:"ParentComponent",
    components:{
        ChildComponent
       


    },
    data(){
        return{
            name:"Iam a software developer",
           
            
        }
    },
   

}
</script>

<style>

</style>