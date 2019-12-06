<template>
  <div class="seesaw-swings">
    <div class="object-wrap"
         :key="object.id"
         v-for="object in getSwingObjects"
         :style="{ left: object.left, right: object.right }">
      <component :is="objectComponentTypeMap(object.type)" :size="object.size" :text="object.weight"></component>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CONSTANTS from '@/configs/constants'

const { OBJECT_TYPES } = CONSTANTS

export default {
  name: 'SeesawSwings',
  computed: {
    ...mapGetters([
      'getSwingObjects',
      'getSwingAngle'
    ])
  },
  methods: {
    objectComponentTypeMap (type) {
      switch (type) {
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
  .seesaw-swings {
    position: relative;
  }
  .object-wrap {
    position: absolute;
    transform: translateY(-100%);
  }
</style>
