<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
      name:"QSTn1",
    data() {
      return {
        items: [
          { productname: "amulcooldrink", price: "100rs", productcategory: 'Dairyproducts' },
          { productname: "pepsi", price: '72rs', productcategory: 'Dairyproducts' },
          { productname: "milk", price: '45rs', productcategory: 'Dairyproducts' },
          { productname: "eggs", price: '150rs', productcategory: 'Dairyproducts' }
        ]
      }
    }
  }
</script>