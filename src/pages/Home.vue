
<template>
    <main>
      <div class="section-one">
        <div class="container">
            <div class="infos-section-one">
            <div class="text-section-one">
              <img alt="Logo" id="logo-home" src="../assets/logo-home.png"/>
              <h2>Terapias Integrativas</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="section-two">
        <div class="container">
          <div class="info-section-two">
            <div class="text-section-two">
              <h3> O que é massagem tântrica?</h3>
              <p>A Massagem tântrica é uma terapia holística desenvolvida a partir da filosofia Tantra que, por sua vez, originou-se a cerca de 5 mil anos na região da Caxemira, próxima de onde hoje fica a China, Paquistão e Índia.<p>
              <p>Em geral, essa terapia milenar tem como finalidade despertar a energia vital de uma pessoa por meio de massagens sensitivas nos pés, pernas, mãos, costas, lingam (pênis) e yoni (vagina) entre outras partes do corpo.<p>
              <p>Alegria não é prazer, o prazer sempre deriva de outra coisa. A alegria é simplesmente ser você mesmo, estar vivo, absolutamente vibrante, vital. O sentimento de que há uma música sutil em torno do seu corpo e dentro dele, uma sinfonia, isso é alegria. Você fica alegre quando o seu corpo está fluindo, quando ele é como o fluxo de um rio.</p>

            </div>
          </div>

        </div>
      </div>
      <div class="section-tree">
        <div class="container">
        <div class="images-section-tree">
            <div class="modal">
                <h3>O seu corpo fala com você! Você sabia? </h3>
            </div>
        </div>
        <div class="text-section-tree">
                <h3>Quem somos</h3>
                <p>Somos um centro terapêutico movido pelo desafio de promover evolução pessoal, cura e ressignificação do tantra dentro da vida do indivíduo, bem como proporcionar relaxamento, bem-estar e mais qualidade de vida, através do uso das nossas técnicas.</p>
        </div>
        </div>

      </div>
      <div class="section-four">
        <div class="container">
          <div class="infos-section-four">
            <div class="text-section-four">
                <h3>Massagem Relaxante?</h3>
                <p>A Massagem é feita sobre um futton, o(a) terapeuta aplica um mix de modalidades de acordo com a necessidade especifica de cada cliente. Massoterapia, alongamento,
                shiatsu, havaiana e clássica sueca. As manobras são firtes, amassamentos e deslizamentos são feitos em regiões especificas
                para o relaxamento. Uma sessão mix de massagem pode ser aplicado por um(a) ou dois terapeutas.</p>
            </div>
          </div>
        </div>

      </div>
      <div class="section-five">
        <div class="container">
          <div class="services-section-five">
              <h3>Serviços</h3>
              <router-link to="/tantica-individual-homem">Tântrica Individual Homem</router-link>
              <router-link to="/tantica-individual-mulher">Tântrica Individual Mulher</router-link>
              <router-link to="/tantrica-casal">Tântrica Casal</router-link>
              <router-link to="/bambuterapia">Bambuterapia</router-link>              
              <router-link to="/Pedra-quente">Pedras Quentes</router-link>            
              <router-link to="/relaxante">Relaxante</router-link>
              <router-link to="/terapeutica">Terapêutica DANRÊ</router-link>
              <router-link to="/ventosaterapia">Ventosaterapia</router-link>  
          </div>
          <div class="dados-section-five">
              <div class="text-section-five">
                <h3>Contatos</h3>
                <h4>Endereço</h4>
                <p>Avenida Jacarandá, 47 <br/>
                Edifício Águas Claras Center, bloco A, sala 210 </p>
                <h4>WhatsApp</h4>  
                <p><a href="https://api.whatsapp.com/send?phone=5561992534242" target="_blank">61 99253-4242</a></p>
                <h4>E-MAIL</h4>
                <p><a href="mailto:danremassoterapia@gmail.com"><i class="fa fa-envelope"></i>danremassoterapia@gmail.com</a></p>
              </div>
          </div>
        </div>
      </div>
    </main>
</template>
<script>

