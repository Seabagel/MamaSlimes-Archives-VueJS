<template>
  <img alt="Vue logo" src="./assets/mama.jpg" />
  <ul>
    <li v-for="index in 10" :key="index">
      <HelloWorld
        :message="message"
      />
    </li>
  </ul>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      message: {
        username: "Pudding",
        timestamp: "07/03/2021",
        messageBody:
          "POOR STRESS WORK POOR STRESS STOP WORK DRINK DRINK DRINK HANGOVER DRINK HANGOVER DRINK VIOLENT OUTBURST DRINK DEFAULT ON DEBTS DRINK MORTGAGE HOUSE DRINK WIFE LEAVE HIM DRINK SCLEROSIS NO FRIENDS IGNORANT MAKE HIS COUNTRY A SHITHOLE JUST STOP WORKING",
        messageId: "350989871411625987-916535523525398528",
        pictureURL:
          "https://cdn.discordapp.com/avatars/178326692832477184/468f97ba206c1993a58547d9ee2fe738.webp?size=64",
      },
    };
  },
  components: {
    HelloWorld,
  },
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
ul {
  list-style-type: none;
  padding: 0;
}
</style>
