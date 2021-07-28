<template>
  <div id="app">
    <header>
      <Navbar title="francisco.llanquipichun.cl" />
    </header>
    <div class="container is-max-desktop">
      <router-view />
    </div>
    <footer class="footer">
      <div class="container is-max-desktop">
        <content-footer />
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ContentFooter from "@/components/ContentFooter.vue";

export default {
  name: "App",
  components: {
    Navbar,
    ContentFooter,
  },
  created: function () {
    document.title = "Francisco Llanquipichun";
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Francisco Llanquipichun";
    },
  },
};
</script>
