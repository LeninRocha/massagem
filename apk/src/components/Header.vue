<template>
    <header>
        <nav class="container">
            <a href="/">
                <img alt="Logo" id="logo" src="../assets/logo.png"/>
            </a>
            <img alt="Abrir menu" v-on:click="openMenu" id="menu-button" src="https://i.ibb.co/tzBD3qZ/2613915-burger-equals-menu-icon.png"/>
            <div id="menu-overlay" v-if="menuActive" v-on:click="closeMenu"></div>
            <div id="menu-items" :class="{active: menuActive}">
                <img alt="wdev" id="menu-logo" src="../assets/logo.png"/>
                <ul>
                    <li v-on:click="closeMenu"><a href="/">O que é o Tantra</a></li>
                    <li v-on:click="closeMenu"><a href="#">Massagens e Terapias</a></li>
                    <li v-on:click="closeMenu"><a href="#">Terapeutas</a></li>
                    <li v-on:click="closeMenu"><a href="#">Contatos</a></li>
                </ul>
            </div>
            <div class="social">
                <ul>
                    <li class="icon-header instagram"><a href=""><img src="../assets/insta.png" alt="Instagram"></a></li>
                    <li class="icon-header facebook"><a href=""><img src="../assets/facebook.png" alt="Facebook"></a></li>
                    <li class="icon-header"><a href=""><img src="../assets/youtube.png" alt="Youtube"></a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default{
        name: 'Header',
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
            }
        }
    }
</script>

<style scoped>
    header{
        background-color: rgba(31,90,63,.7);
        height: 120px;
        width: 100%;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        z-index: 1;
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
    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
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
        background-color: rgba(31,90,63,.7);
        width: 60%;
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
        text-align: center;
    }
    ul li{
        margin: 20px 0px;
    }
    #menu-items li a{
        color: #000;
        font-weight: 600;
        transition: 0.5s;
        padding: 10px;
        border-radius: 5px;
    }
    #menu-items li a:hover{
        background-color: #917649;
    }
    .social{
        display: none;
    }
    .social ul{
        display: flex;
    }
    .social ul li img{
        width: 40px;
    }
    .social ul li.facebook img{
        width: 30px;
    }
    .social ul li.instagram img{
        width: 36px;
    }
    @media (min-width: 700px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;
        }
        .social{
        display: block;
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
            align-items: center;
            background-color: transparent;
        }
        ul li{
            margin: 0;
            margin-left: 10px;
        }
        
    }
</style>