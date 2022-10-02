<template>
  <div :class="$style.footer">
    <Pages/>
    <FooterRadio/>
    
  </div>
</template>

<script>
import Pages from "@/components/atoms/Pages";
import FooterRadio from "@/components/atoms/FooterRadio";
export default {
  components: {
    Pages,
    FooterRadio,
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.footer {
  background-color: $bg-color-dark;
  display: flex;
  justify-content: space-between;
  color: $main-col-42;
  height: 8vh;

  @media (max-width:850px) {
    height: 16vh;
  }
}


</style>
