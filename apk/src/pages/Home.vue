<template>
    <main>
        <div class="espaco-danda">
            <div class="container">
                <div class="infos-espaco-danda">
                <div class="img-danda">
                    <img src="../assets/img-espaco-dandara.jpeg"/>
                </div>
                <div class="text-danda">
                    <h3>
                        Espaço Danrê<br/>
                        Terapias<br/>
                        Integrativas
                    </h3>
                </div>
                </div>

            </div>
        </div>
    </main>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .espaco-danda{
        background:
        linear-gradient(
      rgba(31,90,63,.7),rgba(31,90,63,.7)
        ),
    url('../assets/background-espaco-dandara.jpeg') no-repeat;
        background-size: cover;
    }
    .espaco-danda .infos-espaco-danda{
        background-color: #827654 ;
        padding: 70px;
        position: relative;
        top: 100px;
    }
    .espaco-danda .infos-espaco-danda img{
            width: 500px; /* width of container */
            height: 700px; /* height of container */
            object-fit: cover;
            object-position: -418px 10px;

    }
    .espaco-danda .infos-espaco-danda text-danda{


    }
</style>