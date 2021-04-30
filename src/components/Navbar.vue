<template>
    <nav class="navbar is-black font-code" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://francisco.llanquipichun.cl">
                <img src="../assets/images/logo.svg" alt="&lt;/&gt;" width="56">
            </a>
        
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMainMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
          
        <div id="navbarMainMenu" class="navbar-menu">
            <div class="navbar-start">
                <router-link :to='{name:"home"}' class="navbar-item is-active">
                    Home
                </router-link>
                <router-link :to='{name:"about"}' class="navbar-item">
                    About
                </router-link>
                <router-link :to='{name:"projects"}' class="navbar-item">
                    Projects
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: String
  }
}
</script>
