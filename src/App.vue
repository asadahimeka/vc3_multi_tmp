<template>
  <div id="app" :class="$style.indexbg">
    <img src="./assets/img/icon-logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p :class="$style.red">PageList</p>
    <p v-for="p in pages" :class="$style.pages" :key="p">
      <a :href="`${p}.html`">{{ p }}</a>
    </p>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      pages: []
    }
  },
  created() {
    fetch('list.pages')
      .then(res => res.text())
      .then(res => {
        this.pages = res.split(',')
      })
  }
}
</script>

<style module>
.indexbg{
  background: #fff !important;
}
.red {
  color: #f00;
}
.pages {
  margin: 20px;
  font-size: 24px;
}
.pages a {
  color: #f50;
  text-decoration: underline !important;
}
</style>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
