<template>
  <img alt="logo" src="./assets/mama.jpg" />
  <h1 alt="app_name">Mama Slime Archives</h1>
  <ul>
    <li v-for="index in messages" :key="index">
      <HelloWorld :message="index" />
      <p>{{ index }}</p>
    </li>
  </ul>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
const fetch = require("node-fetch");

export default {
  name: "App",
  data() {
    return {
      messages: [],
    };
  },
  components: {
    HelloWorld,
  },
  async mounted() {
    let response = await (
      await fetch(
        "http://localhost:7071/api/create_entry?message_id=350989871411625987&username=🎭 Kamen6885&msgbody=POOR STRESS WORK POOR STRESS STOP WORK DRINK DRINK DRINK HANGOVER DRINK HANGOVER DRINK VIOLENT OUTBURST DRINK DEFAULT ON DEBTS DRINK MORTGAGE HOUSE DRINK WIFE LEAVE HIM DRINK SCLEROSIS NO FRIENDS IGNORANT MAKE HIS COUNTRY A SHITHOLE JUST STOP WORKING&timestamp=07/03/2021&pictureURL=https://cdn.discordapp.com/avatars/611794676604993555/3e6186b8c488ae76a04f56ae195df4f7.webp?size=128"
      )
    )
      .json()
      .then((res) => {
        this.messages.push(res);
        // console.log(res);
      });
    let response2 = await (
      await fetch(
        "http://localhost:7071/api/create_entry?message_id=350989871411625987&username=🎭 Pudding&msgbody=Hello World&timestamp=12/18/2021"
      )
    )
      .json()
      .then((res) => {
        this.messages.push(res);
        console.log(res);
      });
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
