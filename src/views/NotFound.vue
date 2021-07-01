<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <Empty class="mt-5" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Empty from "@/components/Empty.vue";
export default {
  name: "NotFound",
  components: {
    Empty,
  },
};
</script>
