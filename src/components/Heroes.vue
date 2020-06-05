<template>
  <div class="heroes" v-if="mainHeroesVisible">
    <h3>Heroes of the universe Harry Potter</h3>
    <div class="heroes-box">
      <div class="btn-heroes">
        <button type="button" class="btn-blood" @click="allBlockVisible">All Heroes</button>
        <button type="button" class="btn-phenix" @click="phenixBlockVisible">Order Of The Phoenix</button>
        <button type="button" class="btn-eater" @click="eaterBlockVisible">Death Eater</button>
        <button type="button" class="btn-students" @click="studentsBlockVisible">Hogwarts Students</button>
        <button type="button" class="btn-blood" @click="bloodBlockVisible">Pure-bloods Wizards</button>
      </div>
      <div class="heroes-block">
        <ul v-if="heroesVisible">
          <li
            class="hero-name"
            v-for="(character, index) in characters"
            :key="index"
          >{{character.name}}</li>
        </ul>
        <ul v-if="phenixVisible">
          <li class="phenix" v-for="(name, index) in orderOfThePhoenixHeroes" :key="index">{{name}}</li>
        </ul>
        <ul v-if="eaterVisible">
          <li class="eater" v-for="(name, index) in deathEaterHeroes" :key="index">{{name}}</li>
        </ul>
        <ul v-if="studentsVisible">
          <li class="students" v-for="(name, index) in studentsHeroes" :key="index">{{name}}</li>
        </ul>
        <ul v-if="bloodVisible">
          <li class="blood" v-for="(name, index) in pureBloodsHeroes" :key="index">{{name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heroes",
  data() {
    return {
      heroesVisible: true,
      phenixVisible: false,
      eaterVisible: false,
      studentsVisible: false,
      bloodVisible: false,
      orderOfThePhoenixs: [],
      deathEater: [],
      students: [],
      pureBloods: [],
      mainHeroesVisible: true
    };
  },
  mounted() {
    this.$store.dispatch("loadData");
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    },
    orderOfThePhoenixHeroes() {
      for (let i = 0; i < this.characters.length; i++) {
        if (this.characters[i].orderOfThePhoenix === true) {
          this.orderOfThePhoenixs.push(this.characters[i].name);
        }
      }
      return this.orderOfThePhoenixs;
    },
    deathEaterHeroes() {
      for (let i = 0; i < this.characters.length; i++) {
        if (this.characters[i].deathEater == true) {
          this.deathEater.push(this.characters[i].name);
        }
      }
      return this.deathEater;
    },
    studentsHeroes() {
      for (let i = 0; i < this.characters.length; i++) {
        if (this.characters[i].role == "Student") {
          this.students.push(this.characters[i].name);
        }
      }
      return this.students;
    },
    pureBloodsHeroes() {
      for (let i = 0; i < this.characters.length; i++) {
        if (this.characters[i].bloodStatus == "pure-blood") {
          this.pureBloods.push(this.characters[i].name);
        }
      }
      return this.pureBloods;
    }
  },
  methods: {
    phenixBlockVisible() {
      this.heroesVisible = false;
      this.phenixVisible = true;
      this.eaterVisible = false;
      this.studentsVisible = false;
      this.bloodVisible = false;
    },
    eaterBlockVisible() {
      this.heroesVisible = false;
      this.phenixVisible = false;
      this.eaterVisible = true;
      this.studentsVisible = false;
      this.bloodVisible = false;
    },
    studentsBlockVisible() {
      this.heroesVisible = false;
      this.phenixVisible = false;
      this.eaterVisible = false;
      this.studentsVisible = true;
      this.bloodVisible = false;
    },
    bloodBlockVisible() {
      this.heroesVisible = false;
      this.phenixVisible = false;
      this.eaterVisible = false;
      this.studentsVisible = false;
      this.bloodVisible = true;
    },
    allBlockVisible() {
      this.heroesVisible = true;
      this.phenixVisible = false;
      this.eaterVisible = false;
      this.studentsVisible = false;
      this.bloodVisible = false;
    }
  }
};
</script>