<template>
    <footer>
            <div class="container">
                <div class="footer-left">
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
        name: 'Footer'
    }
</script>

<style scoped>
    footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color:#264134 ;
    }
    .footer-left{
        display: flex;
        padding: 10px 0; 
        color: #fff;
            justify-content: space-between;
            align-items: center;
    }
    .footer-left span{
        display: none;
    }
    .footer-left img{
        width: 70px;
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
        padding: 5px;
    }
    .text-foooter a{
        color: #fff;
        display: flex;
        font-size: 14px;
        padding: 5px;
        align-items: center;
    }
    .text-foooter a .fa{
        font-size: 34px;
        margin-right: 5px;
    }
@media (min-width: 700px){
    .footer-left span{
        display: block;
    }
}
</style>