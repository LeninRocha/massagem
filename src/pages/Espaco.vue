<template>
    <main>
        <div class="page-conteudo">
           
            <div class="container">
                 <h2>Nosso espaço</h2>
                <div class="card">
                    <div class="img-card">
                        <img src='../assets/espaço-1.jpeg'/>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src='../assets/espaço-2.jpeg'/>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src='../assets/espaço-3.jpeg'/>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src='../assets/espaço-4.jpeg'/>
                    </div>
                </div>
                                <div class="card">
                    <div class="img-card">
                        <img src='../assets/espaço-5.jpeg'/>
                    </div>
                </div>
                                <div class="card">
                    <div class="img-card">
                        <img src='../assets/espaço-6.jpeg'/>
                    </div>
                </div>
                                <div class="card">
                    <div class="img-card">
                        <img src='../assets/espaço-7.jpeg'/>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src='../assets/espaço-8.jpeg'/>
                    </div>
                </div>
                 <div class="card">
                    <div class="img-card">
                        <img src='../assets/espaço-9.jpeg'/>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src='../assets/espaço-10.jpeg'/>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src='../assets/espaço-11.jpeg'/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: "Espaco"
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
     @media (min-width: 700px){
        .card{
            float: left;
            width: 22%;
            margin-right: 20px;
            box-sizing: border-box;
            margin-bottom: 60px;
        }
     }
</style>