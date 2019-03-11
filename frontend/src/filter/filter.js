import Vue from 'vue'

// Formata a data de acordo com o locale
Vue.filter('toLocaleDate', (value) => {
  return new Date(value).toLocaleString()
})

// Formata o dinheiro de acordo com o locale
Vue.filter('toLocaleMoney', (value) => {
  return parseFloat(value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
})
