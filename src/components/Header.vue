<template>
    <header>
        <nav class="container">
            <a href="/">
                <img alt="Logo" id="logo" src="../assets/logo.png"/>
            </a>
            <div alt="Abrir menu" v-on:click="openMenu" id="menu-button"><i class="fa fa-bars"></i></div>
            <div id="menu-overlay" v-if="menuActive" v-on:click="closeMenu"></div>
            <div id="menu-items" :class="{active: menuActive}">
                <img alt="wdev" id="menu-logo" src="../assets/logo.png"/>
                <div class="menu-mobile">
                <vsa-list>
                  <vsa-item>
                    <vsa-heading>
                      QUEM SOMOS
                    </vsa-heading>
                    <vsa-content>
                     <ul>
                        <li v-on:click="closeMenu">
                        <router-link to="/missao">Missão</router-link>
                        </li>
                        <li v-on:click="closeMenu">
                            <router-link to="/espaco">Conheça nosso espaço </router-link>
                        </li>
                    </ul>
                    </vsa-content>
                     </vsa-item>
                    
                </vsa-list>
                <vsa-list>
                  <vsa-item>
                    <vsa-heading>
                      MASSAGENS E TERAPIAS 
                    </vsa-heading>
                    <vsa-content>
                     <ul>
                        <li v-on:click="closeMenu">
                            <router-link to="/tantica-individual-homem">Tântrica Individual<br/> Homem</router-link>
                         </li>
                        <li v-on:click="closeMenu">
                            <router-link to="/tantica-individual-mulher">Tântrica Individual<br/> Mulher</router-link>
                         </li>
                        <li v-on:click="closeMenu">
                            <router-link to="/tantrica-casal">Tântrica Casal</router-link>
                        </li>
                        <li v-on:click="closeMenu">
                            <router-link to="/bambuterapia">Bambuterapia</router-link>
                        </li>
                        <li v-on:click="closeMenu">
                            <router-link to="/Pedra-quente">Pedra Quente</router-link>
                        </li>
                        <li v-on:click="closeMenu">
                             <router-link to="/relaxante">Relaxante</router-link>
                        </li>
                        <li v-on:click="closeMenu">
                            <router-link to="/terapeutica">Terapêutica DANRÊ</router-link>
                        </li>
                        <li v-on:click="closeMenu">
                            <router-link to="/ventosaterapia">Ventosaterapia</router-link>
                        </li>
                    </ul>
                    </vsa-content>
                     </vsa-item>
                </vsa-list>
                <vsa-list>
                  <vsa-item>
                    <vsa-heading>
                      TERAPEUTAS
                    </vsa-heading>
                    <vsa-content>
                        <ul>
                            <li v-on:click="closeMenu">
                                <router-link to="/terapeutas-mulher">Terapeutas Mulher</router-link>
                            </li>
                            <li v-on:click="closeMenu">
                                <router-link to="/terapeutas-homem">Terapeuta Homem</router-link>
                            </li>
                        </ul>
                    </vsa-content>
                    </vsa-item>  
                </vsa-list>
                <vsa-list>
                  <vsa-item>
                    <vsa-heading>
                        <ul>
                        <li v-on:click="closeMenu">
                            <router-link  to="/contatos">CONTATOS</router-link>
                        </li>
                        </ul>
                    </vsa-heading>
                     </vsa-item>
                    
                </vsa-list>
                </div>
                <nav class="menu-desktop">
                    <div class="level-1">
                        <div class="title-menu">QUEM SOMOS</div>
                        <div class="level-2">
                            <ul>
                                <li v-on:click="closeMenu">
                                <router-link to="/missao">Missão</router-link>
                                </li>
                                <li v-on:click="closeMenu">
                                    <router-link to="/espaco">Conheça nosso espaço </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="level-1">
                        <div class="title-menu">MASSAGENS E TERAPIAS </div>
                        <div class="level-2">
                             <ul>
                                <li v-on:click="closeMenu">
                                    <router-link to="/tantica-individual-homem">Tântrica Individual Homem</router-link>
                                 </li>
                                <li v-on:click="closeMenu">
                                    <router-link to="/tantica-individual-mulher">Tântrica Individual Mulher</router-link>
                                 </li>
                                <li v-on:click="closeMenu">
                                    <router-link to="/tantrica-casal">Tântrica Casal</router-link>
                                </li>
                                <li v-on:click="closeMenu">
                                    <router-link to="/bambuterapia">Bambuterapia</router-link>
                                </li>
                                <li v-on:click="closeMenu">
                                    <router-link to="/Pedra-quente">Pedra Quente</router-link>
                                </li>
                                <li v-on:click="closeMenu">
                                     <router-link to="/relaxante">Relaxante</router-link>
                                </li>
                                <li v-on:click="closeMenu">
                                    <router-link to="/terapeutica">Terapêutica DANRÊ</router-link>
                                </li>
                                <li v-on:click="closeMenu">
                                    <router-link to="/ventosaterapia">Ventosaterapia</router-link>
                                </li>
                            </ul>
                            </div>
                    </div>
                    <div class="level-1">
                        <div class="title-menu">TERAPEUTAS</div>
                        <div class="level-2">

                            <ul>
                                <li v-on:click="closeMenu">
                                    <router-link to="/terapeutas-mulher">Terapeutas Mulher</router-link>
                                </li>
                                <li v-on:click="closeMenu">
                                    <router-link to="/terapeutas-homem">Terapeuta Homem</router-link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="level-1">
                        <div class="title-menu"><router-link to="/contatos">CONTATOS</router-link></div>
                    </div>

                </nav>
                <div>
                    <div class="social-mobile">
                        <ul>
                            <li><a href="https://www.instagram.com/danremassoterapia/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=5561992534242" target="_blank"><i class="fa fa-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="social">
                <ul>
                    <li><a href="https://www.instagram.com/danremassoterapia/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=5561992534242" target="_blank"><i class="fa fa-whatsapp"></i></a></li> 
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    import {
      VsaList,
      VsaItem,
      VsaHeading,
      VsaContent
    } from 'vue-simple-accordion';
    //import 'vue-simple-accordion/dist/vue-simple-accordion.css';
    export default{
        name: 'Header',
          components: {
              VsaList,
              VsaItem,
              VsaHeading,
              VsaContent
            },
        data(){
            return{
                menuActive: false
            }
        },
        methods:{
            openMenu: function(){
                this.menuActive = true;
            },
            closeMenu: function(){
                this.menuActive = false;
                window.scrollTo(0, 0)
            }
        },
    }
