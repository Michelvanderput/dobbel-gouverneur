<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  padding: 10px 20px;
  background-color: #eee;
  border-radius: 8px;
  cursor: pointer;
}

h3 {
  margin: 0;
  font-size: 1.2em;
}
</style>
