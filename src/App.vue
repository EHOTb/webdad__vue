<template>
  <div>
    <div class="wrapper">
      <img class="wrapper__img" src="./assets/Group.svg" alt="">
      <div class="body__wrapper">
        <div class="todo__main">

          <Header name="ALex" />
          <div class="todo__body">
            <ToDoItems />


            <!-- <div class="todo__items">
              <div class="todo__item">
                <TaskName />
                <Delete />
              </div>
              <div class="todo__item">
                <input type="checkbox" class="custom-checkbox" id="doIt2" name="doIt">
                <label for="doIt2">Task2 </label>
                <Delete />
              </div>
              <div class="todo__item">
                <input type="checkbox" class="custom-checkbox" id="doIt3" name="doIt">
                <label for="doIt3">Task3 </label>
                <Delete />
              </div>
              <NewTask />
            </div> -->
            <NewTask />
          </div>
          <div>
            <Footer />


          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import Header from '@/components/atoms/Header';
// import Delete from "@/components/atoms/Delete";
// import TaskName from "@/components/atoms/TaskName";
import NewTask from "@/components/atoms/NewTask";
// import Pages from "@/components/atoms/Pages";
// import FooterRadio from "@/components/atoms/FooterRadio";
import Footer from "@/components/molecules/Footer";
import ToDoItems from "@/components/molecules/ToDoItems";
// import TodoItems from './components/molecules/TodoItems.vue';

export default {
  name: "App",
  components: { Header, Footer, NewTask, ToDoItems },
  data() {
    return {
      users:
        [{
          name: 'Task1',
          isActive: true,
          id: '1',
        },
        {
          name: 'Task2',
          isActive: false,
          id: '2',
        }, {
          name: 'Task3',
          isActive: false,
          id: '3',
        }
        ]
    }
  }
};

</script>

<style lang="scss">
@import "./assets/styles/var.scss";
@import './assets/styles/normalize.scss';

.wrapper {
  @include font-main;
  color: $main-col;
  background: linear-gradient(104.11deg, $grad-main-col 14.52%, $grad-sec-col 87.26%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.wrapper__img {
  z-index: 1;
  position: absolute;
  padding-left: 40%;
  width: 31%;

  @media(max-width: 850px) {
    width: 60%;
    padding-left: 80%;
  }

  @media(max-width:600px) {
    display: none;
  }
}

.body__wrapper {
  z-index: 2;
  box-shadow: 0px 0.5rem 2rem 0.4rem $shadow;
}

.todo__main {
  width: 40vw;

  @media(max-width: 850px) {
    width: 70vw;
  }

  @media(max-width: 600px) {
    width: 95vw;
  }
}

.todo__header {
  background-color: $bg-color-dark ;
  height: 3.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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



// .item__new {
//   display: block;
//   text-align: center;
//   background-color: $bg-color-maxLight;
//   color: $bg-color-dark;
//   border: 0.2rem dashed $bg-color-dark;
// }

.todo__footer {
  background-color: $bg-color-dark;
  display: flex;
  justify-content: space-between;
  color: $main-col-42;
  height: 8vh;

  @media (max-width:850px) {
    height: 16vh;
  }
}


.footer__sort {
  display: flex;
  padding-right: 2vw;
  gap: 2rem;
  align-items: center;

  @media(max-width:1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width:850px) {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }


}
</style>