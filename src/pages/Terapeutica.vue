<template>
     <main>
        <div class="page-conteudo">
            <div class="container">
                <div class="image">
                    <div class="text-image">
                         <h3>MASSAGEM <br/> TERAPÊUTICA DANRÊ</h3>
                    </div>
                </div>
                <div class="conteudo">
                    <div class="conteudo-corrente">
                    <h4>MASSAGEM TERAPÊUTICA DANRÊ</h4>
                    <p>Desenvolvimento Individual na Massagem Terapêutica </p>
                    <h4>MASSAGEM TERAPÊUTICA DANRÊ</h4>
                    <p>“É uma das técnicas exclusivas da Danrê Massoterapia e o seu diferencial está em focar nas partes do corpo que mais necessitam de tratamento. Por meio de manobras combinadas com técnicas da Massagem Clássica, Shiatsu, Reflexologia  e Alongamentos, a Terapêutica tem como principal função obter resultados na recuperação do músculos, ou seja, trabalhar em locais específicos do corpo onde existem tensões e dores”.</p>
                    <p>“Viva essa experiência. Aprecie esse estilo de vida. Seja bem-vindo ao espaço Danrê”.</p>
                    <h4>METODOLOGIA DANRÊ</h4>
                    <p><strong>o que vai acontecer na massagem?</strong></p>
                    <p>A Massagem é feita sobre um futon, o(a) terapeuta aplica manobras por todo o corpo que visam fazer a “soltura” da musculatura. As manobras são “fortes”, amassamentos e deslizamentos são feitos em regiões específicas para provocar o relaxamento.</p>                    <h4>QUAIS OS BENEFÍCIOS?</h4>
                    <h4>QUAIS OS BENEFÍCIOS?</h4>
                    <p>•	Redução de tensões musculares;</p>
                    <p>•	Aumento da sensação de bem-estar físico;</p>
                    <p>•	Melhor circulação sanguínea;</p>
                    <p>•	Maior qualidade do sono;</p>
                    <p>•	Prevenção de algumas doenças;</p>
                    <p>•	Alívio do estresse e ansiedade.</p>
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
        name: "Terapeutica"
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
        background-image:url('../assets/imagens_terapeutica.jpg') ;
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