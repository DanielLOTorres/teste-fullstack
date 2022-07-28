<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row">
        <td v-for="item in row" :key="item">
          {{ item }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Tabela",
  props: ["headers", "rows"],
  data() {
    return {};
  },
};
</script>

<style>
table,
th,
td {
  border: 1px solid;
}

th,
td {
  padding: 15px;
  text-align: center;
}

th,
td {
  border-bottom: 1px solid #ddd;
}

th {
  height: 70px;
  color: white;
  background: var(--color-background-nav);
  width: 200px;
}

table {
  background: white;
  width: 80vw;
  border-collapse: collapse;
  height: 80vh;
}

table {
  overflow-y: scroll;

  display: block;
}

tr:hover {
  background-color: #046b7e8f;
}
</style>