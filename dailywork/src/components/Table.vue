<template>
  <div>
    <b-table :items="items" :fields="fields"></b-table>
  </div>
</template>
<script>
export default {
  name: "BTable",
  components: {},
  data() {
    return {
      fields: [
        { key: "name", label: "Name" },
        { key: "department", label: "Department" },
        { key: "age", label: "Age" },
        { key: "dateOfBirth", label: "Date Of Birth" },
      ],

      items: [
        {
          name: "Abdul rayan",
          department: "engineering",
          age: 24,
          dateofbirth: "01/05/1998",
        },
        {
          name: "naresh",
          department: "telecomeng",
          age: 26,
          dateofbirth: "29/03/1996",
        },
        {
          name: "rohan",
          department: "civileng",
          age: 26,
          dateofbirth: "31/01/1996",
        },
      ],
    };
  },
};
</script>
