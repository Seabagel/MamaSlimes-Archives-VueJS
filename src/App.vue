<template>
  <img alt="logo" src="./assets/mama.jpg" />
  <h1 alt="app_name">Mama Slime Archives</h1>
  <ul>
    <li v-for="index in data" :key="index">
      <HelloWorld :message="index" />
      <p>{{ message }}</p>
    </li>
  </ul>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
const data = require("./data.json");
const fetch = require("node-fetch");

export default {
  name: "App",
  data() {
    return {
      data: data,
      message: {},
    };
  },
  components: {
    HelloWorld,
  },
  async mounted() {
    let response = await fetch(
      "/api/create_entry?message_id=1012093209&username=Fatcock&msgbody=Durkadurkadurk"
    );
    console.log(await response.json());
  },
};
</script>

<style>
img {
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}
h1[alt="app_name"] {
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #b9bbbe;
  margin-top: 60px;
}
body {
  background: #292b2f;
}
p {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 75vw;
  min-width: 400px;
  max-width: 600px;
  margin: 0 auto;
}
</style>
