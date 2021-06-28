<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div style="width: 50px">
      <EllipsisToolTip refName="test" content="Hello World"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import EllipsisToolTip from "@fztj-component/ellipsistooltip";

export default {
  name: "App",
  components: {
    HelloWorld,
    EllipsisToolTip,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
