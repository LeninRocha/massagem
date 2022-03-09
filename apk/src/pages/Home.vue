<template>
    <main>
        <section class="container">
            <article class="full-banner" id='area1'>
                <img src="../assets/imagem-1.png" alt="imagem 1">
                <div class='text-full-banner'>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi commodi nihil eius impedit recusandae, ipsa ducimus nisi aut natus sint voluptas sunt perspiciatis, magni consequuntur! Corporis quibusdam deserunt expedita assumenda!</p>
                </div>
            </article>
        </section>
        <section class="container">
            <article id='oque'>
                <div class="text-left"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis veritatis culpa, aperiam illo soluta eveniet earum quasi expedita tenetur recusandae obcaecati amet aspernatur. Aliquam earum nulla reprehenderit ut. Quia?</p></div>
                <div class="img-right"><img src="../assets/imagem-2.png" alt="imagem 2"></div>
            </article>
        </section>
        <section class="container">
            <article id='massagens-terapias'>
                <div class="img-left">
                    <img id="img1" src="../assets/imagem-3.png" alt="imagem 3">
                    <img id="img2" src="../assets/imagem-3.png" alt="imagem 3">
                    <img id="img3" src="../assets/imagem-3.png" alt="imagem 3">
                    </div>
                <div class="text-right"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis veritatis culpa, aperiam illo soluta eveniet earum quasi expedita tenetur recusandae obcaecati amet aspernatur. Aliquam earum nulla reprehenderit ut. Quia?</p></div>
            </article>
        </section>
        <section class="container">
            <article id='terapeutas'>
                <div class="img-center"><img src="../assets/imagem-4.png" alt="imagem 4"></div>
                <div class="text-center"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis veritatis culpa, aperiam illo soluta eveniet earum quasi expedita tenetur recusandae obcaecati amet aspernatur. Aliquam earum nulla reprehenderit ut. Quia?</p></div>
                
            </article>
        </section>
         <section class="container">
            <article id='contatos'>
                <div class="text-center"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis veritatis culpa, aperiam illo soluta eveniet earum quasi expedita tenetur recusandae obcaecati amet aspernatur. Aliquam earum nulla reprehenderit ut. Quia?</p></div>
            </article>
        </section>
    </main>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    main{
        margin-top: 140px;
    }
    
    .full-banner{
        position: relative;
    }
    .full-banner img{
        max-width: 100%;
         box-shadow: 3px 3px 3px #3f4521;
    }
    .full-banner .text-full-banner{
        position: absolute;
        bottom: 20px;
        text-align: center;
        font-size: 20px;
    }
    #oque{
        background-color: rgba(63, 69, 33, 0.8);
        height: 850px;
         box-shadow: 3px 3px 3px #3f4521;
    }
    #oque .text-left{
        width: 50%;
        float: left;
    }
    #oque .img-right{
        width: 50%;
        float: right;
    }
    #oque .img-right img{
        float: right;
        padding: 20px;
    }
    #massagens-terapias{
        background: #3f4521;
        height: 850px;
        box-shadow: 3px 3px 3px #3f4521;
    }
    #massagens-terapias .img-left{
        width: 50%;
        float: left;
        padding: 20px;
        position: relative;

    }
    #massagens-terapias .img-left img{
        width: 300px;
        margin: 70px 70px 0 70px;
    }
    #massagens-terapias .text-right{
        width: 50%;
        float: right;
        padding: 20px;

    }
    #massagens-terapias .img-left #img1{
        position: absolute;
    }
    #massagens-terapias .img-left #img2{
        position: absolute;
        top: 220px;
        left: 200px;
    }
    #massagens-terapias .img-left #img3{
        position: absolute;
        top: 420px;
    }
    #terapeutas {
        background-color:rgb(0, 0, 0, 0.3) ;
    }
    #terapeutas .img-center img{
        padding: 20px;
        margin: 0 auto;
    }
    #terapeutas .img-center img{
        padding: 20px;
        margin: 0 auto;
    }
    @media (max-width: 700px){
            main{
        margin-top:20px;
    }
    
    .full-banner img{
        max-width: 100%;
         box-shadow: 3px 3px 3px #3f4521;
    }
    .full-banner .text-full-banner{
        position: relative;
    }
    #oque{
        background-color: #917649;
        height: 685px;
        box-shadow: 3px 3px 3px #3f4521;
    }
    #oque .text-left{
        width: 100%;
    }
    #oque .img-right{
 width: 100%;
    }
    #oque .img-right img{
        float: right;
        padding: 20px;
    }
    #massagens-terapias{
        background: #3f4521;
        height: auto;
        box-shadow: 3px 3px 3px #3f4521;
    }
    #massagens-terapias .img-left{
        width: 300px;
        float: left;
        position: relative;

    }
    #massagens-terapias .img-left img{
        width: 170px;
        margin: 0;
    }
     #massagens-terapias .img-left #img2{
        position: absolute;
        top: 140px;
        left:115px;
    }
    #massagens-terapias .img-left #img3{
        position: absolute;
        top: 260px;
    }
    #massagens-terapias .text-right{
        width: 100%;
        float: right;
        padding: 20px;

    }

    #terapeutas {
        background-color:rgb(0, 0, 0, 0.3) ;
    }
    #terapeutas .img-center img{
        padding: 20px;
        margin: 0 auto;
    }
    #terapeutas .img-center img{
        padding: 20px;
        margin: 0 auto;
    }
    }
</style>