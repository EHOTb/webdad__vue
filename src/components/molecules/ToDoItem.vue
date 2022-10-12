<template>
  <div :class="$style.item">
    <Checkbox :checked="checked" />
    {{ name }}
    <Delete />
  </div>
</template>

<script>
import Delete from "@/components/atoms/Delete";
import Checkbox from "@/components/atoms/Checkbox";
export default {
  components: { Delete, Checkbox },
  props: {
    checked: Boolean,
    name: String,
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
  align-items: center;
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
