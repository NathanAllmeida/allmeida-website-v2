<script>
    export default{
        data(){
            return{
                name_visible:"",
                name:"Nathan Almeida"
            }
        },
        methods:{
            setChar:function(index){
                var name = this.name.split("");

                if(index<name.length){
                    this.name_visible += name[index]
                    console.log(this.name_visible)
                    index++
                    setTimeout(() => {
                        this.setChar(index);
                    }, 150);
                }

            }
        },
        mounted: function(){
            this.setChar(0)
        }
    }
</script>

<template>
    <header>
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex align-items-center">

                    <img alt="Minha foto" class="logo" src="@/assets/photo.jpg" height="300" />

                    <div class="wrapper">
                        <div class="greetings">
                            <h1 class="title-name green">{{ name_visible }}</h1>
                            <h3>
                                Desenvolvedor PHP Pleno<br>
                                Desenvolvedor Mobile<br>
                                Desenvolvedor Freelancer
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">Sobre Mim</RouterLink>
                    <RouterLink to="/experiences">Experiências</RouterLink>
                    <RouterLink to="/projects">Projetos</RouterLink>
                    <RouterLink to="/contact">Contato</RouterLink>
                    <RouterLink to="/code">Code.php </RouterLink>
                </nav>
                <a href="https://github.com/NathanAllmeida" class="btn btn-primary"><font-awesome-icon icon="fa-brands fa-github" /></a>
            </div>
        </div>
    </header>



    <RouterView />


</template>

<style scoped>

.btn-primary svg{
    font-size: 25px;
}
    .btn-primary{
        border-radius: 0;
        background-color: #423eff;
        border-color:#423eff;
    }
    .btn-primary:hover{
        border-radius: 0;
        background-color: #423eff !important;
        border-color:#423eff !important;
    }
header {
    line-height: 1.5;
    max-height: 100vh;
    padding-right: 30px !important;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
    border-radius: 15px;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
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

h3 {
    font-size: 1.2rem;
}

.greetings{
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

.title-name{
    border-right: 5px solid #423eff;
    width: auto;
    display:inline-block;
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

nav a{
    color: #ccc !important;
}
nav a.router-link-active{
    font-weight: bold;
    color: #423eff !important;
}
</style>
