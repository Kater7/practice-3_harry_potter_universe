<template>
  <div class="spells">
    <h3>Spells</h3>
    <div class="spells-block">
      <input type="input" class="search-spells" placeholder="Enter spell-name" v-model="userQuery" />
      <div class="spells-box">
        <div class="checkbox-block">
          <span v-for="(type, index) in getTypesOfSpells" :key="index">
            <input type="checkbox" value="type" @click="getSpellsByType(type)" />
            {{type}}
          </span>
        </div>
        <div class="spells-list">
          <ul v-if="spellsVisible">
            <li class="spell" v-for="(spell, index) in getSortedSpellsArray" :key="index">{{spell}}</li>
          </ul>
          <ul v-if="inputSpellsVisible">
            <li class="spell" v-for="(spell, index) in inputtArray" :key="index">{{spell}}</li>
          </ul>
          <ul v-if="spellsTypeVisible">
            <li class="spell" v-for="(spell, index) in spellsByType" :key="index">{{spell.spell}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spells",
  data() {
    return {
      typesOfSpells: [],
      spellsVisible: true,
      spellsTypeVisible: false,
      spellsByType: [],
      firstLetterSpells: [],
      userQuery: "",
      inputtArray: [],
      inputSpellsVisible: false
    };
  },
  watch: {
    userQuery() {
      this.getInputArray();
    }
  },
  mounted() {
    this.$store.dispatch("loadData");
  },
  computed: {
    spells() {
      return this.$store.state.spells;
    },
    getTypesOfSpells() {
      for (let i = 0; i < this.spells.length; i++) {
        if (!this.typesOfSpells.includes(this.spells[i].type)) {
          this.typesOfSpells.push(this.spells[i].type);
        }
      }
      return this.typesOfSpells;
    },
    getSortedSpellsArray() {
      const spellsNames = [];
      for (let i = 0; i < this.spells.length; i++) {
        spellsNames.push(this.spells[i].spell);
      }
      const sortedSpellsNames = spellsNames.sort((a, b) => a - b);
      for (let i = 0; i < sortedSpellsNames.length; i++) {
        if (i === 0) {
          this.firstLetterSpells.push(sortedSpellsNames[i].charAt(0));
          this.firstLetterSpells.push(sortedSpellsNames[i]);
        } else {
          if (
            sortedSpellsNames[i].charAt(0) ===
            sortedSpellsNames[i - 1].charAt(0)
          ) {
            this.firstLetterSpells.push(sortedSpellsNames[i]);
          } else {
            this.firstLetterSpells.push(sortedSpellsNames[i].charAt(0));
            this.firstLetterSpells.push(sortedSpellsNames[i]);
          }
        }
      }
      return this.firstLetterSpells;
    },

    filteredSpells() {
      return this.spells.filter(s => {
        // Отфильтровать по вклюсеным типам
      });
    }
  },
  methods: {
    getSpellsByType(type) {
      this.spellsVisible = false;
      this.spellsTypeVisible = true;
      for (let i = 0; i < this.spells.length; i++) {
        if (type === this.spells[i].type) {
          this.spellsByType.push(this.spells[i]);
        }
      }
      return this.spellsByType;
    },
    getInputArray() {
      this.inputtArray = [];
      this.spellsVisible = false;
      this.inputSpellsVisible = true;

      const spellsNamesS = [];
      for (let i = 0; i < this.spells.length; i++) {
        spellsNamesS.push(this.spells[i].spell);
      }
      const sortedSpellsNamesS = spellsNamesS.sort((a, b) => a - b);

      if (this.userQuery.length === 0) {
        this.inputtArray = [];
        this.spellsVisible = true;
        this.inputSpellsVisible = false;
      }

      for (let i = 0; i < sortedSpellsNamesS.length; i++) {
        if (sortedSpellsNamesS[i] === this.userQuery.trim()) {
          console.log(sortedSpellsNamesS[i]);
          console.log("aaa" + this.userQuery);
          this.inputtArray.push(sortedSpellsNamesS[i]);
        }
      }
      return this.inputtArray;
    }
  }
};
</script>