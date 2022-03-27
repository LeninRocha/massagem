<template>
    <main>
        <div class="page-conteudo">
            <div class="container">
                <div class="image">
                    <img src="../assets/imagens_bambuterapia.jpg" alt="tântrica home"/>
                </div>
                <div class="conteudo">
                    <h3>BAMBUTERAPIA</h3>
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
        name: "Bambuterapia"
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