<template>
  <div class="seesaw">
    <div class="drop-box">
      <TheSeesawDropBox/>
    </div>

    <div class="swing-wrap" :style="{transform: 'rotate(' + getSwingAngle + 'deg)'}">
      <TheSeesawSwings/>
      <BaseRectangle width="100%" height="5px" id="swing"/>
    </div>

    <div class="pillar">
      <BaseTriangle size="40px"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheSeesawDropBox from './TheSeesawDropBox'
import TheSeesawSwings from './TheSeesawSwings'

export default {
  name: 'Seesaw',
  components: {
    TheSeesawDropBox,
    TheSeesawSwings
  },
  computed: {
    ...mapGetters([
      'getSwingAngle'
    ])
  }
}
</script>

<style scoped>
  .seesaw {
    max-width: 800px;
    margin: 0 auto;
  }
  .pillar {
    text-align: center;
  }
  .swing-wrap {
    -webkit-transition: -webkit-transform .8s ease-in-out;
    -ms-transition: -ms-transform .8s ease-in-out;
    transition: transform .8s ease-in-out;
  }
</style>
