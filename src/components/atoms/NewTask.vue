<template>
    <div :class="[$style.item, $style.new]">
                <input :class="$style.input" type="text" name="text" id="newTask" placeholder="Add new task" />
            </div>
</template>

<script>
export default {
    name: "NewTask"
}
</script>

<style lang="scss" module>
@import "../../assets/styles/var.scss";

.item {
    background: $bg-color-light;
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1.2rem;
}
.new {
    display: block;
    text-align: center;
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

