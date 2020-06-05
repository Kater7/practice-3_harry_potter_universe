<template>
  <div class="hero">
    <!-- <ul> -->
      <li class="hero-name">{{character.name}}</li>
    <!-- </ul> -->
  </div>
</template>

<script>

export default {
  name: "Hero",
  components: {},
  props: ['character'],
};
</script>