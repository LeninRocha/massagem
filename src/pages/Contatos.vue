<template>
    <main>
        <div class="page-conteudo">
            <div class="container">
                <div class="conteudo">
                    <div class="como-encontrar">
                        <h3>Como nos encontrar?</h3>
                        <p>Nos encontrarmos na Avenida Jacarandá, 47, Edifício Águas Claras Center, bloco a, sala 210</p>
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="331" height="249" id="gmap_canvas" src="https://maps.google.com/maps?q=Avenida%20Jacarand%C3%A1,%2047,%20Edif%C3%ADcio%20%C3%81guas%20Claras%20Center,&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                <a href="https://123movies-to.org">123movies</a><br><a href="https://www.embedgooglemap.net"></a>
                               
                            </div>
                        </div>
                    </div>
                    <div class="contatos">
                        <h3>Contatos</h3>
                        <p>E-mail: <a href="mailto:danremassoterapia@gmail.com"><i class="fa fa-envelope"></i>danremassoterapia@gmail.com</a></p> 
                        <p>Telefone: <a href="tel:+556199534242"><i class="fa fa-phone"></i> 61 99253-4242</a></p>
                        <p>Instagram: <a href="https://www.instagram.com/danremassoterapia/" target="_blank">@danremassoterapia</a></p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: "Contatos"
}
</script>
<style scoped>
.mapouter{position:relative;text-align:right;height:249px;width:331px;}
.gmap_canvas {overflow:hidden;background:none!important;height:249px;width:331px;}
    .page-conteudo{
        padding: 130px 0 200px;
    }
    h3{
        color:#264134;
        text-align: center;
        padding: 20px 0;
        font-weight: 600;
    }
    h4{
        color:#264134;
        font-size: 20px;
        text-align: center;
    }
    a{
        color:#264134;
    }
    @media (min-width: 700px){
        .conteudo{
            display: flex;
        }
        .como-encontrar{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .contatos{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>