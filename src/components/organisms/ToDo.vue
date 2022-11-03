<template>
  <div :class="$style.items">
    <ToDoItem
      :class="$style.item"
      v-for="el in $store.getters.filterTasks"
      :key="el.id"
      :isChecked="el.isChecked"
      :name="el.name"
      :radio="el.type"
      @deleteTask="() => closeTask(el.id)"
      @toggleCheckbox="() => checkedTask(el.id)"
    />
  </div>
</template>

<script>
import ToDoItem from "@/components/molecules/ToDoItem";
import { mapGetters } from "vuex";

export default {
  components: {
    ToDoItem,
  },
  computed: {
    ...mapGetters(["TASKS"]),
  },
  methods: {
    closeTask(id) {
      this.$store.commit("DELETE_TASK", id);
    },
    checkedTask(id) {
      this.$store.commit("CHECKED_TASK", id);
    },
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
</style>
