<template>
        <main>
        <div class="page-conteudo">
            <div class="container">
                <div class="image">
                    <div class="text-image">
                         <h3>VENTOSATERAPIA</h3>
                    </div>
                </div>
                <div class="conteudo">
                    <div class="conteudo-corrente">
                    <h4>VENTOSATERAPIA</h4>
                    <p>Desenvolvimento Individual Terapêutico</p>
                    <h4>VENTOSATERAPIA</h4>
                    <p>“É um tratamento natural/mecânico no qual são usadas ventosas para melhorar a circulação sanguínea em locais específicos do corpo. Para isso, as ventosas criam um efeito de vácuo, que suga a pele, resultando em um aumento do diâmetro dos vasos sanguíneos no exato local. Como resultado, existe uma maior oxigenação destes tecidos, permitindo a liberação de toxinas do sangue e do músculo com mais facilidade,enquanto que fisiologicamente ativa o sistema imunológico e estimula as fibras mecanossensíveis, levando a uma redução da dor.”.</p>
                    <p>“Viva essa experiência. Aprecie esse estilo de vida. Seja bem-vindo ao espaço Danrê”.</p>
                    <h4>METODOLOGIA DANRÊ</h4>
                    <p><strong>o que vai acontecer na massagem?</strong></p>
                    <p>Nosso terapeuta conduzirá um breve diálogo para entender a sua necessidade, verificar os pontos de tensão e assim poder iniciar a melhor conduta para o seu caso.</p>                    
                    <p>Posicionaremos você de decúbito dorsal (barriga para baixo) sob o futon. Para o tratamento com ventosas manipularemos a área descoberta, iremos aplicar um óleo de amêndoa ou de semente de uva (sua preferência; o óleo de semente de uva é hipoalergênico) na pele para permitir que as ventosas deslizem na mesma. A seguir, posicionaremos as ventosas na área de tratamento e com a pistola de sucção iniciaremos o processo de sorver (sugar) a região provocando um vácuo. Usamos um copo de silicone específico para essa prática e uma pistola de sucção.</p>
                    <h4>QUAIS OS BENEFÍCIOS?</h4>
                    <p>•	Aumento da circulação sanguínea local;</p>
                    <p>•	Eliminação de contraturas musculares e pontos gatilho;</p>
                    <p>•	Fortalece os vasos sanguíneos;</p>
                    <p>•	Aumentar a produção de líquido sinovial dentro das articulações;</p>
                    <p>•	Relaxar e acalmar o corpo e a mente.</p>
                    <p>•	Alívio de dores locais.</p>
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
                            <p>40 minutos</p>
                            <h3>INVESTIMENTO</h3>
                             <p>R$ 130,00 – Sessão única (dinheiro, pix ou débito) | R$ 140,00 – Sessão única (crédito à vista ou parcelado em até 2x)</p>
                            <p>R$ 1.040,00 – 8 sessões (dinheiro, pix ou débito) | R$1.120,00 (crédito à vista ou parcelado em até 3x)</p>
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
        name: "Ventosaterapia"
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