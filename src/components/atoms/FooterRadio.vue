<template>
  <label :class="$style.radio">
    <input type="radio" :picked="picked" name="name" />
    <span :class="$style.text">{{ name }}</span>
  </label>
</template>

<script>
export default {
  name: "FooterRadio",
  props: {
    picked: Boolean,
    name: String,
    type: String,
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.radio {
  display: flex;
  margin-right: 1vw;
  align-items: center;
  width: 20%;
  align-items: flex-end;
  padding-top: 1rem;
}
.radio input[type="radio"] {
  opacity: 0;
}

.radio span {
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 1vw;
  margin-right: 0;
  line-height: 1rem;
}

.radio span:before {
  content: "";
  display: inline-block;
  width: 17px;
  height: 18px;
  position: absolute;
  left: 0.9rem;
  bottom: -0.3rem;
}

input[type="radio"]:checked ~ span {
  border: 0.15rem solid $main-col-42;
  border-radius: 1rem;
  padding: 0.2rem 0.6rem;
  box-shadow: 0.2rem 0.2rem 0.3rem $main-col;
  transition: 0.4s;
}
</style>
