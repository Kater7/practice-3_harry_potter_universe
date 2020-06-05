<template>
  <div class="faculty-value">
    <div v-for="(value, index) in values" :key="index">{{value}}</div>
  </div>
</template>

<script>
export default {
  name: "FucultiValue",
  // data() {
  //   return {
  //     facultyValues: []
  //   }
  // },
  props: ['values'],
  
 
};
</script>