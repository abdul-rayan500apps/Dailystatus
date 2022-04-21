<template>
  <div>
    <b-table
      id="my-table"
      :busy.sync="isBusy"
      :items="myProvider"
      :fields="fields"
    
    ></b-table>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
      name:"ExamplE1",
    data () {
      return {
        isBusy: false,
        fields:[" "]
      }
    },
    methods: {
      myProvider () {
        // Here we don't set isBusy prop, so busy state will be
        // handled by table itself
        // this.isBusy = true
      
        let promise = axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")                      

        return promise.then((data) => {
          const items = data.items
          // Here we could override the busy state, setting isBusy to false
          // this.isBusy = false
          return(items)
        }).catch(error => {
            console.log(error)
          // Here we could override the busy state, setting isBusy to false
          // this.isBusy = false
          // Returning an empty array, allows table to correctly handle
          // internal busy state in case of error
          return []
        })
      }
    }
  }
</script>