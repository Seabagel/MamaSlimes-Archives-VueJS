<template>
  <div v-if="messages.length > 0" class="responsive">
    <img alt="logo" src="./assets/mama.jpg" />
    <h1 alt="app_name">Mama Slime Archives</h1>
    <ul>
      <li v-for="index in messages" :key="index">
        <HelloWorld :message="index" />
      </li>
    </ul>
  </div>
  <div v-if="messages.length == 0" class="responsive">
    <img
      src="https://cdn-images-1.medium.com/max/800/0*zzg_YoHtb5wXe98Z.gif"
      alt="loader-gif"
    />
  </div>
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
    async createEntryAPI(message_id, username, msgbody, timestamp, pictureURL) {
      await (
        await fetch(
          `https://mamaslimes-archives-function.azurewebsites.net/api/create_entry?message_id=${message_id}&username=${username}&msgbody=${msgbody}&timestamp=${timestamp}&pictureURL=${pictureURL}`
          // `/api/create_entry?message_id=${message_id}&username=${username}&msgbody=${msgbody}&timestamp=${timestamp}&pictureURL=${pictureURL}`
        )
      )
        .json()
        .then((res) => {
          this.messages.push(res);
        });
    },

     
    async readEntriesAPI() {
      await (await fetch(`https://mamaslimes-archives-function.azurewebsites.net/api/read_entries/`)).json().then((res) => {
      // await (await fetch(`/api/read_entries`)).json().then((res) => {
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
img[alt="logo"]{
  width: 10vw;
  min-width: 128px;
  max-width: 500px;
}
img[alt="loader-gif"] {
  width: 50vw;
  min-width: 250px;
  max-width: 500px;
}

h1[alt="app_name"] {
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
body {
  background: #0f111f;
  color: #90aeda;
}
p {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
div.responsive {
  margin: 0 auto;
  width: 50vw;
  min-width: 250px;
  max-width: 500px;
}
</style>
