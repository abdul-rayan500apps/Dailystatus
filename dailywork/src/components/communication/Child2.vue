/<template>
  <div></div>
</template>

<script>
export default {
name:"ChildComponent2",
data(){
    return{
        message:"who is greatest",
    }
},
methods:{
    sendmessagetoparent(){
        this.$emit("my-message",this.message);
    },
},
mounted(){
    this.sendmessagetoparent();
}
}
</script>

<style>

</style>