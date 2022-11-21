<script setup lang="ts">

    var date1 = new Date();
    var date2 = new Date("2017/02/01");
    var diff = date1.getTime() - date2.getTime();
    var ageDate = new Date(diff); // miliseconds from epoch
    var date = Math.abs(ageDate.getUTCFullYear() - 1970);

</script>
<template>
    <div class="row">
        <div class="col-md-12">
            <h1>Olá!</h1>
            <p>Seja bem-vindo! Meu nome é Nathan e sou Desenvolvedor PHP e Mobile à {{date}} anos.</p>
            <p class="green">Minhas principais habilidades:</p>
            <span class="tag-lang">PHP</span>
            <span class="tag-lang">Javascript</span>
            <span class="tag-lang">Python</span>
            <span class="tag-lang">Codeigniter 3/4</span>
            <span class="tag-lang">Ionic</span>
            <span class="tag-lang">Angular</span>
            <span class="tag-lang">Flask</span>
        </div>
    </div>
</template>

<style scoped>
    :root {
        --color-background: var(--vt-c-white);
        --color-background-soft: var(--vt-c-white-soft);
        --color-background-mute: var(--vt-c-white-mute);

        --color-border: var(--vt-c-divider-light-2);
        --color-border-hover: var(--vt-c-divider-light-1);

        --color-heading: var(--vt-c-text-light-1);
        --color-text: var(--vt-c-text-light-1);

        --section-gap: 160px;
    }
</style>
