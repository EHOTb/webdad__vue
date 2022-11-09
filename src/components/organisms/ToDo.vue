<template>
  <div :class="$style.items">
    <ToDoItem
      :class="$style.item"
      v-for="el in filterTab"
      :key="el.id"
      :isChecked="el.isChecked"
      :name="el.name"
      :radio="el.type"
      @deleteItem="() => closeTask(el.id)"
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
    ...mapGetters(["filterTab"]),
  },
  methods: {
    closeTask(id) {
      this.$store.commit("deleteTask", id);
    },
    checkedTask(id) {
      this.$store.commit("checkedTask", id);
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
