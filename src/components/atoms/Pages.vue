<template>
  <div :class="$style.page">{{ doNotDo }} / {{ doDo }} left</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Pages",
  computed: {
    ...mapGetters(["doNotDo", "doDo"]),
  },
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
