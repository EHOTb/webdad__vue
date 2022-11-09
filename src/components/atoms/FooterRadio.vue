<template>
  <li
    :class="[$style.radio, { [$style.active]: isActive }]"
    @click="$emit('footerTab')"
  >
    {{ name }}
  </li>
</template>

<script>
export default {
  name: "FooterRadio",

  props: {
    name: String,
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.radio {
  display: flex;
  margin-right: 1vw;
  align-items: center;
  align-items: flex-end;
  padding-top: 1rem;
}



.active {
  border: 0.15rem solid $main-col-42;
  border-radius: 1rem;
  padding: 0.2rem 0.6rem;
  box-shadow: 0.2rem 0.2rem 0.3rem $main-col;
  transition: 0.4s;
}
</style>
