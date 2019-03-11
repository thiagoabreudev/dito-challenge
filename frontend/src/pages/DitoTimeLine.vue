<template>
  <div>
    <b-row>
      <b-col>
        <h2>Timeline</h2>
        <time-line></time-line>
      </b-col>
      <b-col>
        <h2>Payload</h2>
        <time-line-payload></time-line-payload>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TimeLine from '@/components/TimeLine'
import TimeLinePayload from '@/components/TimeLinePayload'
export default {
  components: {
    TimeLine,
    TimeLinePayload
  },
  created () {
    this.$store.dispatch('loadTimeLine')
  }
}
</script>
