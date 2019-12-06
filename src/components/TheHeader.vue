<template>
  <nav>
    <button v-if="isPaused" @click="resumeDropBoxObjectFalling" class="btn-resume" key="resume">
      Resume
    </button>

    <button v-else @click="pauseDropBoxObjectFalling" class="btn-pause" key="pause" >
      Pause
    </button>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'TheHeader',
  computed: {
    ...mapState([
      'isPaused'
    ])
  },
  methods: {
    ...mapActions([
      'resumeDropBoxObjectFalling',
      'pauseDropBoxObjectFalling'
    ])
  }
}
</script>

<style scoped>

</style>
