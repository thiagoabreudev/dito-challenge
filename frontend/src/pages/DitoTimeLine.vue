<template>
  <div>
    <b-row>
      <b-col>
        <time-line></time-line>
      </b-col>
      <b-col>
        <payload></payload>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TimeLine from "@/components/TimeLine";
import Payload from "@/components/Payload";
export default {
  components: {
    TimeLine,
    Payload
  },
  created() {
    this.$store.dispatch("loadTimeLine");
  }
};
</script>
