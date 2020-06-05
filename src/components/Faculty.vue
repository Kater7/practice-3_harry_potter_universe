<template>
  <div class="faculty">
    <h3 class="faculty-name">{{faculty.name}}</h3>
    <div class="faculty-property">
      Founder -
      <span>{{faculty.founder}}</span>
    </div>
    <div class="faculty-property">
      Mascot -
      <span>{{faculty.mascot}}</span>
    </div>
    <div class="faculty-property">
      Head of House -
      <span>{{faculty.headOfHouse}}</span>
    </div>
    <div class="represent">
      <button
        type="button"
        class="btn-representative"
        @click="toggleElementVisibility"
      >Representatives</button>
      <div class="representatives" v-show="isElVisible">
        <div
          class="representative"
          v-for="(name, index) in getRepresentatives(faculty.name)"
          :key="index"
        >{{name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faculty",
  data() {
    return {
      isElVisible: false
    };
  },
  props: ["faculty"],
  mounted() {
    this.$store.dispatch("loadData");
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    }
  },
  methods: {
    toggleElementVisibility() {
      this.isElVisible = !this.isElVisible;
    },
    getRepresentatives(facultyName) {
      let houseRepresentatives = [];
      for (let i = 0; i < this.characters.length; i++) {
        if (houseRepresentatives.length < 10) {
          if (this.characters[i].house === facultyName) {
            houseRepresentatives.push(this.characters[i].name);
          }
        }
      }
      return houseRepresentatives;
    }
  }
};
</script>