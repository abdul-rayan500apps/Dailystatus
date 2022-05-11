/<template>
  <div class="hello">
      {{msg}}
  </div>
</template>

<script>
export default {
name:"NextTick",
data(){
    return{
        msg:'one'
    }
},
mounted(){
    this.msg = 'two';

    this.$nextTick(()=>{
        this.msg = 'three'
    })
},

}
</script>

<style>

</style>