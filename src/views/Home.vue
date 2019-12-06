<template>
  <div>
    <TheHeader/>
    <Seesaw/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Seesaw from '@/components/TheSeesaw'
import TheHeader from '@/components/TheHeader'

export default {
  name: 'home',
  components: {
    Seesaw,
    TheHeader
  },
  methods: {
    ...mapActions([
      'moveObjectByArrowLeft',
      'moveObjectByArrowRight'
    ]),
    onWindowKeydown (event) {
      const key = event.key

      if (key === 'ArrowLeft') {
        this.moveObjectByArrowLeft()
      } else if (key === 'ArrowRight') {
        this.moveObjectByArrowRight()
      }
    }
  },
  created () {
    window.addEventListener('keydown', this.onWindowKeydown)
  },
  destroyed () {
    window.removeEventListener('keydown', this.onWindowKeydown)
  }
}
</script>
