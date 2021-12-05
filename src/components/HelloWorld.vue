<template>
  <div class="hello">
    <div class="profilePic"></div>
    <div class="profileContent">Hallo</div>
    <!-- <p>{{ message.username }}</p>
    <p>{{ message.timestamp }}</p> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    message: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background: #36393f;
  color: #b9bbbe;
  margin: 1em;
  padding: 1em;
}
.profilePic {
  width: 64px;
  height: 64px;
  background: green;
}
.profileContent {
  width: fit-content;
  height: 64px;
  background: red;
}

li {
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
