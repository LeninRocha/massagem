<template>
    <footer>
            <div class="container">
                <div class="footer-left">
                    <a><img alt="Logo" id="logo" src="../assets/logo.png"/></a>
                    <div class="text-foooter">
                        <p>Avenida Jacarandá, 47, edifício águas claras center, bloco a, sala 210</p>
                        <p><a href="https://api.whatsapp.com/send?phone=5561992534242" target="_blank">61 99253-4242</a></p>
                    </div>
                </div>
                <div class="footer-right">
                    <p>sociais</p>
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
         display: flex;
        justify-content: center;
        position: absolute;
        background-color: #234635;
        width: 100%;
}

    footer .footer-left{
        width: 50%;
        float: left;
        display: flex;
    }
    footer .footer-left img{
        width: 100px;
    }
    footer .footer-left .text-foooter p{
        padding: 5px;
        font-size: 16px;
    }
    footer .footer-right{
        width: 50%;
        float: right;
    }
</style>