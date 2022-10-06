<template>
  <div :class="$style.page">
    <p>1/3 Left</p>
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
  padding: 2vw;
  display: flex;
  align-items: center;
}
</style>
