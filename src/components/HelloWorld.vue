<template>
  <div class="message-box">
    <div class="basic-grid">
      <div class="profile-pic">
        <img :src="pictureURL" alt="">
      </div>
      <div class="profileContent">
        <div class="profile-info">
          <span class="user-color">{{ message.username }}</span>
        {{ message.timestamp }}
        </div>
        {{ message.msgbody }}
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
  data() {
    return {
      pictureURL: "https://cdn.discordapp.com/avatars/611794676604993555/3e6186b8c488ae76a04f56ae195df4f7.webp?size=128"
    }
  }
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
  margin: 1rem;
  padding: 1.125rem;
  border-radius: 3px;
}
.profile-info {
  margin-bottom: 0.5rem;
}
.profile-pic {
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
