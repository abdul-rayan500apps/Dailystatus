/<template>
  <div class="form-group">
      <label for="email">Your Email Address</label>
      <input type="text" id="email" class="form-control" v-model="userData.email">
      <label for="password">Enter Your password</label>
      <input type="password" id="password" class="form-control" v-model.lazy="userData.password">
      <label for="satisfaction">Satisfaction(10 for best,1 for worst)</label>
      <input type="number" max="10" min="1" id="satisfaction" class="form-control" v-model.number="userData.satisfaction">
      <label for="message">Your Message</label>
      <textarea name="blank" id="message" cols="30" rows="10" class="form-control" v-model="message"></textarea>
      <label for="sendspecial"><input type="checkbox" id="sendspecial" value="sendspecial" v-model="checkboxoptions">I want Todays special</label><br>
      <label for="sendcoupns"><input type="checkbox" id="sendcoupons" value="sendcoupns" v-model="checkboxoptions"></label>
      <label for="male"><input type="radio" id="male" value="male" v-model="radioboxoption">male</label>
      <label for="female"><input type="radio" id="female" value="female" v-model="radioboxoption">female</label><br>
      
<label for="priority" >Priority</label><select id="priority" class="form-control"
        v-model="selectedPriority">
    <option v-for="priority in priorities" :key=priority.id>{{ priority }}</option>
</select>
<custom-switch v-model="customSwitch"></custom-switch>
<button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
<div class="card" v-if="isSubmitted">
    <div class="card-body">
        <h4 class="card-title">Form Data</h4>
        <p>mail:<b>{{ userData.email }}</b></p>
        <p>password:<b>{{ userData.password }}</b></p>
        <p>satisfaction:<b>{{ userData.satisfaction }}</b></p>
        <p style="white-space: pre">Message: <b>{{ message }}</b></p>
        <p>checkboxoptions:</p>
        <ul>
            <li v-for="item in checkboxoptions" :key=item.id>{{ item }}>{{item}}</li>
        </ul>
        <p>Gender:<b>{{ radioboxoption }}</b></p>
        <p>priority:<b>{{ selectedpriority }}</b></p>
        <p>switched:<b>{{ customSwitch }}</b></p>
    </div>
</div>

  </div>
</template>

<script>
import Switch from './Switch.vue'
export default {
name:"FormS",
data(){
    return{
        userData:{email:"",password:"",satisfaction:""},
        message:"",
        checkbox:[],
        radioboxoption:"male",
        selectedpriority:"high",
        priorities:["high","medium","low"],
        customSwitch: true,
        isSubmitted:false
    }
},
components:{
customSwitch:Switch
},
methods:{
    // switched(isOn){
    //     this.$emit('input',isOn);
    // },
    submitted(){
        this.isSubmitted = true;
    }
}
}
</script>

<style>

</style>