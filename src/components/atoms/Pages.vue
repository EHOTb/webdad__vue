<template>
  <div :class="$style.page">
    {{ $store.state.tasks1.filter((task) => task.isChecked ==! true).length }} /
    {{ $store.state.tasks1.length }} left
  </div>
</template>

<script>
export default {
  name: "Pages",
};
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.page {
  padding: 3rem;
  display: flex;
  align-items: center;
}
</style>