</script>

<style scoped>
    header{
        background-color: #264134;
        height: 120px;
        width: 100%;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        z-index: 1;
        align-items: center;
        box-shadow: 3px 3px 3px #264134;
    }
    nav{
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }
    #logo{
        width: 100px;
    }
    #menu-button{
        width: 30px;
    }
    #menu-button .fa{
        color: #fff;
        font-size: 32px;
    }
    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 30%;
        height: 100vh;
        background: #000;
        opacity: 0.8;
    }
    #menu-logo{
        width: 110px;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: #264134;
        width: 70%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    #menu-items.active{
        display: flex;
    }
    ul{
        list-style: none;
        text-align: left;
    }
    ul li a{
        margin: 20px 0px;
        color: #fff;
        line-height: 32px;
    }

    .social{
        display: none;
    }
    .social ul{
        display: flex;
    }
    .social ul li .fa{
        font-size: 36px;
    }
    .social ul li.facebook img{
        width: 30px;
    }
    .social ul li.instagram img{
        width: 36px;
    }
    .vsa-list{
        min-width: 100%;
        background-color: transparent;
    }
    .vsa-item{
        padding: 10px 0;
    }
    .vsa-item__trigger{
        color: #fff !important;
        background: transparent !important;
    }
    .vsa-item__trigger:hover{
        background-color: transparent;
        color: #fff;
    }
    .vsa-item__trigger__content{
        background-color: transparent;
        color: red;
    }
    .vsa-item__heading{
        padding: 20px 0;
    }
    .menu{
        padding: 20px 0;
        
    }
    .vsa-item__trigger__content p{
        color: #fff;
    }
    .social-mobile ul {
        display: flex;
    }
       .social-mobile ul .fa{
        font-size: 32px;
        padding: 10px;
    }
    .level-1 a{
        color: #fff;
        padding: 5px 10px;
    }
    .level-1{
        color: #fff;
        padding: 5px 10px;
        cursor: pointer;
        position: relative;
    }
    .level-1:hover .title-menu{
        border-bottom: 1px solid #e6ae60;
    }

    .level-1 .level-2{
        display: none;
        width: 265px;
        position: absolute;
        height: 270px;
        padding: 10px;
        background-color: rgba(38, 65, 52, .6) ;
        box-shadow: 3px 3px 3px rgba(38, 65, 52, .6);

    }
    .level-1 .level-2 ul{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .level-1 .level-2 ul a{
        color: #fff;
    }
     .level-1 .level-2 ul a:hover{
        color: #e6ae60;
    }
    .level-1:hover .level-2{
        display: flex;
    }
    .menu-desktop{
        display: none;
    }
    .menu-mobile a{
        color: #fff;
    }
    .menu-mobile p{
        padding: 0;
    }
    .menu-mobile{
        max-height: 400px;
        overflow: scroll;
        height: 400px;
        padding: 20px;
    }
    .vsa-item__content ul{
    margin-left: 20px;
  }
    @media (min-width: 700px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;

        }
        .menu-desktop{
            display: flex;
        }
        .social{
        display: flex;
        }
        #menu-items{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
            background-color: transparent;
        }
        ul{
            display: flex;
            height: 60px;
            align-items: left;
            background-color: transparent;
        }
        ul li{
            margin: 0;
            margin-left: 10px;
        }
        .menu-mobile{
            display: none;
        }
        .social-mobile{
            display: none;
        }
        
    }
</style>