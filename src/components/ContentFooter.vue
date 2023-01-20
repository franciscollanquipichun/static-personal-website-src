<template>
  <div class="columns">
    <!-- Main content -->
    <div class="column is-two-thirds-desktop">
      <div class="content">
        <p>© <span id="current-year">2023</span> Francisco Llanquipichun</p>
      </div>
    </div>
    <div class="column is-one-third-desktop">
      <div class="content">
        <p>
          <small>
            View on
            <a
              href="https://github.com/franciscollanquipichun/franciscollanquipichun.github.io"
              target="_blank"
              rel="”noopener”"
              title="source code"
            >
              GitHub <font-awesome-icon :icon="githubIcon" /></a
            ><br />
            More about
            <a
              href="https://pages.github.com/"
              target="_blank"
              rel="”noopener”"
              title="GitHub Pages"
              >GitHub Pages</a
            >
          </small>
        </p>
        <a href="https://bulma.io">
          <img
            src="https://bulma.io/images/made-with-bulma.png"
            alt="Made with Bulma"
            width="128"
            height="24"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default {
  name: "ContentFooter",
  props: {
    msg: String,
  },
  data() {
    return {
      githubIcon: faGithub,
    };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
