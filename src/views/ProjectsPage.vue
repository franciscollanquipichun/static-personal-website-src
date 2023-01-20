<template>
  <!-- Main content -->
  <div>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Hello",
            "item": "https://francisco.llanquipichun.cl"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://francisco.llanquipichun.cl/#/projects"
          }
        ]
      }
    </script>
    <section class="section">
      <nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link :to="{ name: 'home' }"> Home </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Projects</a>
          </li>
        </ul>
      </nav>
      <div class="content is-medium">
        <h1 class="title">Projects</h1>
        <p>
          In this section you will be able to learn about my experience and
          skills, and how I have applied them in specific projects.
        </p>
      </div>

      <h3 class="title is-3">My work experience</h3>
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Development engineer</strong> at
              <a href="http://www.tide.cl">TIDE S.A</a>
              <br />
              Design, development and software maintenance. Software technical
              documentation generation.
              <br />
              <small>Nov 2019 - Present</small>
            </p>
            <div class="tags">
              <span class="tag">Php</span>
              <span class="tag">Js</span>
              <span class="tag">Postgresql</span>
              <span class="tag">Codeigniter</span>
              <span class="tag">Docker</span>
              <span class="tag">AWS</span>
              <span class="tag">Express</span>
            </div>
          </div>
        </div>
      </article>

      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Software engineer</strong> at
              <a href="https://biosoft.cl">BIOSOFT Tech</a>
              <br />
              Specialist advisor in Typo3
              <abbr title="Content Manager System">CMS</abbr>, backend developer
              in <abbr title="Geographic Information System">GIS</abbr> project
              (Geonodo).
              <br />
              Minimum viable product construction for the business appointment
              system.
              <br />
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
              <strong>Full stack developer</strong> at
              <a href="http://www.ceisufro.cl">CEISUFRO</a>
              <br />
              Business web systems development built on Typo3
              <abbr title="Content Manager System">CMS</abbr>
              with workflow engine integration.
              <br />
              <small>Mar 2014 - Jan 2017</small>
            </p>
            <div class="tags">
              <span class="tag">Php</span>
              <span class="tag">Js</span>
              <span class="tag">JQuery</span>
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
              <strong>Frontend developer</strong> at
              <a href="http://www.ceisufro.cl">CEISUFRO</a>
              <br />
              Software components development to web interfaces.
              <br />
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
