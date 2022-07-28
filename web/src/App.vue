<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import "./styles/global.css";

import Header from "./components/Header.vue";

export default {
  name: "App",
  components: { Header },
};
</script>

<style >
</style>
