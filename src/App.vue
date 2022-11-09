<template>
  <div :class="$style.wrapper">
    <img :class="$style.img" src="./assets/Group.svg" />
    <div :class="$style.body">
      <div :class="$style.main">
        <Header />
        <div :class="$style.item">
          <ToDo />
          <NewTask @createNewTask="addTask" />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/atoms/Header";
import Footer from "@/components/organisms/Footer";
import ToDo from "@/components/organisms/ToDo";
import NewTask from "./components/atoms/NewTask.vue";

export default {
  name: "App",
  components: { ToDo, Header, Footer, NewTask },
  methods: {
    addTask(value) {
      this.$store.commit("addTask", value);
    },
  },
};
</script>

<style lang="scss" module>
@import "./assets/styles/var.scss";
@import "./assets/styles/normalize.scss";

.wrapper {
  @include font-main;
  color: $main-col;
  background: linear-gradient(
    104.11deg,
    $grad-main-col 14.52%,
    $grad-sec-col 87.26%
  );
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.img {
  z-index: 1;
  position: absolute;
  padding-left: 40%;
  width: 31%;

  @media (max-width: 850px) {
    width: 60%;
    padding-left: 80%;
  }

  @media (max-width: 600px) {
    display: none;
  }
}

.main {
  width: 40vw;
  background-color: $bg-color-ultraLight;

  @media (max-width: 850px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 95vw;
  }
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
