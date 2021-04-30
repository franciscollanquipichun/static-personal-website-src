<template>
  <div id="app">
    <header>
      <Navbar title="francisco.llanquipichun.cl"/>
    </header>
    <router-view/>
    <content-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ContentFooter from '@/components/ContentFooter.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ContentFooter
  }
}
</script>
