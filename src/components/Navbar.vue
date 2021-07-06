<template>
  <nav class="navbar is-black font-code" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://francisco.llanquipichun.cl">
          <img
            src="../assets/images/logo.svg"
            alt="&lt;/&gt;"
            width="56"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMainMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMainMenu" class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="{ name: 'home' }" class="navbar-item is-active">
            Home
          </router-link>
          <router-link :to="{ name: 'about' }" class="navbar-item">
            About
          </router-link>
          <router-link :to="{ name: 'projects' }" class="navbar-item">
            Projects
          </router-link>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <DarkMode
            :modes="['light', 'dark', 'system']"
            :defaultMode="'system'"
            :meta-theme-color="{ light: '#efefef', dark: '#232b32' }"
            lang="en"
          >
            <template v-slot="{ mode }">
              <span class="icon" v-show="mode === 'dark'"
                ><font-awesome-icon :icon="darkIcon"
              /></span>
              <span class="icon" v-show="mode === 'light'"
                ><font-awesome-icon :icon="lightIcon"
              /></span>
              <span class="icon" v-show="mode === 'system'"
                ><font-awesome-icon :icon="systemIcon"
              /></span>
            </template>
          </DarkMode>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSun, faMoon, faAdjust } from "@fortawesome/free-solid-svg-icons";
import { DarkMode } from "@vue-a11y/dark-mode";

export default {
  name: "Navbar",
  props: {
    title: String,
  },
  data() {
    return {
      lightIcon: faSun,
      darkIcon: faMoon,
      systemIcon: faAdjust,
    };
  },
  components: {
    FontAwesomeIcon,
    DarkMode,
  },
};
</script>

<style>
:root {
  --bg-secondary: #fafafa;
  --bg: #fff;
  --color: #363636;
  --color-secondary: #4a4a4a;
  --color-link: #3273dc;
  --box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
}
html.dark-mode {
  --bg: #15202b;
  --bg-secondary: #223140;
  --color: #ddd8ca;
  --color-secondary: whitesmoke;
  --color-link: #ffdd57;
  --box-shadow: 0 0.5em 1em -0.125em rgba(240, 240, 240, 0.1),
    0 0px 0 1px rgba(240, 240, 240, 0.02);
}
html,
.footer,
.box {
  background-color: var(--bg) !important;
  color: var(--color) !important;
}
.box {
  box-shadow: var(--box-shadow) !important;
}
.menu-list a:hover,
.notification,
.notification p,
.tag {
  background-color: var(--bg-secondary) !important;
  color: var(--color-secondary) !important;
}
.subtitle,
.title,
strong,
small,
p,
.menu-list a,
.breadcrumb .is-active a {
  color: var(--color) !important;
}
.footer a,
.breadcrumb a,
.content a {
  color: var(--color-link) !important;
}
</style>
