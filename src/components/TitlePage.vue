<template>
  <div class="title-page">
    <img src="../image/Hogwarts-Logo-Transparent-Background.png" alt="no img" />
    <div class="buttons" v-if="mainVisible">
      <div class="heroes-place">
        <button type="button" class="heroes-button" @click="heroesElementsVisibility">Heroes</button>
      </div>
      <div class="faculties-place">
        <button
          type="button"
          class="faculties-button"
          @click="facultiesElementsVisibility"
        >Faculties</button>
      </div>
      <div class="spells-place">
        <button type="button" class="spells-button" @click="spellsElementsVisibility">Spells</button>
      </div>
    </div>

    <Heroes v-if="heroesVisible" />
    <Faculties v-if="facultiesVisible" />
    <Spells v-if="spellsVisible" />

    <button
      type="button"
      class="button-back"
      v-if="buttonBackVisibile"
      @click="buttonBackVisibility"
    >Back home</button>
  </div>
</template>

<script>
import Heroes from "./Heroes.vue";
import Faculties from "./Faculties.vue";
import Spells from "./Spells.vue";

export default {
  name: "TitlePage",
  components: {
    Heroes,
    Faculties,
    Spells
  },
  data() {
    return {
      heroesVisible: false,
      facultiesVisible: false,
      spellsVisible: false,
      mainVisible: true,
      buttonBackVisibile: false
    };
  },
  methods: {
    heroesElementsVisibility() {
      this.heroesVisible = !this.heroesVisible;
      this.mainVisible = !this.mainVisible;
      this.buttonBackVisibile = !this.buttonBackVisibile;
    },
    facultiesElementsVisibility() {
      this.facultiesVisible = !this.facultiesVisible;
      this.mainVisible = !this.mainVisible;
      this.buttonBackVisibile = !this.buttonBackVisibile;
    },
    spellsElementsVisibility() {
      this.spellsVisible = !this.spellsVisible;
      this.mainVisible = !this.mainVisible;
      this.buttonBackVisibile = !this.buttonBackVisibile;
    },
    buttonBackVisibility() {
      if ((this.heroesVisible = true)) {
        this.mainVisible = !this.mainVisible;
        this.heroesVisible = !this.heroesVisible;
        this.buttonBackVisibile = !this.buttonBackVisibile;
      }
      if ((this.facultiesVisible = true)) {
        this.facultiesVisible = !this.facultiesVisible;
        this.buttonBackVisibile = !this.buttonBackVisibile;
        this.mainVisible = !this.mainVisible;
      }
      if ((this.spellsVisible = true)) {
        this.spellsVisible = !this.spellsVisible;
        this.buttonBackVisibile = !this.buttonBackVisibile;
        this.mainVisible = !this.mainVisible;
      }
    }
  }
};
</script>