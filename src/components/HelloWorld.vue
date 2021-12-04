<template>
  <div class="hello">
    <p>{{ message.username }}</p>
    <p>{{ message.timestamp }}</p>
  </div>
  <br />
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
h3 {
  margin: 40px 0 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
