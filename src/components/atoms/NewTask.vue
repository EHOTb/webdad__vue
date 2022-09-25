<template>
    <div :class="$style.new">
        <input class="item__input" type="text" name="text" id="newTask" placeholder="Add new task">
    </div>
</template>

<script>
export default {
    name: "NewTask"
}
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.new {
    background: $bg-color-light ;
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1.2rem;
    display: block;
    text-align: center;
    background-color: $bg-color-maxLight;
    color: $bg-color-dark;
    border: 0.2rem dashed $bg-color-dark;

}

.new::placeholder {
    text-align: center;
    color: $bg-color-dark;
    font-size: 1.25rem;

}
</style>

