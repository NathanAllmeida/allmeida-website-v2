<script>
export default {
    data() {
        return {
            name_visible: "",
            date: "",
            name: "Nathan Almeida",
        };
    },
    methods: {
        setChar: function (index) {
            var name = this.name.split("");

            if (index < name.length) {
                this.name_visible += name[index];
                console.log(this.name_visible);
                index++;
                setTimeout(() => {
                    this.setChar(index);
                }, 150);
            }
        },
    },
    mounted: function () {
        var date1 = new Date();
        var date2 = new Date("2017/02/01");
        var diff = date1.getTime() - date2.getTime();
        var ageDate = new Date(diff); // miliseconds from epoch
        this.date = Math.abs(ageDate.getUTCFullYear() - 1970);
        this.setChar(0);
    },
};
</script>

<template>
    <header class="w-100 top-0 left-0">
        <div class="row row-line w-100  ">
            <div class="col-md-12">
                <div class="d-flex w-100 justify-content-center">
                    <h4 class="text-center title-name green mt-4 fw-bolder w-">{{ name_visible }}</h4>
                </div>
                <h5 class="text-center mt-4">Desenvolvedor PHP Pleno <span class="mx-2">•</span> Desenvolvedor Mobile  <span class="mx-2">•</span> Desenvolvedor Freelancer</h5>
            </div>
            <div class="col-md-12">
                <nav class="d-flex justify-content-center">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">Sobre Mim</RouterLink>
                    <RouterLink to="/experiences">Experiências</RouterLink>
                    <RouterLink to="/projects">Projetos</RouterLink>
                    <RouterLink to="/contact">Contato</RouterLink>
                    <RouterLink to="/mentoring">Mentoria </RouterLink>
                </nav>
            </div>
        </div>
    </header>

    <div id="main-content" class="w-100">
        <RouterView />
    </div>
</template>

<style scoped>
.btn-primary svg {
    font-size: 25px;
}
.btn-primary {
    border-radius: 0;
    background-color: #423eff;
    border-color: #423eff;
}
.btn-primary:hover {
    border-radius: 0;
    background-color: #423eff !important;
    border-color: #423eff !important;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
    border-bottom: 3px solid white;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 10px 1.38rem;
    /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
    /* border: 0; */
}
@media (max-width: 1024px) {
}

@media (min-width: 1024px) {
    .logo {
        margin: 0 2rem 0 0;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}

h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

.greetings {
    min-width: 320px;
}
.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}

nav a {
    color: #ccc !important;
}
nav a.router-link-active {
    font-weight: bold;
    color: #423eff !important;
}


.title-name{
    display: flex;
    justify-self: center;
    width: fit-content;
    /* border-right: 5px solid #423eff; */
    /* width: auto; */
    /* display:inline-block; */
    animation-name: title-name-cursor;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

@keyframes title-name-cursor {
  from {
    border-right: 5px solid #423eff;
  }
  to {border-right: none;}
}
</style>
