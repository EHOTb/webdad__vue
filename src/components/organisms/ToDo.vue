<template>
  <div>
  <ToDoItem 
 
  />
</div>
</template>

<script>
import ToDoItem from "@/components/molecules/ToDoItem";

export default {
  components: {
    ToDoItem,
  },
  props: ["name", "isActive"],
  
};
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";
</style>
