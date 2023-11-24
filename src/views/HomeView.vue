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
    <div class="row">
        <div class="col-md-6">
            <img
                alt="Minha foto"
                class="logo"
                src="@/assets/photo.jpg"
                height="400"
            />
        </div>

        <div class="col-md-6">
            <h1>Olá!</h1>
            <p>
                Seja bem-vindo! Meu nome é Nathan e sou Desenvolvedor PHP e
                Mobile à {{ date }} anos.
            </p>
            <p class="green">Minhas principais habilidades:</p>
            <span class="tag-lang">PHP</span>
            <span class="tag-lang">Javascript</span>
            <span class="tag-lang">Python</span>
            <span class="tag-lang">Codeigniter 3/4</span>
            <span class="tag-lang">Ionic</span>
            <span class="tag-lang">Angular</span>
            <span class="tag-lang">Flask</span>
            <br /><br />
            <a href="/experiences" class="btn btn-primary"
                >Um pouco do meu trajeto</a
            >
        </div>
    </div>
</template>

<style scoped>
.tag-lang {
    background-color: #423eff;
    padding: 5px 15px;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    margin: 10px;
    display: inline-block;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
    border-radius: 15px;
}

.title-name {
    border-right: 5px solid #423eff;
    width: auto;
    display: inline-block;
    animation-name: title-name-cursor;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

@keyframes title-name-cursor {
    from {
        border-right: 5px solid #423eff;
    }
    to {
        border-right: none;
    }
}
</style>

