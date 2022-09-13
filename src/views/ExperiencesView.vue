<script setup lang="ts">
import ExperienceItem from "../components/ExperienceItem.vue";
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
import ToolingIcon from "../components/icons/IconTooling.vue";
import EcosystemIcon from "../components/icons/IconEcosystem.vue";
import CommunityIcon from "../components/icons/IconCommunity.vue";
import SupportIcon from "../components/icons/IconSupport.vue";
</script>

<template>
    <main>
        <h1 class="green">Experiências</h1>
        <ExperienceItem>
            <template #icon>
                •
            </template>
            <template #heading>Why Digital • 09/2019 até Atualmente</template>
            <h6 class="green">Desenvolvedor Back-End</h6>
            Realizo desenvolvimento de sites e sistemas online usando o framework Codeigniter e também o desenvolvimento
            de aplicativos híbridos usando a tecnologia ionic, também coordeno equipes de programação em diversos
            projetos.
        </ExperienceItem>

        <ExperienceItem>
            <template #icon>
                •
            </template>
            <template #heading>Grupo TCS • 05/2019 até 09/2019</template>
            <h6 class="green">Analista de Sistemas Júnior</h6>
            Realizei manutenção em um sistema de rastreamento de peças na Fiat, baseado em node.js e vue.js
        </ExperienceItem>

        <ExperienceItem>
            <template #icon>
                •
            </template>
            <template #heading>FUNEC • 06/2017 até 05/2019</template>
            <h6 class="green">Desenvolvedor PHP - Júnior</h6>
            Desenvolvi sistemas para uso interno e externo utilizando PHP, MySQL, Jquery e outras linguagens.
        </ExperienceItem>

        <ExperienceItem>
            <template #icon>
                •
            </template>
            <template #heading>FUNEC • 02/2017 até 06/2017</template>
            <h6 class="green">Estagiário em Programação</h6>
            Tive a oportunidade ajudar no desenvolvimento de sistemas de acordo com a necessidade da empresa, e na
            manutenção de sistemas antigos em Delphi.
        </ExperienceItem>
    </main>
</template>
