<template>
  <div>
    <b-form id="form">
      Enter product name:<b-form-input
        id="name"
        class="name"
        placeholder="Enter item name"
      ></b-form-input>

      price:<b-form-input
        id="price"
        class="price"
        placeholder="Enter item price:"
      ></b-form-input>

      Enter product category:<b-form-input
        id="category"
        class="categories"
        placeholder="Enter item category"
      ></b-form-input>

      <b-button @click="Add()">Add</b-button><br /><br />
    </b-form>

    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "QSTn1",
  data() {
    return {
      items: [
        {
          productname: "amulcooldrink",
          price: "100rs",
          productcategory: "Dairyproducts",
        },
        {
          productname: "pepsi",
          price: "72rs",
          productcategory: "Dairyproducts",
        },
        {
          productname: "milk",
          price: "45rs",
          productcategory: "Dairyproducts",
        },
        {
          productname: "eggs",
          price: "150rs",
          productcategory: "Dairyproducts",
        },
      ],

      fields: [],
    };
  },
  methods: {
    Add() {
      this.items.push({
        productname: document.getElementById("name").value,

        price: document.getElementById("price").value,

        productcategory: document.getElementById("category").value,
      });
    },
  },
};
</script>