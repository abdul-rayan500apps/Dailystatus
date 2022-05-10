<template>
  <div>
    <b-form-input
      v-model="lower"
      type="text"
      placeholder="lower"
    ></b-form-input>
    <b-form-input
      v-model="upper"
      type="text"
      placeholder="upper"
    ></b-form-input>
  </div>
</template>
<script>
export default {
  name: "QSTn2",
  data() {
    return {
      lower: "",
      upper: "",
    };
  },

  watch: {
    lower: function (val) {
      this.lower = val;
      this.upper = this.lower.toUpperCase();
    },
  },
};
</script>