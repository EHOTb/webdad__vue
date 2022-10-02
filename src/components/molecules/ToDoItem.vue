<template>
  <div :class="$style.body">
    <div :class="$style.items">
      <div :class="$style.item">
        <TaskName />
        <Delete />
      </div>
      <div :class="$style.item">
        <TaskName />
        <Delete />
      </div>
      <div :class="$style.item">
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
  props: [],
};
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.item {
  background: $bg-color-light ;
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1.2rem;}

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
