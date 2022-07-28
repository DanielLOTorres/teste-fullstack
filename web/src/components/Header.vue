<template>
  <header>
    <nav class="container">
      <a href="https://www.parcelex.com.br/" target="blank"
        ><img id="logo" src="../assets/logo.png"
      /></a>

      <img
        v-on:click="changeMenu(true)"
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"
        alt="menu-icon"
        id="menu-button"
      />

      <div
        id="menu-overlay"
        v-if="menuActive"
        v-on:click="changeMenu(false)"
      ></div>
      <div id="menu-items" :class="{ active: menuActive }">
        <a href="https://www.parcelex.com.br/" target="blank"
          ><img id="menu-logo" src="../assets/logo.png"
        /></a>
        <ul>
          <li><a href="/">Usuários</a></li>
          <li><a href="/register">Cadastrar Usuário</a></li>
          <li><a href="/edit">Editar/Excluir Usuário</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    changeMenu: function (value) {
      this.menuActive = value;
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}

img {
  height: 30px;
}
a {
  color: white;
}

#logo {
  width: 50px;
}

#menu-button {
  width: 30px;
}

#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
}
#menu-logo {
  width: 110px;
  margin-top: 30px;
  margin-bottom: 10px;
}

#menu-items {
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100vh;
  background-color: var(--color-background-nav);
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#menu-items.active {
  display: flex;
}

ul {
  list-style: none;
  text-align: center;
}

ul li {
  margin: 20px 0px;
}

ul li a {
  color: var(--color-text-light);
}

@media (min-width: 700px) {
  #menu-button,
  #menu-logo,
  #menu-overlay {
    display: none;
  }

  #menu-items {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
  }

  ul {
    display: flex;
    height: 60px;
    align-items: center;
  }

  ul li {
    margin: 0;
    margin-left: 20px;
  }
}
</style>