<template>
  <div>
    <div :class="$style.wrapper">
      <img :class="$style.img" src="./assets/Group.svg" />
      <div :class="$style.body">
        <div :class="$style.main">
          <Header />
          <ToDo />
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/atoms/Header";
import Footer from "@/components/molecules/Footer";
import ToDo from "@/components/organisms/ToDo";

export default {
  name: "App",
  components: { ToDo, Header, Footer },
  data() {
    return {
      toDos: [
        {
          name: "Task1",
          isActive: true,
          id: "1",
        },
        {
          name: "Task2",
          isActive: false,
          id: "2",
        },
        {
          name: "Task3",
          isActive: false,
          id: "3",
        },
      ],
    };
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

  @media (max-width: 850px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 95vw;
  }
}

.todo__body {
  background-color: $bg-color-ultraLight;
}

// .todo__item {
//   background: $bg-color-light ;
//   display: flex;
//   justify-content: space-between;
//   width: 80%;
//   padding: 1rem;
//   border-radius: 1rem;
//   margin: 1.2rem;

//   .item__input {
//     display: block;
//     width: 100%;
//     font-family: inherit;
//     font-size: 1rem;
//     font-weight: 400;
//     line-height: 1.5;
//     color: #212529;
//     background-color: $bg-color-maxLight;
//     border: none;
//   }

//   .item__input::placeholder {
//     text-align: center;
//     color: $bg-color-dark;
//     font-size: 1.25rem;
//   }
// }

.todo__item:first-child {
  margin-top: 1.9rem;
}

.todo__item:last-child {
  margin-bottom: 1.9rem;
}


.todo__footer {
  background-color: $bg-color-dark;
  display: flex;
  justify-content: space-between;
  color: $main-col-42;
  height: 8vh;

  @media (max-width: 850px) {
    height: 16vh;
  }
}

.footer__sort {
  display: flex;
  padding-right: 2vw;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 850px) {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
