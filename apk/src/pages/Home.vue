<template>
    <main>
      <div class="section-one">
        <div class="container">
            <div class="infos-section-one">
              <div class="img-section-one">
                <img src="../assets/img-espaco-dandara.jpg"/>
            </div>
            <div class="text-section-one">
              <h3>Danrê</h3>
              <h4>Terapias Integrativas</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="section-two">
        <div class="container">
          <div class="images-section-two">
            <img class="img-1"  src="../assets/img-section-two-1.jpg" alt="img-section-two-1"/>
            <img class="img-2"  src="../assets/img-section-two-2.jpg" alt="img-section-two-2"/>
          </div>
          <div class="text-section-two">
            <h3> O que é massagem tântrica?</h3>
            <p>A Massagem tântrica é uma terapia holística desenvolvida a partir da filosofia Tantra que, por sua vez, originou-se a cerca de 5 mil anos na região da Caxemira, próxima de onde hoje fica a China, Paquistão e Índia.<p>
            <p>Em geral, essa terapia milenar tem como finalidade despertar a energia vital de uma pessoa por meio de massagens sensitivas nos pés, pernas, mãos, costas, lingam (pênis) e yoni (vagina) entre outras partes do corpo.<p>
            <p>Alegria não é prazer, o prazer sempre deriva de outra coisa. A alegria é simplesmente ser você mesmo, estar vivo, absolutamente vibrante, vital. O sentimento de que há uma música sutil em torno do seu corpo e dentro dele, uma sinfonia, isso é alegria. Você fica alegre quando o seu corpo está fluindo, quando ele é como o fluxo de um rio.</p>

          </div>
        </div>
      </div>
      <div class="section-tree">
        <div class="images-section-tree">
            
        </div>
        <div class="text-ection-tree">
            <div class="area-text">
                <h3>Quem somos</h3>
                <p>Somos um centro terapêutico que tem o Tantra como principal ferramenta para cura e transição pessoal em todos os atendimentos e práticas. Nosso espaço Tantra atende diversas modalidades, entre as principais, ministra cursos para casais e pessoas interessadas em qualidade de vida.</p>
            </div>
            
        </div>
      </div>
      <div class="section-four">
          <div class="text-section-four">
              <h3>Massagem Relaxante?</h3>
              <p>A Massagem é feita sobre um futton, o(a) terapeuta aplica um mix de modalidades de acordo com a necessidade especifica de cada cliente. Massoterapia, alongamento,
              shiatsu, havaiana e clássica sueca. As manobras são firtes, amassamentos e deslizamentos são feitos em regiões especificas
              para o relaxamento. Uma sessão mix de massagem pode ser aplicado por um(a) ou dois terapeutas.</p>
          </div>
          <div class="images-section-four">
              <img src="../assets/imagens_tantrica mulher.jpg"/>
          </div>
      </div>
      <div class="section-five">
        <div class="container">
          <div class="services-section-five">
              <h3>serviços</h3>
              <router-link to="/tantica-individual-homem">Tântrica Individual Homem</router-link>
              <router-link to="/tantica-individual-mulher">Tântrica Individual Mulher</router-link>
              <router-link to="/tantrica-casal">Tântrica Casal</router-link>
              <router-link to="/bambuterapia">Bambuterapia</router-link>              
              <router-link to="/Pedra-quente">Pedra Quente</router-link>            
              <router-link to="/relaxante">Relaxante</router-link>
              <router-link to="/terapeutica">Terapêutica DANRÊ</router-link>
              <router-link to="/ventosaterapia">Ventosaterapia</router-link>  
          </div>
          <div class="dados-section-five">
              <div class="text-section-five">
                <h3>Contantos</h3>
                <span>Endereço</span>
                <p>Avenida Jacarandá, 47, Edifício Águas Claras Center, bloco a, sala 210</p>
                <span>WhatsApp</span>  
                <p><a href="https://api.whatsapp.com/send?phone=5561992534242" target="_blank">61 99253-4242</a></p>
              </div>
          </div>
        </div>
      </div>
    </main>
</template>
<script>

export default {

}
</script>
<style scoped>
  .section-one{
    margin-top: 40px;
    background-color: #9b7138;
    padding: 120px 0 40px;
  }
  .text-section-one{
    background-color: #264134;
    width: 100%;
    padding: 20px;
    text-align: center;
    color: #fff;
  }
  .section-two .container{
    padding: 0;
  }
  .text-section-one h3{
    font-size: 32px;
  }
  .text-section-one h4{
    font-size: 18px;
  }
  .text-section-two{
    padding: 20px 0;
    text-align: center;
  }
  .section-two .images-section-two{
    background-color: #e4a74b;
  }
  .section-two .images-section-two img{
    width: 75%;
    padding: 20px;
  }
  .section-two .images-section-two img + img{
    margin-left: 25%
  }
  .text-section-two h3{
    color: #405c36;
    font-size: 32px;
  }
  .section-tree{
    background-color:#9b7138;
    padding:20px;
    text-align: center;
  }
  .section-tree .images-section-tree{
    display: none;
  }
  .section-tree .text-ection-tree{
    color: #fff;
  }
  .section-tree .text-ection-tree h3{
    color: #e4a74b;
    font-size: 32px;
  }
  .section-four{
    text-align: center;
    padding: 20px 0 0;
  }
  .section-four h3{
    color: #e4a74b;
    font-size: 32px;
  }
  .section-five{
    background-color: #9b7138;
    text-align: center;
    padding: 20px 0 120px;
    color: #fff;
    
  }
  .section-five h3{
    font-size: 32px;
    color: #e4a74b;
  }
  .section-five .text-section-five{
    padding: 20px 0 120px;
    display: flex;
    flex-direction: column;
  }
  .services-section-five{
    display: flex;
    flex-direction: column;
  }
  .services-section-five a{
    color: #fff;
  }
  .section-five .text-section-five a{
    color: #fff;
  }

  @media (min-width: 700px){  
    .img-section-one{
      width: 50%;
    }
    .img-section-one img{
      width: 100%;
    }
    .text-section-one{
      width: auto;
      position: absolute;
        right: 70px;
        top: 35%;
        background-color: #234635;
        color: #fff;
        padding: 100px 80px;
        text-align:center;
  }

    .text-section-one h3{
        font-size: 72px;
        text-align:center;
    }
    .text-section-one h4{
        font-size: 52px;
         
    }
    .section-two{
        padding: 200px 0 0 0;
        position: relative;
    }
    .section-two .container{
      display: flex;
    }
    .section-two .images-section-two{
        width: 50%;
        background-color: #e6ae60;
    }
    .section-two .images-section-two .img-1{
           width: 80%;
            position: relative;
            top: -50px;
            left: 10%;
    }
    .section-two .images-section-two .img-2{
           width: 80%;
            position: relative;
            bottom: -50px;
            left: 20px;
    }
    .section-two .text-section-two{
      width: 50%;
      padding-left: 50px;
    }
    .section-tree{
      display: flex;
      padding: 0;
      margin-top: 150px;
    }
    .section-tree .images-section-tree{
        width: 50%;
        float: left;
        background-image: url('../assets/quem-somos.jpeg');
        background-size: cover;
        filter: grayscale(100%);
        height: 800px;
        display: block;
    }
    .section-tree .text-ection-tree{
      width: 50%;
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
      width: 60%;
      padding: 10%;
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