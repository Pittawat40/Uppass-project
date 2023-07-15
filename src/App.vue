<template>
  <v-app id="home">
    <NavBar />

    <!-- =============  search  ============= -->
    <Search />
    <!-- =============  search  ============= -->

    <!-- =============  book detail  ============= -->
    <Book :val="BookData" />
    <!-- =============  book detail  ============= -->

    <Footer />
    <Scroll />
  </v-app>
</template>

<script>
import { defineComponent, ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import Book from "@/components/Book.vue";
import Footer from "@/components/Footer.vue";
import Scroll from "@/components/Scroll.vue";
import Search from "@/components/Search.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    Book,
    Footer,
    Scroll,
    Search,
  },
  data: () => ({
    default: {
      text: "react",
    },
  }),
  computed: {
    BookData() {
      return this.$store.state.BookData;
    },
  },
  mounted() {
    this.$store.dispatch("fetchData", this.default);
  },
});
</script>
