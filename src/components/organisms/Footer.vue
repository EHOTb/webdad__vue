<template>
  <div :class="$style.footer">
    <Pages />
    <div
      :class="$style.radio"
      v-for="option in options"
      :key="option.id"
      :title="option.title"
    >
      <FooterRadio
        v-for="(sort, index) in footerSort"
        :key="sort.id"
        :picked="option.picked[index]"
        :name="option.title[index]"
        :type="option.radio"
      />
    </div>
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
  data() {
    return {
      footerSort: [
        {
          id: "1",
          type: "radio",
        },
        {
          id: "2",
          type: "radio",
        },
        {
          id: "3",
          type: "radio",
        },
      ],
      options: [
        {
          title: ["All", "Active", "Completed"],
          picked: [true, false, false],
          type: "radio",
        },
      ],
    };
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

  @media (max-width: 1025px) {
    height: 13vh;
  }
  .radio {
    display: flex;
    align-items: flex-end;
    padding-bottom: 3vh;
    @media (max-width: 1025px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
