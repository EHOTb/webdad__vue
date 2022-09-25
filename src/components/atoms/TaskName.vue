<template>
    <div>
        <input type="checkbox" :class="$style.custom" id="doIt" name="doIt">
        <label for="doIt1">Task1 </label>
    </div>
</template>

<script>
export default {
    name: "TaskName"
}
</script >


<style lang = "scss" module >
@import "../../assets/styles/var.scss";

.custom {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.custom+label::before {
    content: '';
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    flex-grow: 0;
    border: 0.15rem solid $grad-sec-col;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
}

.custom:checked+label::before {
    background-color: $grad-sec-col;
    background-image: url('../../assets/ok.svg');
    background-repeat: no-repeat;
    background-position: 40% 40%;
}

.custom+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
}
</style>
