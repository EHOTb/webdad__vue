<template>
  <div @click="$emit('deleteToDo')" :class="$style.delete">&#10006;</div>
</template>

<script>
export default {
  name: "Delete",
};
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.delete {
  display: flex;
  justify-content: center;
  border: 0.15rem solid $delete;
  padding: 0.5rem 0.5rem 0.3rem;
  border-radius: 20%;
  color: $delete;
  cursor: pointer;
  transition: 0.3s;
}

.delete:hover {
  box-shadow: 0.2rem 0.2rem 0.2rem $main-col;
}
</style>
