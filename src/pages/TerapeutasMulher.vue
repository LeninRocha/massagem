<template>
    <main>
        <div class="page-conteudo">
            <h2>Terapeutas Mulher</h2>
            <div class="container">
                <div class="card">
                    <div class="img-card">
                        <img src='../assets/Mavi.jpeg'/>
                    </div>
                    <p>Mavi</p>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src='../assets/Rebeca.jpeg'/>
                    </div>
                    <p>Rebeca</p>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
        name: "TerapeutasMulher"
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