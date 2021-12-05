<template>
  <div class="hello">
    <div class="basic-grid">
      <div class="profilePic">Picture</div>
      <div class="profileContent">Hallo</div>
    </div>
    <div class="basic-grid">
    </div>
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
.basic-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 64px auto;
}

.hello {
  background: #36393f;
  color: #b9bbbe;
  margin: 1em;
  padding: 1em;
}
.profilePic {
  background: green;
}
.profileContent {
  background: red;
}

li {
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
