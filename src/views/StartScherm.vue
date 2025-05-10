<!-- src/views/StartScherm.vue -->
<template>
  <div>
    <h1>Welkom bij de Gouv Dobbel App 🍻</h1>
    <button @click="start">Start</button>
  </div>
</template>

<script>
export default {
  name: "StartScherm",
  methods: {
    start() {
      this.$router.push("/biercategorieen");
    },
  },
};
</script>
