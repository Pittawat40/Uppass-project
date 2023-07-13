<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <v-btn class="text-h6">
      <v-icon color="yellow" left class="mr-5 mb-1 book"
        >fas fa-book-open</v-icon
      >
      <div class="head-text">
        <p class="text-uppercase font-weight-bold print-text">
          Uppass Books
        </p>
      </div>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text class="text-yellow d-none d-sm-flex mr-1" @click="goHome"
      >Home</v-btn
    >
    <v-btn text class="text-yellow d-none d-sm-flex mx-1" @click="checkData"
      >Favorite</v-btn
    >

    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn class="d-flex d-sm-none" color="primary" v-bind="props">
          <v-icon color="yellow" left class="mr-2 mb-1">fas fa-bars</v-icon>
        </v-btn>
      </template>
      <v-list class="d-sm-none drop-menu">
        <v-list-item @click="goHome">
          <v-list-item-title class="text-uppercase font-weight-bold"
            >Home</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="checkData">
          <v-list-item-title class="text-uppercase font-weight-bold"
            >Favorite</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>

    <v-snackbar v-model="snackbar" :timeout="2000" color="red-darken-2">
      <p class="text-uppercase">Please add your favorite book !!</p>
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
  }),
  methods: {
    async goHome() {
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    async checkData() {
      let check = JSON.parse(localStorage.getItem("favorite"));
      if (check && check.length > 0) {
        this.$router.push("/favorite");
        window.scrollTo(0, 0);
      } else this.snackbar = true;
    },
  },
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

.head-text {
  display: inline-block;
}

.print-text {
  width: 100%;
  overflow: hidden;
  letter-spacing: 4px;
  white-space: nowrap;
  border-right: 2px solid;
  animation: typing 2s steps(18), cursor 0.4s step-end infinite alternate;
}

@keyframes cursor {
  50% {
    border-color: transparent;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
}
</style>
