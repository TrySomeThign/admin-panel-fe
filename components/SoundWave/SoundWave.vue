<template>
  <div
    class="box__container"
    :class="playSound ? 'play' : 'stop'"
    @click="handlePlaySound"
  >
    <div class="box box1" :class="playSound ? 'play' : 'stop'"></div>
    <div class="box box2" :class="playSound ? 'play' : 'stop'"></div>
    <div class="box box3" :class="playSound ? 'play' : 'stop'"></div>
    <div class="box box4" :class="playSound ? 'play' : 'stop'"></div>
    <div class="box box5" :class="playSound ? 'play' : 'stop'"></div>
  </div>

  <audio
    :autoplay="playSound"
    playsinline
    loop
    volume="0.75"
    ref="soundElement"
  >
    <source src="/sounds/BUON-HAY-VUI.mp3" />
  </audio>
</template>

<script setup lang="ts">
const playSound = ref<boolean>(false);
const soundElement = ref<HTMLAudioElement>();

const handlePlaySound = () => {
  if (soundElement.value && playSound.value) {
    playSound.value = false;
    soundElement.value?.pause();
  } else {
    playSound.value = true;
    soundElement.value?.play();
  }
};

</script>

<style scoped>
@import "./soundWave.scss";
</style>
