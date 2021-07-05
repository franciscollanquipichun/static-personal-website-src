<template>
<div>
    <header>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                <h2 class="subtitle">Hello,</h2>
                <h1 class="title is-1">
                    i'm <span class="text-code">Francisco Llanquipichun</span>
                </h1>
                <h2 class="subtitle is-2">
                    Software engineer/developer 👨🏻‍💻
                </h2>
                </div>
            </div>
        </section>
    </header>
    <div class="columns is-gapless">
        
        <div class="column is-two-thirds-desktop">
            <div class="columns is-gapless is-desktop">
                <!-- Main content -->
                <div class="column is-half-desktop">
                    <section class="hero">
                        <div class="hero-body">
                          <div class="container">
                            <h2 class="title">
                              About
                            </h2>
                            <p class="subtitle">
                                I am <strong>software engineer</strong> specialized in developing <strong>web solutions</strong> 
                                and sometimes also <strong>mobile</strong>.
                            </p>
                            <router-link :to='{name:"about"}' class="button is-warning">
                                <span>View skills and knowledge</span>
                                <span class="icon"><font-awesome-icon :icon="arrowRightIcon" /></span>
                            </router-link>
                          </div>
                        </div>
                    </section>
                </div>
                <div class="column is-half-desktop">
                    <section class="hero">
                        <div class="hero-body">
                          <div class="container">
                            <h2 class="title">
                              Projects
                            </h2>
                            <p class="subtitle">
                                Desde el año 2013 me desempeño profesionalmente 
                                como desarrollador de software.
                            </p>
                            <router-link :to='{name:"projects"}' class="button is-warning">
                                <span>View projects portfolio</span>
                                <span class="icon"><font-awesome-icon :icon="arrowRightIcon" /></span>
                            </router-link>
                          </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <!-- social content -->
        <div class="column is-one-third-desktop">
            <section class="section">
                <div class="container">
                    
                    <aside class="menu">
                        <h2 class="menu-label">
                            My places on internet
                        </h2>
                        <ul class="menu-list box">
                        <li>
                            <a href="https://github.com/franciscollanquipichun" target="_blank" rel=”noopener” title="github" class="is-4">
                                <span class="icon">
                                <font-awesome-icon :icon="githubIcon" />
                                </span>
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/2736289/f-llanquipichun" target="_blank" rel=”noopener” class="social-icon-link" title="Slideshare">
                                <span class="icon">
                                    <font-awesome-icon :icon="stackoverflowIcon" />
                                </span>
                                <span>stack<strong>overflow</strong></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/F_Llanquipichun" target="_blank" rel=”noopener” class="social-icon-link" title="Twitter">
                                <span class="icon">
                                    <font-awesome-icon :icon="twitterIcon" />
                                </span>
                                <span>twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/franciscollanquipichun" target="_blank" rel=”noopener” class="social-icon-link" title="LinkedIn">
                                <span class="icon">
                                    <font-awesome-icon :icon="linkedinIcon" />
                                </span>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        </ul>
                    </aside>

                </div>
            </section>
        </div>
    </div>
</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faStackOverflow, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default {
  name: "Home",
  data() {
    return {
      arrowRightIcon: faArrowRight,  
      githubIcon: faGithub,
      stackoverflowIcon: faStackOverflow,
      twitterIcon: faTwitter,
      linkedinIcon: faLinkedin,
    };
  },
  components: {
    FontAwesomeIcon
  }
};
</script>
