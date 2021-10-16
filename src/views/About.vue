<template>
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
            "item": "https://francisco.llanquipichun.cl/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://francisco.llanquipichun.cl/#/about"
          }
        ]
      }
    </script>
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Francisco Llanquipichun",
        "url": "https://francisco.llanquipichun.cl",
        "jobTitle": "Software Engineer",
        "gender": "male",
        "sameAs": [
          "https://github.com/franciscollanquipichun",
          "https://stackoverflow.com/users/2736289/f-llanquipichun",
          "https://twitter.com/F_Llanquipichun",
          "https://www.linkedin.com/in/franciscollanquipichun"
        ]
      }
    </script>
    <section class="section">
      <nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link :to="{ name: 'home' }"> Home </router-link>
          </li>
          <li class="is-active"><a href="#" aria-current="page">About</a></li>
        </ul>
      </nav>
      <div class="content is-medium">
        <h1 class="title">About</h1>
        <p>
          I am <strong>software engineer</strong> specialized in developing
          <strong>web solutions</strong> and sometimes also
          <strong>mobile</strong>.
        </p>
        <p>
          Desde el año 2013 me desempeño profesionalmente como desarrollador de
          software aunque desde siempre me han apasionado las temáticas de:
          ciencia, tecnología y videojuegos 🤖.<br />
          Me encanta escribir código y resolver problemas.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h3 class="title is-3">My skills and knowledge</h3>
        <div class="content">
          <p>
            As a professional, I have acquire experience related mainly to
            <strong>web technologies</strong> like <strong>Php</strong> and
            <strong>Javascript</strong>.
          </p>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-6 is-vertical is-parent">
            <div class="tile is-child notification">
              <p class="title is-4">Languages I speak</p>
              <div class="font-code">
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="fileCodeIcon"
                  /></span>
                  HTML / CSS
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="phpIcon"
                  /></span>
                  Php
                </p>
                <p>
                  <span class="icon"><font-awesome-icon :icon="jsIcon" /></span>
                  Javascript
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="databaseIcon"
                  /></span>
                  SQL
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="markdownIcon"
                  /></span>
                  Markdown
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="terminalIcon"
                  /></span>
                  Bash
                </p>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child notification">
              <p class="title is-4">Frameworks</p>
              <div class="font-code">
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="laravelIcon"
                  /></span>
                  Laravel
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="fileCodeIcon"
                  /></span>
                  Codeigniter
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="typo3Icon"
                  /></span>
                  Typo3
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="fileCodeIcon"
                  /></span>
                  Nativescript
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="angularIcon"
                  /></span>
                  Angular
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="vueIcon"
                  /></span>
                  Vue
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="bootstrapIcon"
                  /></span>
                  Bootstrap
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="fileCodeIcon"
                  /></span>
                  Bulma
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="scrumIcon"
                  /></span>
                  Scrum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-vertical">
            <div class="tile is-child notification">
              <p class="title is-4">Databases and data science</p>
              <div class="font-code">
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="databaseIcon"
                  /></span>
                  PostgreSQL
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="postgisIcon"
                  /></span>
                  PostGIS
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="databaseIcon"
                  /></span>
                  MySQL
                </p>
              </div>
            </div>
            <div class="tile is-child notification">
              <p class="title is-4">Development tools</p>
              <div class="font-code">
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="gitIcon"
                  /></span>
                  GIT
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="dockerIcon"
                  /></span>
                  Docker
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="sonarqubeIcon"
                  /></span>
                  Sonarqube
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="postmanIcon"
                  /></span>
                  Postman
                </p>
              </div>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <div class="tile is-child notification">
              <p class="title is-4">Management and productivity tools</p>
              <div class="font-code">
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="jiraIcon"
                  /></span>
                  Jira
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="trelloIcon"
                  /></span>
                  Trello
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="notionIcon"
                  /></span>
                  Notion
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="slackIcon"
                  /></span>
                  Slack
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="googleIcon"
                  /></span>
                  Google Workspace
                </p>
              </div>
            </div>
            <div class="tile is-child notification">
              <p class="title is-4">Others</p>
              <div class="font-code">
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="linuxIcon"
                  /></span>
                  Linux OS
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="awsIcon"
                  /></span>
                  Amazon Web Services
                </p>
                <p>
                  <span class="icon"
                    ><font-awesome-icon :icon="unityIcon"
                  /></span>
                  Unity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFileCode,
  faDatabase,
  faTerminal,
  faUserAstronaut,
  faUsers,
  faCircleNotch,
  faGlobe,
  faCube,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAngular,
  faAws,
  faBootstrap,
  faDocker,
  faGitAlt,
  faGoogle,
  faJira,
  faJsSquare,
  faLaravel,
  faLinux,
  faMarkdown,
  faPhp,
  faSlack,
  faTrello,
  faTypo3,
  faUnity,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

export default {
  name: "About",
  data() {
    return {
      fileCodeIcon: faFileCode,
      databaseIcon: faDatabase,
      laravelIcon: faLaravel,
      phpIcon: faPhp,
      jsIcon: faJsSquare,
      markdownIcon: faMarkdown,
      terminalIcon: faTerminal,
      typo3Icon: faTypo3,
      angularIcon: faAngular,
      vueIcon: faVuejs,
      bootstrapIcon: faBootstrap,
      scrumIcon: faUsers,
      gitIcon: faGitAlt,
      dockerIcon: faDocker,
      sonarqubeIcon: faCircleNotch,
      postmanIcon: faUserAstronaut,
      postgisIcon: faGlobe,
      unityIcon: faUnity,
      linuxIcon: faLinux,
      jiraIcon: faJira,
      trelloIcon: faTrello,
      notionIcon: faCube,
      slackIcon: faSlack,
      googleIcon: faGoogle,
      awsIcon: faAws,
    };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
