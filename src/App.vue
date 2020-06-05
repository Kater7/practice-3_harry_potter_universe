<template>
  <div id="app">
    <TitlePage/>
  </div>

</template>

<script>

import './scss/index.scss';
import TitlePage from "./components/TitlePage.vue";

export default {
  name: "App",
  components: {
    TitlePage
  }
};
</script>

