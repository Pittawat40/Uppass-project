<template>
  <a id="button">
    <v-btn
      icon="fas fa-arrow-up"
      border
      height="40"
      width="40"
      variant="text"
      color="yellow"
      @click="backtoTop"
    ></v-btn>
  </a>
</template>

<script>
export default {
  data: () => ({}),
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    backtoTop() {
      document.getElementById("home").scrollIntoView({
        behavior: "smooth",
      });
    },
    handleScroll() {
      let btn = document.querySelector("#button");
      if (btn) {
        if (window.scrollY > 300) btn.classList.add("show");
        else btn.classList.remove("show");
      }
    },
  },
};
</script>

<style scoped>
#button {
  background-color: #000;
  display: inline-block;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 20px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}

#button:hover {
  background-color: #232323;
}

#button.show {
  opacity: 1;
  visibility: visible;
}
</style>
