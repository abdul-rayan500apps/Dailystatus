/<template>
  <div></div>
</template>

<script>
export default {
name:"Component-Two",
mounted(){
    this.$root.$on("message from alexis",(msg)=>{
        
    });
}
}
</script>

<style>

</style>