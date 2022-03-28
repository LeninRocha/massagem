<template>
     <main>
        <div class="page-conteudo">
            <div class="container">
                <div class="image">
                    <img src="../assets/imagens_terapeutica.jpg" alt="tântrica home"/>
                </div>
                <div class="conteudo">
                    <h3>MASSAGEM TERAPÊUTICA DANRÊ</h3>
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
                    <h4>DURAÇÃO DA SESSÃO</h4>
                    <p>1 hora</p>
                    <p>Obs: Reserve uma hora e meia para o atendimento total.</p>
                    <h4>INVESTIMENTO</h4>
                    <p>R$ 150,00 – Sessão única (dinheiro, pix ou débito) | R$ 160,00 – Sessão única (crédito à vista ou parcelado em até 2x)</p>
                    <p>R$ 750,00 – 5 sessões (dinheiro, pix ou débito) | R$ 800,00 (crédito à vista ou parcelado em até 4x)</p>
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
        name: "Terapeutica"
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