</script>
<style scoped>
  .section-one{
    margin-top: 40px;

  }
  .section-one .infos-section-one{
    background-image: url('../assets/imagens_terapeutica.jpg');
    background-repeat: no-repeat;
    background-size:cover ;
    height: 290px;
    display: flex;
        justify-content: flex-end;
    align-items: center;
  }
  #logo-home{
    width: 120px;
    margin: 0 auto;
  }
  .text-section-one{
    margin: auto;
    text-align: justify;
    color: #fff;
    padding: 20px 20px;
    width: auto;
    background-color: rgba(38, 65, 52, .8);
    margin: 0 auto;
    
  }
  
  .section-two .info-section-two{
    background-image:url('../assets/imagens_tantrica homem.jpg');
        background-repeat: no-repeat;
    background-size:cover ;
    text-align: justify;
  }
  .section-two .text-section-two{
    background:linear-gradient(
        rgba(155, 113, 56, .8),rgba(155, 113, 56, .8)
      ), url('../assets/imagens_tantrica homem.jpg') ;

  }
  .text-section-one h3{
    font-size: 28px;
  }
  .text-section-one h4{
    font-size: 16px;
  }
  .text-section-two{
    padding: 35px 5px;
    text-align: justify;
    color: #fff;
  }
  .text-section-two h3{
    color: #fff;
    font-size: 26px;
    text-align: center;
  }
    .text-section-two p{
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
  .section-tree{
    text-align: justify;
  }
  .section-tree .images-section-tree{
    background-image:  url('../assets/img-section-two-1.jpg');
    background-repeat: no-repeat;
    background-size:cover ;
    height: 290px;
  }
  .images-section-tre .modal{

  }
   .section-tree .text-section-tree h3{
         color: #fff;
    font-size: 26px;
    text-align: center;
   }
  .section-tree .text-section-tree p{
        color: #fff;
    font-size: 20px;
    text-align: center;
  }
  .section-tree .text-section-tree{
    color: #fff;
    background-color: rgba(38, 65, 52, .8);
    padding: 35px 5px;
  }
  .section-tree .text-ection-tree h3{
    color: #e4a74b;
    font-size: 32px;
  }
  .section-four{
    text-align: justify;
  }
  .section-four .infos-section-four{
    background-image: url('../assets/imagens_tantrica mulher.jpg') ;
    background-repeat: no-repeat;
    background-size:cover ;
    color: #fff;
  }
  .section-four .text-section-four{
    padding: 35px 5px;
    background-color:rgba(155, 113, 56, .8) ;
  }
  .section-four h3{
    color: #fff;
    font-size: 26px;
    text-align: center;
  }
    .section-four p{
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
  .section-five{
    background-color:  rgba(155, 113, 56, .8);
    text-align: justify;
    padding: 20px 0 120px;
    color: #fff;
    
  }
  .section-five .container{
    padding: 0 30px;
  }
  .section-five h3{
    font-size: 22px;
    color: #fff;
    margin-bottom: 10px;
  }
  .section-five p{
    padding: 5px 0;
    font-size: 16px;
    text-align: justify;
  }
  .section-five .text-section-five{
    padding: 20px 0 20px;
    display: flex;
    flex-direction: column;
  }
  .section-five .text-section-five h4{
padding: 5px 0;
  }
  .services-section-five{
    display: flex;
    flex-direction: column;
  }
  
  .services-section-five a{
    color: #fff;
    padding: 5px 0;
  }
  .section-five .text-section-five a{
    color: #fff;
  }
  .fa { margin-right: 5px;}
  @media (min-width: 700px){  
    .section-tree .text-section-tree h3{
      text-align: center;
    }
    #logo-home{
      width: 300px;
      margin: 0 auto;
    }
  .section-one .infos-section-one{
    height: 650px;
    justify-content: flex-end;
    align-items: center;
  }
    .text-section-one{
    padding: 70px 40px;
    width: auto;
    background-color: rgba(38, 65, 52, .8);
    margin: 0 auto;
  }
    .section-tree .text-section-tree{
      padding: 40px !important;
    }
    .text-section-one h3{
        font-size: 72px;
        text-align:justify;
    }
    .text-section-one h4{
        font-size: 52px;
         
    }
    .section-two{
        padding:0;
        position: relative;
    }
    .section-two .container{
      display: flex;
    }
    .section-two .images-section-two{
      width: 100%;
        background-color: #e6ae60;
    }
    .section-two .text-section-two{
      width: 50%;
      float: right;
      padding: 40px;
    }
    .section-tree{
      display: flex;
      padding: 0;
    }
    .section-tree .images-section-tree{
      height: 800px;
    }
    .section-tree .text-ection-tree .area-text{
      width: 50%;
      margin: 0 auto;
      padding: 100px 0;
    }
    .section-four{
      display: flex;
      padding: 0;
    }
    .text-section-four{
      padding: 40px !important;
      width: 50%;
      float: right;
      height: 100%;
    }
    .infos-section-four{
      background-image:  url('../assets/img-section-two-1.jpg');
      background-repeat: no-repeat;
      background-size:cover ;
      height: 800px;
    }
    .images-section-four{
      width: 40%;
      height: 800px;
      background-color:#e4a74b ;
    }
    .images-section-four img{
      position: relative;
      top: 30%;
      right: 15%;
    }
    .section-five .container{
      display: flex;
    }
    .services-section-five{
      width: 50%;
    }
    .dados-section-five{
      width: 50%;
    }
    .services-section-five a{
      padding: 5px; 
      font-size: 20px;
    }
    .services-section-five a:hover{
      color: #405c36;
    }
  }
</style>