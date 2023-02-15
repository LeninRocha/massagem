<template>
    <footer :class="{active: footerActive}">
            <a class="open-footer"  v-on:click="openFooter"><i class="fa fa-whatsapp" ></i></a>
            <div class="container">
                <div class="footer-left">
                     <a class="close-footer"  v-on:click="closeFooter">
                    x
                    </a>
                    <a><img alt="Logo" id="logo" src="../assets/logo.png"/></a>
                    <span>Avenida Jacarandá, 47, Edifício Águas Claras Center, bloco a, sala 210</span>
                    <div class="text-foooter">
                    <p><a href="https://api.whatsapp.com/send?phone=5561992534242" target="_blank"><i class="fa fa-whatsapp" ></i>Agende Aqui!</a></p>
                    </div>
                </div>
            </div>
    </footer>
    
</template>

<script>
    export default{
        name: 'Footer',
        data(){
            return{
                footerActive: true
            }
        },
        methods:{
            openFooter: function(){
                this.footerActive = true;
            },
            closeFooter: function(){
                this.footerActive = false;
            }
        },
    }
</script>

<style scoped>
    footer{
        position: fixed;
        bottom: 20px;
        right: 0;
        justify-content: center;
    }
    footer.active .open-footer{
        display: none;
    }
     footer.active{
         background-color: #264134;
         height: 50px;
         width: 100%;
         display: flex;
         align-items: center;
         bottom: 0;
     }
    footer.active .footer-left{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .open-footer{
        color: #fff;
        font-size: 32px;
        height: 40px;
        width: 40px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #264134;
        border-radius: 50%;
        cursor: pointer;
    }
    .close-footer{
    padding: 5px;
    background: #fff;
    color: #264134;
    height: 20px;
    width: 20px;
    top: 15px;
    left: 0px;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: sans-serif;
    display: flex;

    }
    footer:hover .close-footer{
        display: flex;
    }
    .footer-left{
        display: none;
         
        color: #fff;
            justify-content: space-between;
            align-items: center;
    }
    .footer-left span{
        display: none;
    }
    .footer-left img{
        width: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .footer-right{
        display: none;
    }
    .text-foooter{

        border: 1px solid #fff;
        border-radius: 10px;
        color: #fff;
        width: auto;
    }
    .text-foooter p{
        color: #fff;
        display: flex;
        font-size: 14px;
        padding: 0 5px;

    }
    .text-foooter a{
        color: #fff;
        display: flex;
        font-size: 14px;
        align-items: center;
    }
    .text-foooter a .fa{
        font-size: 16px;
        margin-right: 5px;
    }
@media (min-width: 700px){
    .footer-left span{
        display: block;
    }
    .close-footer{
        display: none;
        left: 50px;
    }
    footer:hover .close-footer{
        display: flex;
    }
}
</style>