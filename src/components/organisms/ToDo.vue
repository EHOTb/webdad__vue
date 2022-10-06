<template>
  <div :class="$style.items">
    <ToDoItem
      :class="$style.item"
      v-for="el in tasks"
      :key="el.id"
      :checked="el.isActive"
      :name="el.name"
    />
  </div>
</template>

<script>
import ToDoItem from "@/components/molecules/ToDoItem";

export default {
  components: {
    ToDoItem,
  },
  data() {
    return {
      tasks: [
        {
          id: "1",
          name: "Task1",
          isActive: true,
        },
        {
          id: "2",
          name: "Task2",
          isActive: false,
        },
        {
          id: "3",
          name: "Task3",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item {
  background: $bg-color-light;
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1.2rem;
  align-items: center;
}
</style>
