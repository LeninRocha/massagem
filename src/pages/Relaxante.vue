<template>
      <main>
        <div class="page-conteudo">
            <div class="container">
                <div class="image">
                         <div class="text-image">
                         <h2>MASSAGEM  RELAXANTE</h2>
                    </div>
                </div>
                <div class="conteudo">
                    <div class="conteudo-corrente">
                    <h4>MASSAGEM RELAXANTE <br/>
                        Desenvolvimento Individual na Massagem Relaxante</h4>

                    <p>‘’É uma massagem para todas as idades que proporciona o relaxamento muscular através de manobras derivadas da massagem clássica sueca”.</p>
                    <p>“Viva essa experiência. Aprecie esse estilo de vida. Seja bem-vindo ao espaço Danrê”.</p>
                    <h4>METODOLOGIA DANRÊ</h4>
                    <p><strong>o que vai acontecer na massagem?</strong></p>
                    <p>A Massagem é feita sobre um futon, o(a) terapeuta aplica manobras por todo o corpo que visam fazer a “soltura” da musculatura. As manobras são “fortes”, amassamentos e deslizamentos são feitos em regiões específicas para provocar o relaxamento.</p>
                    <h4>QUAIS OS BENEFÍCIOS?</h4>
      
                    <div class="beneficios">
                            <div class="col">
                                <p><img src='../assets/bolinhas-txt.png'>	Ativação da Circulação Sanguínea</p>
                                <p><img src='../assets/bolinhas-txt.png'>	Relaxamento Corporal e Mental</p>
                                <p><img src='../assets/bolinhas-txt.png'>	Sensação de Bem Estar</p>
                            </div>
                            <div class="col">
                                <p><img src='../assets/bolinhas-txt.png'>Harmonização EnergéticaCorporal</p>
                                <p><img src='../assets/bolinhas-txt.png'>Alívio de Dores Musculares</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="flex">
                        <div class="col">
                            <h4>INVESTIMENTO</h4>
                            <p>R$ 120,00 – Sessão única (dinheiro, pix ou débito) | R$ 130,00 – Sessão única (crédito à vista ou parcelado em até 2x)</p>
                            <p>R$ 600,00 – 5 sessões (dinheiro, pix ou débito) | R$ 650,00 (crédito à vista ou parcelado em até 3x)</p>
                        </div>
                        <div class="col">
        <h4>DÚVIDAS FREQUENTES</h4>
                <vsa-list>
                    <vsa-item>
                        <vsa-heading>
                         <h3>Qual o tempo de duração da sessão?</h3>
                        </vsa-heading>
                        <vsa-content>
                            <p>Em média 60 minutos (1h). Recomendamos que deixe um espaço de tempo de 1h e meia para realizar a sessão. Não se preocupe com o seu compromisso posterior durante o processo. É o seu momento, nada pode te atrapalhar.</p>
                        </vsa-content>
                    </vsa-item>
                </vsa-list>
                        </div>
                                   <div class="col">
                    <h4>CONTRA INDICAÇÕES NA MASSAGEM!</h4>
                    <p>Todas as terapias possuem suas indicações e contraindicações. </p>
                    <p>Nossas massagens são contraindicadas para indivíduos com:</p>
                    <p>Contusões, pele inflamada, ferimentos, tumores, hérnia abdominal e áreas com fraturas recentes;</p>
                    <p>Se você estiver com alguma condição dérmica infecciosas, rash ou feridas abertas;</p>
                    <p>Após cirurgias recentes;</p>
                    <p>Logo após sessões de quimioterapia ou radioterapia, a menos que seja recomendado por seu médico;</p>
                    <p>Propensão a coágulos sanguíneos. Existe o risco dos coágulos se soltarem. Se você tem algum tipo de doença cardíaca verifique com seu médico se há alguma restrição para este tipo de massagem;</p>
                    <p>Mulheres grávidas devem sempre consultar o médico antes de receber massagem.</p>
                    <p>Asma aguda, cistite aguda, infecções agudas, ferimentos, doenças de pele e câncer.</p>
                    </div>
                    </div>
            </div>
        </div>

    </main>
</template>
<script>
        import {
             VsaList,
             VsaItem,
             VsaHeading,
             VsaContent
        } from 'vue-simple-accordion';
export default {
        name: "Relaxante",
            components: {
              VsaList,
              VsaItem,
              VsaHeading,
              VsaContent
            },
}
</script>
<style scoped>
    .beneficios p{
        display: flex;
        align-items: baseline;
    }
    .beneficios img{
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
    .vsa-item{
        border: 1px solid #fff;
        padding: 10px;
        margin-bottom: 10px;
        position: relative;
        color: #fff;
        transition: all 1.5s ease-out;

    }
    .vsa-item h3{
        width: 95%;
        font-size: 16px;
        text-align: left;
        cursor: pointer;
    }
   .vsa-item h3::after{
        content: '+';
        font-size: 38px;
        margin-left: 15px;
        position: absolute;
        right: 10px;
        top: 0px;
    }    
    .vsa-item--is-active  h3::after{
        content: '-';
    }
    .flex{
        background-color: rgba(38, 65, 52, .6);;
        padding: 10px;
        color: #fff;
}   
    a{
        color: #fff;
        background-color: #264134 ;
        padding: 5px;
        border-radius: 5px;
    }
    a:hover{
        color: rgb(155, 113, 56)
    }

    .conteudo{
        background-color: rgba(155, 113, 56, .8);
        padding: 10px;
        color: #Fff;
        text-align: left;
    }
    h4{
        color: #fff;
        font-size: 18px;
        text-align: center;
    }
    p{
          text-align: justify;
    }
    .image{
        background-image:url('../assets/imagens_relaxante.jpg') ;
        background-repeat: no-repeat;
        background-size:cover ;
        height: 290px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .text-image{
    margin: auto;
    text-align: justify;
    color: #fff;
    padding: 20px 20px;
    width: auto;
    background-color: rgba(38, 65, 52, .8);
    margin: 0;
    
    }

    @media (min-width: 700px){
    .vsa-item h3{
        width: auto;
        font-size: 24px;

    }
    .beneficios{
        display: flex;
    }
      .beneficios .col{
        width: 50%;
    }
    .vsa-item h3::after{
        top: -5px;
    }    
        .image{
            height: 800px;
            justify-content: flex-end;
            align-items: center;
        }
        .conteudo-corrente{
            padding: 40px;
        }
        .flex{
            padding: 40px;
            
        }
        .col{
            padding: 10px;
        }

        .text-image{
          padding: 50px 20px;
          width: auto;
          background-color: rgba(38, 65, 52, .8);
          margin: 0;
        }
        .text-image h3{
            font-size: 72px;
        }
        h4{
            font-size: 38px;
        }
     }
</style>