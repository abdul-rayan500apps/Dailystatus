<template>
  <div>
    <h1>Promises</h1>

    <button @click="func()">ClickMe</button>
  </div>
</template>

<script>
export default {
    name:"TimeouT",
  data() {
    return {};
  },

  methods: {
    func() {
      const promiseA = new Promise((resolutionFunc, rejectionFunc) => {
        setTimeout(() => {
          resolutionFunc("success");
        }, 3000);

        setTimeout(() => {
          rejectionFunc();
        }, 5000);
      });

      promiseA.then((val) => console.log("asynchronous logging has val:", val));

      console.log("immediate logging");
    },
  },
};
</script>