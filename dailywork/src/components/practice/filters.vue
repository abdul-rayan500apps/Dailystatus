/<template>
  <div class="filters">
      <h1>find all prime numbers in array</h1>
      <button @click="isPrime">press</button>
  </div>
  
</template>

<script>
export default {
    name:"FilterS",
    data(){
        return{

           result:[]
           }
    },
    methods:{
        isPrime(){
            let array = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
            this.result = array.filter(array => array > 5) ;
            console.log(this.result)
            
        }
        
    }
    }

</script>

<style>

</style>