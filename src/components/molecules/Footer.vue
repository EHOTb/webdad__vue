<template>
    <div :class="$style.footer">
        <Pages />

        <div :class="$style.sort">
            <FooterRadio />
        </div>
    </div>
</template>

<script>
import Pages from "@/components/atoms/Pages";
import FooterRadio from "@/components/atoms/FooterRadio";
export default {
    components: {
        Pages, FooterRadio
    }
}

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


}
</style>