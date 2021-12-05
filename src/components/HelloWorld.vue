<template>
  <div class="message-box">
    <div class="basic-grid">
      <div class="profile-pic">
        <img src="./../assets/mama.jpg" alt="">
      </div>
      <div class="profileContent">
        <span class="user-color">{{ message.username }}</span>
        {{ message.timestamp }}
      </div>
    </div>
    <div class="basic-grid"></div>
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

.user-color {
  color: rgb(52, 152, 219);
  font-weight: bold;
}

.message-box {
  background: #36393f;
  color: #b9bbbe;
  margin: 1em;
  padding: 1em;
  border-radius: 3px;
}
.profile-pic {
  background: green;
  height: 64px;
}
.profile-pic img {
  width: 100%;
}
.profileContent {
  /* background: red; */
}

li {
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
