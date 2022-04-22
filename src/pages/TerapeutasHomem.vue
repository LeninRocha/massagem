<template>
    <main>
        <div class="page-conteudo">
           
            <div class="container">
                 <h2>Terapeutas Homem</h2>
                <div class="card">
                    <div class="img-card">
                        <img src='../assets/Patrick.jpeg' alt="terapeuta patrick"/>
                    </div>
                    <p>Patrick</p>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src='../assets/Yago.jpeg' alt="terapeuta yago"/>
                    </div>
                    <p>Yago</p>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
        name: "TerapeutasHomem"
}
</script>
<style scoped>
    h2{
        color: #fff;
        text-transform: uppercase;
        margin-bottom: 20px;
    }
    .page-conteudo{
        margin: 40px 0;
    }
    .card{
        margin-bottom: 20px;
    }
    p{
        color: #fff;
        text-align: center;
    }
     @media (min-width: 700px){
             .card{
                 float: left;
                 width: 25%;
                 margin-right: 20px;
        }
     }
</style>