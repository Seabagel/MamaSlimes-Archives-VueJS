<template>
  <img alt="logo" src="./assets/mama.jpg" />
  <h1 alt="app_name">Mama Slime Archives</h1>
  <ul>
    <li v-for="index in messages" :key="index">
      <HelloWorld :message="index" />
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
  methods: {
    async createEntryAPI(
      message_id,
      username,
      msgbody,
      timestamp,
      pictureURL
    ) {
      await (
        await fetch(
          `/api/create_entry?message_id=${message_id}&username=${username}&msgbody=${msgbody}&timestamp=${timestamp}&pictureURL=${pictureURL}`
        )
      )
        .json()
        .then((res) => {
          this.messages.push(res);
        });
    },

    async readEntriesAPI() {
      await (await fetch(`/api/read_entries`)).json().then((res) => {
        console.log(res);
        this.messages = res;
      });
    },
  },

  async mounted() {
    this.readEntriesAPI();
    // this.createEntryAPI(
    //   this.messages,
    //   350989871411625987,
    //   "Kamen6885",
    //   "POOR STRESS WORK POOR STRESS STOP WORK DRINK DRINK DRINK HANGOVER DRINK HANGOVER DRINK VIOLENT OUTBURST DRINK DEFAULT ON DEBTS DRINK MORTGAGE HOUSE DRINK WIFE LEAVE HIM DRINK SCLEROSIS NO FRIENDS IGNORANT MAKE HIS COUNTRY A SHITHOLE JUST STOP WORKING",
    //   "07/03/2021",
    //   "https://cdn.discordapp.com/avatars/611794676604993555/3e6186b8c488ae76a04f56ae195df4f7.webp?size=128"
    // );

    // this.createEntryAPI(
    //   this.messages,
    //   350989871411625987,
    //   "steamboatwillie1195",
    //   "I uh got some business to take care of real quick",
    //   "12/01/2021",
    //   "https://cdn.discordapp.com/avatars/178326692832477184/af2b67a367bdfe2473b65a04d59b630a.webp?size=128"
    // );
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
