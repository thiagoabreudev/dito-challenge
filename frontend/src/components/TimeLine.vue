<template>
  <div>
    <light-timeline :items="items"></light-timeline>
  </div>
</template>

<script>
const theme = "red";
export default {
  computed: {
    items() {
      let items = []
      for (let item of this.$store.state.timeline.timeline) {
        items.push({
          tag: `${new Date(item.timestamp).toLocaleString()}`,
          type: 'circle',
          htmlMode: true,
          content: `<strong>Trasação:</strong> ${item.transaction_id}
          <strong>Loja:</strong> ${item.store_name}
          <strong>Valor:</strong> ${item.revenue}        
          <strong>Produtos:</strong>          
          ${this.getHtmlProducts(item.products)}
          <hr/>
          `          
        })
      }
      return items
    }    
  }, 
  methods: {
    formatPrice(value) {
      return parseFloat(value).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})
    },
    getHtmlProduct(product) {
      let htmlProduct = `<div style="">
        <strong>${product.name}</strong> por <strong>${this.formatPrice(product.price)}</strong>
      </div>`
      return htmlProduct
    },
    getHtmlProducts(products) {
      let htmlProducts = ``
      for (let product of products) {
        htmlProducts += `${this.getHtmlProduct(product)}`
      }
      return htmlProducts
    }
  }
};
</script>