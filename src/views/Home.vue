<template>
<div>
    <header>
        <section class="hero is-black">
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
                    <section class="hero is-white">
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
                            </router-link>
                          </div>
                        </div>
                    </section>
                </div>
                <div class="column is-half-desktop">
                    <section class="hero is-white">
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
                                <i class="fab fa-github" aria-hidden="true"></i>
                                </span>
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/2736289/f-llanquipichun" target="_blank" rel=”noopener” class="social-icon-link" title="Slideshare">
                                <span class="icon">
                                    <i class="fab fa-stack-overflow"></i>
                                </span>
                                <span>stack<strong>overflow</strong></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/F_Llanquipichun" target="_blank" rel=”noopener” class="social-icon-link" title="Twitter">
                                <span class="icon">
                                    <i class="fab fa-twitter"></i>
                                </span>
                                <span>twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/franciscollanquipichun" target="_blank" rel=”noopener” class="social-icon-link" title="LinkedIn">
                                <span class="icon">
                                    <i class="fab fa-linkedin"></i>
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