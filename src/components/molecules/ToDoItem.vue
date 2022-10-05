<template>
  <div :class="$style.body">
    <div :class="$style.items">
      <div
        :class="$style.item"
        v-for="toDo in toDos"
        :key="toDo.key"
        :isActive="toDo.isActive"
        :id="toDo.id"
      >
        {{ toDo.name }}
        <TaskName />
        <Delete />
      </div>

      <NewTask />
    </div>
  </div>
</template>

<script>
import Delete from "@/components/atoms/Delete";
import TaskName from "@/components/atoms/TaskName";
import NewTask from "@/components/atoms/NewTask";
export default {
  components: { Delete, TaskName, NewTask },
  props: ["toDo"],
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
@import "../../assets/styles/var.scss";

.item {
  background: $bg-color-light;
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1.2rem;
}

.body {
  background-color: $bg-color-ultraLight;
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item:first-child {
  margin-top: 1.9rem;
}

.item:last-child {
  margin-bottom: 1.9rem;
}
</style>
