<template>
  <div class="box">
    <div class="form">
      <h2>Buscar Usuário</h2>
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="E-mail"
        @change="buscarUsuario()"
        id="search"
      />
      <h1>Editar Usuário</h1>

      <form @submit.prevent="atualizarUsuario()">
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
        <span style="color: var(--color-background-nav)">Data de Criação</span>
        <input
          v-model="created"
          type="date"
          name="created"
          placeholder="Data de criação"
        />

        <input type="submit" value="Confirmar" />
        <input v-on:click="limparFormulario()" type="button" value="Cancelar" />
        <input
          v-if="this.encontrado"
          class="delete"
          v-on:click="excluirUsuario()"
          type="button"
          value="Excluir"
        />
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
      encontrado: false,
      name: "",
      email: "",
      password: "",
      birth: "",
      created: "",
      id: "",
      updated: "",
    };
  },
  mounted() {},
  methods: {
    atualizarUsuario() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
        birth: this.birth,
        created: this.created,
        updated: "",
      };
      try {
        api.patch("/user/" + this.id, user).then((res) => {
          console.log(res);
          alert("Usuário modificado com sucesso");
          router.push("/");
        });
      } catch (error) {
        console.log("Erro ao modificar usuário" + error);
        alert("Não foi possível modificar esse usuário no momento");
      }
      this.limparFormulario();
    },
    limparFormulario() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.birth = 0;
      this.created = 0;
      this.updated = 0;
      this.id = 0;
      this.encontrado = false;
    },
    buscarUsuario() {
      try {
        api.get("/user/" + this.email).then((res) => {
          const data = res.data.user;
          console.log(data.created);
          if (data) {
            this.encontrado = true;
            this.name = data.name;
            this.email = data.email;
            this.password = data.password;
            this.birth = data.birth;
            this.created = data.created;
            this.id = data._id;
            this.updated = data.updated;
          } else {
            this.email = "";
            this.encontrado = false;
            alert(
              "Não foi encontrado usuário para esse e-mail. Prossiga para página de cadastro e registre-o"
            );
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    excluirUsuario() {
      try {
        console.log(this.id);
        api
          .delete("/user/" + this.id, {
            headers: {
              Origin: "any",
              "X-Requested-With": "web",
              "Content-Type": "request",
              Accept: "true",
            },
          })
          .then((res) => {
            alert("Usuário exlcuído com sucesso", res.data);
            this.limparFormulario();
            router.push("/");
          });
      } catch (err) {
        console.log(err);
      }
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

.form .delete {
  background: rgb(148, 20, 20) !important;
}
.form .delete:hover {
  background: rgb(90, 14, 14) !important;
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
  background: #046b7e8f;
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

.form #search {
  margin-bottom: 50px;
}
</style>
