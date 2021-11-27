<template>
  <button class="c-button">
    <slot>添加文本</slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.c-button {
  font-size: 17px;
  padding: 0.1em 1.4em;
  border-radius: 4px;
  background-color: #b9edf8;
  border: 1.5px solid #587498;
  cursor: pointer;
  user-select: none;
  transition: all 0.5s ease-in-out;
  outline: none;
}

.c-button:hover {
  background-color: #fcfcfc;
  box-shadow: 0px 0px 8px 0px #3399ff;
  transition: all 0.5s ease-in-out;
}
</style>