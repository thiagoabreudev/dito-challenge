# O que foi desenvolvido?
Este repositório contém um teste técnico, onde foi desenvolvido uma funcionalidade de autocomplete e uma timeline.

# Quais tecnologias foram utilizadas?
## No armazenamento dos dados: 
* MongoDB - https://www.mongodb.com/
## Para desenvolvimento da api: 
* Node - https://nodejs.org
* Restify - http://restify.com
## Para o frontend: 
* Vue - https://vuejs.org/
* Vuex - https://vuex.vuejs.org/
* Bootstrap Vue - https://bootstrap-vue.js.org/
## Ambiente de Desenvolvimento e Produção: 
* Docker - https://www.docker.com/
* Docker Compose - https://docs.docker.com/compose/

# Demonstração
* **Frontend**: o front desenvolvido, pode ser acessado através do link http://front-dito.thiagoabreudev.com.br. 
Esta página conterá a implementação do visual do autocomplete e da timeline. 
* **API de eventos**: poderá ser acessada através da url http://api-dito.thiagoabreudev.com.br/events
`Lembrando que conforme solicitado no teste, os eventos são carregados a partir da pesquisa com 2 caracteres. Para realizar a pesquisa, foi implementado o parâmetro “q”, desta forma, caso queira pesquisar todos os eventos “buy”, basta consumir o endpoint da seguinte forma: http://api-dito.thiagoabreudev.com.br/events?q=buy` 

Para trabalhar com um volume grande de eventos sem impactar de forma considerável na performance, foi implementado uma paginação através do parâmetro “_page”. Desta forma caso deseje acessar a página 10 de uma determinada busca, basta consumir o seguinte endpoint: http://api-dito.thiagoabreudev.com.br/events?_page=10&q=buy

