<template>
  <div class="box">
    <div class="table-div">
      <h1>Usuários cadastrados</h1>
      <Tabela
        style="width: 100%"
        v-bind:headers="[
          'Nome',
          'Email',
          'Data de Nascimento',
          'Data de cadastro',
          'Última alteração',
        ]"
        v-bind:rows="users"
      ></Tabela>
    </div>
  </div>
</template>
<script>
import api from "@/services/api.js";
import Tabela from "../components/Table.vue";

export default {
  name: "UsersList",
  components: { Tabela },
  data() {
    return {
      users: [],
      id: "",
      name: "",
      email: "",
      password: "",
      birth: "",
      created: "",
      updated: "",
    };
  },
  mounted() {
    api.get("/user").then((res) => {
      let moddedData = [];
      const data = res.data.users;
      data.forEach((el) => {
        el = {
          // id: el._id,
          name: el.name,
          email: el.email,
          // password: el.password,
          birth: el.birth,
          created: el.created,
          updated: el.updated,
        };
        if (el.active == true) {
          el.active = "Sim";
        } else if (el.active == false) {
          el.active = "Não";
        }
        moddedData.push(el);
      });
      this.users = moddedData;
    });
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: calc(100vh);
  background: #1cc9e7;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px;
}
h1 {
  color: white;
  margin-bottom: 15px;
}
</style>
