<template>
  <div :class="$style.header">to do list</div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.header {
  background-color: $bg-color-dark;
  height: 3.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
