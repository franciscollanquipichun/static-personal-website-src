<template>
    <!-- Main content -->
    <div>
        <section class="section">
          <nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
            <ul>
              <li>
                  <router-link :to='{name:"home"}'>
                      Home
                  </router-link>
              </li>
              <li class="is-active"><a href="#" aria-current="page">Projects</a></li>
            </ul>
          </nav>
          
          <h3 class="title is-3">My work experience</h3>
          <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Development engineer</strong> at <a href="http://www.tide.cl">TIDE S.A</a>
                    <br>
                    Design, development and software maintenance. 
                    Software technical documentation generation.
                    <br>
                    <small>Nov 2019 - Present</small>
                  </p>
                  <div class="tags">
                      <span class="tag">Php</span>
                      <span class="tag">Js</span>
                      <span class="tag">Postgresql</span>
                      <span class="tag">Codeigniter</span>
                      <span class="tag">Docker</span>
                      <span class="tag">AWS</span>
                  </div>
                </div>
              </div>
          </article>

          <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Software engineer</strong> at <a href="https://biosoft.cl">BIOSOFT Tech</a>
                    <br>
                    Specialist advisor in Typo3 <abbr title="Content Manager System">CMS</abbr>,
                    backend developer in <abbr title="Geographic Information System">GIS</abbr> project (Geonodo).
                    <br>
                    Minimum viable product construction for the business appointment system.
                    <br>
                    <small>Feb 2017 - Sep 2019</small>
                  </p>
                  <div class="tags">
                      <span class="tag">Php</span>
                      <span class="tag">Postgresql</span>
                      <span class="tag">Postgis</span>
                      <span class="tag">Laravel</span>
                      <span class="tag">Docker</span>
                      <span class="tag">Angular</span>
                      <span class="tag">Vue</span>
                  </div>
                </div>
              </div>
          </article>

          <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Full stack developer</strong> at <a href="http://www.ceisufro.cl">CEISUFRO</a>
                    <br>
                    Business web systems development built on Typo3 <abbr title="Content Manager System">CMS</abbr>
                    with workflow engine integration.
                    <br>
                    <small>Mar 2014 - Jan 2017</small>
                  </p>
                  <div class="tags">
                      <span class="tag">Php</span>
                      <span class="tag">Js</span>
                      <span class="tag">Typo3</span>
                      <span class="tag">ProcessMaker</span>
                      <span class="tag">MySQL</span>
                  </div>
                </div>
              </div>
          </article>

          <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Frontend developer</strong> at <a href="http://www.ceisufro.cl">CEISUFRO</a>
                    <br>
                    Software components development to web interfaces.
                    <br>
                    <small>Oct 2013 - Feb 2014</small>
                  </p>
                  <div class="tags">
                      <span class="tag">HTML</span>
                      <span class="tag">CSS</span>
                      <span class="tag">Js</span>
                      <span class="tag">Typo3</span>
                      <span class="tag">Php</span>
                  </div>
                </div>
              </div>
          </article>

        </section>
    </div>
</template>