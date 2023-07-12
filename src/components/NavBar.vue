<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <v-btn class="text-h6">
      <v-icon color="yellow" left class="mr-2 mb-1 book"
        >fas fa-book-open</v-icon
      >
      <p class="mx-2 text-uppercase font-weight-bold">Uppass Books</p>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text class="text-yellow d-none d-sm-flex" to="/">Home</v-btn>
    <v-btn text class="text-yellow d-none d-sm-flex">Favorite</v-btn>

    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn class="d-flex d-sm-none" color="primary" v-bind="props">
          <v-icon color="yellow" left class="mr-2 mb-1">fas fa-bars</v-icon>
        </v-btn>
      </template>
      <v-list class="d-sm-none drop-menu">
        <v-list-item to="/">
          <v-list-item-title class="text-uppercase font-weight-bold">Home</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title class="text-uppercase font-weight-bold">Favorite</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
header {
  position: fixed !important;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

header .book {
  transform: rotate(18deg);
}

.drop-menu i {
  margin-left: 0.5rem;
}

.drop-menu .v-list-item-title {
  font-size: 0.8rem;

}
</style>
