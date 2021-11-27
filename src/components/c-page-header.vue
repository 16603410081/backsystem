<template>
    <header class="c-page-header">
     <template v-if="isShowQuit">
      <c-icon class="icon-arrowLeft-fill" @click="quit"></c-icon>
      <span>返回</span>
      <i>|</i>
     </template>
      <h2>
        <slot>
        </slot>
      </h2>
       </header>
</template>

<script lang="ts">
import {useQuit} from '../helper/fn';

export default{
    props: {
    isShowQuit: {
      type: Boolean,
      default: false,
    }
     },
      setup() {
       const  quit=useQuit()
      return {
          quit
        }
      }
}
</script>

<style scoped>
 .c-page-header {
  display: flex;
  align-items: center;
  margin: 5px 0 10px 0;
}

.c-page-header > * {
  margin-left: 5px;
  font-weight: 500;
}

.c-page-header > h2 {
  font-size: 18px;
  font-weight: 500;
}
.icon-arrowLeft-fill {
  cursor: pointer;
}
</style>