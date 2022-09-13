<script setup lang="ts">

var date1 = new Date();
var date2 = new Date("2017/02/01");
var diff = date1 - date2;
var ageDate = new Date(diff); // miliseconds from epoch
var date = Math.abs(ageDate.getUTCFullYear() - 1970);

</script>
<template>
    <div class="about">
        <div class="row">
            <div class="col-md-12">
                <h1 class="green">Sobre mim</h1>
            </div>
            <div class="col-md-12">
                <p>Olá! Eu sou o Nathan, moro em BH, tenho 23 anos, casado, trabalho com programação à {{date}} e vou
                    contar um pouquinho sobre mim. <br>
                    Meu primeiro contato com programação foi em 2014 em um curso técnico de programação, onde minha
                    paixão por programação surgiu, lá aprendi C++, Java, HTML, CSS, Jquery e PHP. <br>
                    Após a conclusão do curso em 2017, fiz um estágio e desde então estou na área. Durante esse tempo
                    desde 2017, trabalhei majoritariamente com PHP, mas também aprendi e usei linguagens como Javascript
                    e seus frameworks, como angular e ionic, também tive contato por alto com outros frameworks como
                    node e vue. Atualmente estudo Python, onde meu foco é Machine Learning e alguns framework como
                    Django e Flask. <br>Sou uma pessoa que gosto de desafios e aprender coisas novas e tenho como
                    objetivo ajudar pessoas que queiram entrar nessa área maravilhosa ou ajudar aqueles que já estão
                    nessa área a crescerem e com isso surgiu a ideia do projeto Code.php onde ajudo aqueles que querem
                    aprender o básico da programação.
                </p>
            </div>
        </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
