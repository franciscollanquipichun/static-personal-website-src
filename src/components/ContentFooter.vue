<template>
    <footer class="footer">
        <div class="columns">
            <!-- Main content -->
            <div class="column is-two-thirds-desktop">
                <div class="content">
                    <p>© <span id="current-year">2021</span> Francisco Llanquipichun</p>
                </div>
            </div>
            <div class="column is-one-third-desktop">
                <div class="content">
                    <p>
                        <small>
                            View on <a href="https://github.com/franciscollanquipichun/franciscollanquipichun.github.io" target="_blank" rel=”noopener” title="source code">
                                GitHub <i class="fab fa-github" aria-hidden="true"></i></a><br>
                            More about <a href="https://pages.github.com/" target="_blank" rel=”noopener” title="GitHub Pages">GitHub Pages</a>
                        </small>
                    </p>
                    <a href="https://bulma.io">
                        <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'ContentFooter',
  props: {
    msg: String
  }
}
</script>
