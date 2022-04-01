<template>
    <main>
        <div class="page-conteudo">
            <div class="container">
                <div class="image">
                    <div class="text-image">
                         <h3>BAMBUTERAPIA</h3>
                    </div>
                </div>
                <div class="conteudo">
                    <div class="conteudo-corrente">
                    <h4>BAMBUTERAPIA</h4>
                    <p>Desenvolvimento Individual na Bambuterapia</p>
                    <h4>A BAMBUTERAPIA</h4>
                    <p>A Massagem BambuTerapia Corporal é uma técnica de massagem feita com pequenas hastes de bambus de diferentes tamanhos que agem como um prolongamento dos dedos e seu grande diferencial é a intensidade na eliminação das gorduras corporais.</p>
                    <p>Os bambus são parecidos com rolos ou varetas que se adaptam aos contornos corporais e podem ser aplicados em todo o corpo.</p>
                    <p>“Viva essa experiência. Aprecie esse estilo de vida. Seja bem-vindo ao espaço Danrê”</p>
                    <h4>METODOLOGIA DANRÊ</h4>
                    <p><strong>o que vai acontecer na massagem?</strong></p>
                    <p>Nosso terapeuta conduzirá uma breve conversa para saber quais os seus pontos de tensão e assim, poder te proporcionar um atendimento personalizado dentro das suas necessidades.</p>
                    <p>A massagem é semelhante a relaxante, também feita sobre um futon onde o(a) terapeuta aplica manobras a fim de realizar estímulos nos pontos energéticos e nas zonas reflexas dos pés, mãos e rosto. Usaremos hastes de bambu de diferentes tamanhos para cada região do seu corpo (face, colo, barriga, costas, pernas, glúteos, pés, mão e braços) com o auxílio do óleo de amêndoa ou óleo de semente de uva (hipoalergênico). Você poderá ficar em várias posições durante a sessão (todas deitadas) sendo: decúbito dorsal (barriga para cima) e decúbito ventral (barriga para baixo).</p>
                    <h4>QUAIS OS BENEFÍCIOS?</h4>
                    <p>•	Relaxamento</p>
                    <p>•	Eliminar toxinas</p>
                    <p>•	Reduzir a celulite</p>
                    <p>•	Combater à gordura localizada</p>
                    <p>•	Combater à flacidez</p>
                    <p>•	Reduzir medidas</p>
                    </div>

                    
                </div>
                                    <div class="flex">
                        <div class="col">
                            <h4>Duvidas Frequentes</h4>
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
                        <div class="col">
                            <h4>
                                DURAÇÃO DA SESSÃO
                            </h4>
                            <p>1 hora</p>
                            <p>Obs: Reserve uma hora e meia para o atendimento total.</p>
                            <h3>INVESTIMENTO</h3>
                           <p>R$ 150,00 – Sessão única (dinheiro, pix ou débito) | R$ 160,00 – Sessão única (crédito à vista ou parcelado em até 2x)</p>
                    <p>R$ 750,00 – 5 sessões (dinheiro, pix ou débito) | R$ 800,00 (crédito à vista ou parcelado em até 4x)</p>
                            <p>R$ 2.350,00 – 10 sessões (dinheiro, pix ou débito) | R$2.600,00 (crédito à vista ou parcelado em até 4x)</p>
                            <h3>ATENDIMENTO DANRÊ</h3>
                            <p>Seu atendimento será individual e personalizado a fim de atender as suas necessidades terapêuticas. Nossos terapeutas são altamente capacitados, exclusivos e especializados na área. Dispomos de um espaço tranquilo, reservado e seguro para melhor te atender.</p>
                            <p><router-link to="/terapeutas-mulher">Terapeutas Mulher</router-link></p>
                            <p><router-link to="/terapeutas-homem">Terapeuta Homem</router-link></p>
                        </div>
                    </div>
            </div>
        </div>

    </main>
</template>
<script>
export default {
        name: "Bambuterapia"
}
</script>
<style scoped>
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
    .page-conteudo{
        padding: 130px 0 150px;
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
        text-align: left;
    }
    p{
          text-align: left;
    }
    .image{
        background-image:url('../assets/imagens_bambuterapia.jpg') ;
        background-repeat: no-repeat;
        background-size:cover ;
        height: 290px;
        display: flex;
    }
    .text-image{
    background-color: #264134;
    margin: auto;
    padding: 10px;
    width: 60%;
    text-align: justify;
    color: #fff;
    }

    @media (min-width: 700px){
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
            display: flex;
            
        }
        .col{
            padding: 10px;
            width: 50%;
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