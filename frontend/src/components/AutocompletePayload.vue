<template>
    <div>
        <codemirror :value="code" :options="cmOption"></codemirror>
    </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/rubyblue.css'

import 'codemirror/lib/codemirror.css'

export default {
  components: {
    codemirror
  },
  data () {
    return {
      cmOption: {
        tabSize: 4,
        mode: {
          name: 'javascript',
          json: true
        },
        theme: 'rubyblue',
        readOnly: true
      }
    }
  },
  computed: {
    code () {
      return JSON.stringify(this.events, null, 4)
    },
    events () {
      return this.$store.state.events
    }
  }
}
</script>

<style>
  .CodeMirror {
    height: 600px !important;
  }
</style>
