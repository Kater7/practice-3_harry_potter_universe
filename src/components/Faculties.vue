<template>
  <div class="faculties" v-if="mainFacultiesVisible">
    <div class="faculties-block">
      <Faculty :faculty="faculty" v-for="faculty in faculties" :key="faculty.id" />
    </div>
  </div>
</template>

<script>
import Faculty from "./Faculty.vue";

export default {
  name: "Faculties",
  components: {
    Faculty
  },
  data() {
    return {
      mainFacultiesVisible: true
    };
  },
  mounted() {
    this.$store.dispatch("loadData");
  },
  computed: {
    faculties() {
      return this.$store.state.faculties;
    }
  }
};
</script>