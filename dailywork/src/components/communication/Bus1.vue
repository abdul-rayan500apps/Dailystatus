/<template>
  <div>
      <button @click="sendmessage">
         press </button>
    
  </div>
</template>

<script>
export default {
    name:"ComponentOne",
    methods:{
        sendmessage(){
            this.$root.$emit("message-from-alex","lick rust!");
        }
    }

}
</script>

<style>

</style>