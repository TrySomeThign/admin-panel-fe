<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <highlightjs language="javascript" :code="myCode" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "guest-layout",
});
const myCode = ref<string>(`
class Jan Baszczok {
  // I can, because I did.
  // My vast variety of skills is continuously expanding.
  constructor() {
    this.name = 'Jan Baszczok'
    this.dayOfBirthTimestamp = 602745592
    this.email = 'baszczok@yasio.dev'
  }
  workExperience() {
    return [
      { '2020-now' : 'Full-stack Developer/Owner at Pixel Lab' }
      { '2023-now' : 'Solutions Architect at Digitree Group S.A.' }
      { '2017-2023' : 'Full-stack Developer at Digitree Group S.A.' }
      { '2013-2017': 'Full-Stack Designer at Digitree Group S.A.' }
      { '2006-now' : 'Full-Stack Designer/developer at Yasio.dev' }
    ]
  }
  education() {
    return [
      { '2019-2023': 'Information Technology - HCM City University Of Transport' }
    ]
  }
  skills() {
    return [ 
      'HTML/CSS/JS', 
      'Vue', 
      'Node.js', 
      'Redis/NATS/RabbitMQ', 
      'Bootstrap/Tailwind' 
    ]
  }
}
`);
const myCodeConvert = function formattedCode() {
  const lines = myCode.value.split("\n");
  let codeWithNumbers = "";
  for (let i = 1; i < lines.length; i++) {
    codeWithNumbers += `${i <= 9 && i >= 1 ? `0${i}` : `${i}`} ${lines[i]}\n`;
  }

  myCode.value = codeWithNumbers;
  return codeWithNumbers;
};
onMounted(() => {
  myCodeConvert();
});
</script>

<style scoped></style>
