<template>
  <div class="box">
    <div class="form">
      <h1>Cadastrar Usuário</h1>
      <form @submit.prevent="cadastrarUsuario()">
        <input v-model="name" type="text" name="name" placeholder="Nome" />
        <input v-model="email" type="email" name="email" placeholder="E-mail" />
        <input
          v-model="password"
          type="password"
          name="password"
          placeholder="Senha"
        />
        <span style="color: var(--color-background-nav)"
          >Data de Nascimento</span
        >
        <input
          v-model="birth"
          type="date"
          name="birth"
          placeholder="Data de nascimento"
        />

        <input type="submit" value="Confirmar" />
        <input v-on:click="limparFormulario()" type="button" value="Cancelar" />
      </form>
    </div>
  </div>
</template>
<script>
import api from "@/services/api.js";
import router from "../routes/routes";

export default {
  name: "User",
  components: {},
  data() {
    return {
      name: "",
      email: "",
      password: "",
      birth: "",
    };
  },
  mounted() {},
  methods: {
    cadastrarUsuario() {
      const user = {
        name: this.name,
        email: this.email,
        birth: this.birth,
        password: this.password,
      };
      try {
        api.post("/user", user).then((res) => {
          console.log(res);
          alert("Usuário cadastrado com sucesso");
          router.push("/");
        });
      } catch (error) {
        console.log("Erro ao cadastrar usuário" + error);
        alert("Não foi possível cadastrar esse usuário no momento");
      }
      this.limparFormulario();
    },
    limparFormulario() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.birth = 0;
    },
  },
};
</script>

<style scoped>
.box {
  height: 95%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.form {
  font: 95% Arial, Helvetica, sans-serif;
  max-width: 400px;
  margin: 10px auto;
  padding: 16px;
  background: #f7f7f7;
}
.form h1 {
  background: var(--color-background-nav);
  padding: 20px 0;
  font-size: 140%;
  font-weight: 300;
  text-align: center;
  color: #fff;
  margin: -16px -16px 16px -16px;
}
.form input[type="text"],
.form input[type="email"],
.form input[type="password"],
.form input[type="date"],
.form input[type="number"],
.form input[type="select"],
.form select {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;
  font: 95% Arial, Helvetica, sans-serif;
}

.form input[type="text"]:focus,
.form input[type="number"]:focus,
.form input[type="select"]:focus,
.form select:focus {
  box-shadow: 0 0 5px var(--color-background-nav);
  padding: 3%;
  border: 1px solid var(--color-background-nav);
}

.form input[type="submit"],
.form input[type="button"] {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  padding: 3%;
  background: var(--color-background-nav);
  border-bottom: 2px solid var(--color-background-nav);
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  color: #fff;
  margin-bottom: 5px;
}
.form input[type="submit"]:hover,
.form input[type="button"]:hover {
  background: #292d31;
}

.content {
  width: 100vw;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.table {
  width: 100%;
  border: 1px solid #eeeeee;
}

.table-header {
  display: flex;
  width: 100%;
  background: #000;
  padding: 0;
}

.table-row {
  display: flex;
  width: 100%;
  padding: 0;
}

.table-data,
.header__item {
  flex: 1 1 20%;
  text-align: center;
}

.header__item {
  text-transform: uppercase;
}

.filter__link {
  color: white;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-left: base-spacing-unit;
  padding-right: base-spacing-unit;
}
</style>
