<template>
  <div>
    <h2>Question-1</h2>
    <input
      type="text"
      id="myinput"
      @keyup="fun()"
      placeholder="search here"
      title="Type in a name"
    />
    <center>
      <table id="myTabel">
        <ul>
          <tr>
            <td>agile</td>
          </tr>
          <tr>
            <td>crm</td>
          </tr>
          <tr>
            <td>mantra</td>
          </tr>
          <tr>
            <td>technologies</td>
          </tr>
          <tr>
            <td>500apps</td>
          </tr>
          <tr>
            <td>infinity</td>
          </tr>
        </ul>
      </table>
    </center>
  </div>
</template>
<script>

export default {
  name: "QstN1",
  data() {
    return {
      array_names: [
        "agile",
        "crm",
        "mantra",
        "technologies",
        "500apps",
        "infinity",
      ],
      input: "",
      filter: "",
      table: "",
      tr: "",
      td: "",
      txtvalue: "",
    };
  },
  methods: {
    fun() {
      this.input = document.getElementById("myInput");
      this.filter = this.input.value.toUpperCase();
      this.table = document.getElementById("myTable");
      this.tr = this.table.getElementByTagName("tr");
      for (this.i = 0; this.i < this.tr.length; this.i++) {
        this.td = this.tr[this.i].getElementByTagName("td")[0];
        if (this.td) {
          this.txtvalue = this.td.textContent || this.td.innerText;
          if (this.txtvalue.toUpperCase().indexOf(this.filter) > -1) {
            this.tr[this.i].style.display = "none";
          }
        }
      }
    },
  },
};
</script>
