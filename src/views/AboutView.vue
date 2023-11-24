<script setup lang="ts">

var date1 = new Date();
var date2 = new Date("2017/02/01");
var diff = date1.getTime() - date2.getTime();
var ageDate = new Date(diff); // miliseconds from epoch
var date = Math.abs(ageDate.getUTCFullYear() - 1970);

</script>
<template>
    <div class="row justify-content-center w-100">
        <div class="col-md-12">
            <h1 class="green text-center mb-4">Sobre mim</h1>
        </div>
        <div class="col-md-12"></div>
        <div class="col-md-6">
            <p>
                Olá, sou o Nathan, residente em BH, e aos 23 anos, casado, venho compartilhar um pouco da minha jornada na programação. <br><br>
                Minha trajetória começou em 2014, durante um curso técnico que despertou minha paixão por programação. Ali, mergulhei em linguagens como C++, Java, HTML, CSS, Jquery e PHP.<br><br>
                Após concluir o curso em 2017, embarquei em um estágio que marcou o início da minha carreira na área. Desde então, tenho trabalhado principalmente com PHP, mas também explorei linguagens como Javascript, envolvendo frameworks como Angular e Ionic. Além disso, tive experiência superficial com outros frameworks como Node e Vue. Atualmente, meu foco está em Python, onde mergulho no universo do Machine Learning e exploro também frameworks como Django e Flask.<br><br>
                Gosto de encarar desafios e buscar constantemente novos conhecimentos. Tenho a meta de desenvolver sistemas com excelência e maestria, buscando constantemente elevar meu nível de habilidade. Além disso, tenho a satisfação de orientar aqueles que estão dando os primeiros passos nesse fascinante campo, bem como impulsionar o crescimento daqueles que já trilham essa jornada. Essa motivação de compartilhar conhecimento deu origem ao projeto Code.php, onde dedico meu tempo para auxiliar interessados a adquirirem as bases da programação. Estou aqui para contribuir e evoluir juntos nessa empolgante jornada.<br><br>
            </p>
        </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        display: flex;
        align-items: center;
    }
}
</style>
