# Teste Fullstack

1. API JSON RESTful

Foi desenvolvida uma API em NODE.js utilizando Express para CRUD de usuário. 
Para persistência de dados foi escolhido o MongoDB, em sua versão na nuvem, o MongoDB Atlas. 
O arquivo .env foi adicionado ao repositório apenas com o propósito de facilitar os testes, nele está contido o usuário e senha para conexão do banco. 

2. Interface para acesso de dados

A interface foi desenvolvida em VUE.js no modelo de SPA e está integrada via axios com a API em NODE.js.  


Instruções para testes

Nos dois projetos será necessário executar o comando "npm i" para instalar as dependências necessárias. 
Com tudo intalado, os projetos devem ser executados em terminais separados. 

Para inicialização: 
NODE.js: 'npm start', 
VUE.js: 'npm run serve'

Para os testes separados apenas na api, foi adicionada uma collection do Postman para testar os endpoints separadamente. 