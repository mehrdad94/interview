<template>
  <div class="drop-box" id="dropBox">
    <div class="object-wrap"
         id="fallingObject"
         :style="{ top: getDropBoxObject.top, left: getDropBoxObject.left }">
        <component :is="objectComponentName" :size="getDropBoxObject.size" :text="getDropBoxObject.weight"></component>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CONSTANTS from '@/configs/constants'

const { OBJECT_TYPES } = CONSTANTS
export default {
  name: 'SeesawDropBox',
  computed: {
    ...mapGetters([
      'getDropBoxObject'
    ]),
    objectComponentName () {
      switch (this.getDropBoxObject.type) {
        case OBJECT_TYPES[0]:
          return 'BaseCircle'
        case OBJECT_TYPES[1]:
          return 'BaseSquare'
        default:
          return 'BaseTriangle'
      }
    }
  }
}

</script>

<style scoped>
  .drop-box {
    width: 50%;
    height: 400px;
    position: relative;
  }
  .object-wrap {
    position: absolute;
  }
</style>
