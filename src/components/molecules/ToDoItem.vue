<template>
    <div :class="$style.item">
        <TaskName />
        <Delete />
    </div>
</template>

<script>
import TaskName from "@/components/atoms/TaskName";
import Delete from "@/components/atoms/Delete";

export default {
    components: {
        TaskName,
        Delete
    },
    props: []
}
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.item {
    background: $bg-color-light ;
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1.2rem;
}
</style>