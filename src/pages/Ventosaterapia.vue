<template>
        <main>
        <div class="page-conteudo">
            <div class="container">
                <div class="image">
                    <img src="../assets/imagens_terapeutica.jpg" alt="tântrica home"/>
                </div>
                <div class="conteudo">
                    <h3>VENTOSATERAPIA</h3>
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
                    <h4>DURAÇÃO DA SESSÃO</h4>
                    <p>40 minutos</p>
                    <h4>INVESTIMENTO</h4>
                    <p>R$ 130,00 – Sessão única (dinheiro, pix ou débito) | R$ 140,00 – Sessão única (crédito à vista ou parcelado em até 2x)</p>
                    <p>R$ 1.040,00 – 8 sessões (dinheiro, pix ou débito) | R$1.120,00 (crédito à vista ou parcelado em até 3x)</p>
                    <h4>DÚVIDAS FREQUENTES</h4>
                    <h4>ATENDIMENTO DANRÊ</h4>
                    <p>Seu atendimento será individual e personalizado a fim de atender as suas necessidades terapêuticas. Nossos terapeutas são altamente capacitados, exclusivos e especializados na área. Dispomos de um espaço tranquilo, reservado e seguro para melhor te atender.</p>
                     <p><router-link to="/terapeutas-mulher">Terapeutas Mulher</router-link></p>
                    <p><router-link to="/terapeutas-homem">Terapeuta Homem</router-link></p>
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
    .page-conteudo{
        padding: 130px 0 150px;
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
         .image img{
             margin: 0 auto;
         }
         p, h3, h4{
             text-align: left;
         }
     }
</style>