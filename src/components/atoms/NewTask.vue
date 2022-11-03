<template>
  <div :class="$style.wrapper">
    <input
      :class="$style.input"
      type="text"
      name="text"
      placeholder="Add new task"
      @keyup.enter="getValue"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: "NewTask",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    getValue() {
      this.$emit("getValue", this.value);
      this.value = "";
    },
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.wrapper {
  display: flex;
  justify-content: center;
  background: $bg-color-light;
  width: 80%;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1.2rem 1.2rem 1.2rem 10%;
  background-color: $bg-color-maxLight;
  color: $bg-color-dark;
  border: 0.2rem dashed $bg-color-dark;
}

.input {
  display: block;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: $bg-color-maxLight;
  border: none;
}

.input::placeholder {
  text-align: center;
  color: $bg-color-dark;
  font-size: 1.25rem;
}
</style>
