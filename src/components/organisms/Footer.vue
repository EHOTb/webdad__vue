<template>
  <div :class="$style.footer">
    <Pages />
    <div :class="$style.radio">
      <FooterRadio
        v-for="(sort, index) in filters"
        :key="index"
        :name="sort"
        :isActive="$store.state.filter == sort"
        @changeFilter="() => activeTab(sort)"
      />
    </div>
  </div>
</template>

<script>
import Pages from "@/components/atoms/Pages";
import FooterRadio from "@/components/atoms/FooterRadio";

export default {
  data() {
    return {
      filters: ["All", "Active", "Completed"],
    };
  },
  components: {
    Pages,
    FooterRadio,
  },
  computed: {},
  methods: {
    activeTab(tabName) {
      this.$store.commit("setActiveTab", tabName);
    },
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
