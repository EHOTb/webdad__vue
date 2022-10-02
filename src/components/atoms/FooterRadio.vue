<template>
   <div :class="$style.sort">
      <div :class="$style.radio">
        <input id="radio-1" type="radio" name="radio" value="1" checked>
        <label for="radio-1" :class="$style.text">All</label>
      </div>
      <div :class="$style.radio">
        <input id="radio-2" type="radio" name="radio" value="2">
        <label for="radio-2" :class="$style.text">Active</label>
      </div>
      <div :class="$style.radio">
        <input id="radio-3" type="radio" name="radio" value="3">
        <label for="radio-3" :class="$style.text">Completed</label>
      </div>
    </div>
</template>

<script>
export default {
    name: "FooterRadio",
};
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.sort {
  display: flex;
  padding-right: 2vw;
  gap: 2rem;
  align-items: center;

  @media(max-width:1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width:850px) {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .radio input[type=radio] {
    opacity: 0;
  }

  .radio label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 1vw;
    margin-right: 0;
    line-height: 1rem;
  }

  .radio label:before {
    content: "";
    display: inline-block;
    width: 17px;
    height: 18px;
    position: absolute;
    left: 0.9rem;
    bottom: -0.3rem;
  }

  input[type=radio]:checked~.text {
    border: 0.15rem solid $main-col-42;
    border-radius: 1rem;
    padding: 0.2rem 0.6rem;
    box-shadow: 0.2rem 0.2rem 0.3rem $main-col;
    transition: 0.4s;
  }
}
</style>
