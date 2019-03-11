<template>
    <b-button variant="info" v-on:click="showForm">Adicionar</b-button>
</template>

<script>
export default {
  data () {
    return {
      eventName: ''
    }
  },
  methods: {
    async showForm () {
      const {value} = await this.$swal.fire({
        title: 'Informe o nome do evento',
        input: 'text',
        inputPlaceholder: 'Informe o nome do evento',
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: 'Salvar',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
          if (!value) {
            return 'O nome do evento é obrigatório'
          } else {
            let newEvent = {event: value}
            this.$store.dispatch('addEvent', newEvent)
          }
        }
      })
      if (value) {
        this.$swal.fire({
          type: 'success',
          text: 'Evento criado com sucesso!'
        })
      }
    }
  }
}
</script>
