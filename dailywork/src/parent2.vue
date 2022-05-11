/<template>
  <div class="parentcomponent2">
<ChildComponent2 @my-message="captureMymessage"/>
abdul once said '{{ name }}'

  </div>
</template>

<script>

import ChildComponent2 from '@/components/communication/Child2'
export default {
    name:"ParentComponent2",
    components:{
        
        ChildComponent2


    },
    data(){
        return{
         
            name:"",
            
        }
    },
    methods:{
        captureMymessage(mess){
         console.log(mess);
        this.name = mess
        }
    }

}
</script>

<style>

</style>