<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss">
.container {
  max-width: 1197px;
  @media (max-width: 960px) {
    widows: 100%;
  }
}
.w-100 {
  width: 100%;
}
</style>
