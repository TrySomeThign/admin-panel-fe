<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <highlightjs language="javascript" :code="myCode" />
  </div>

  <div class="info-description">
    I’m a passionate software engineer Developer with over a year of hands-on
    experience in building dynamic and responsive web applications. My expertise
    spans across various modern technologies including Node.js, Express.js,
    TypeScript, React, Next.js, Vue, and Nuxt.
    <div class="line-divide"></div>
    🌟 Programming Languages: JavaScript (ES6, Node.js), TypeScript
    <br />🌟 Frontend Development: HTML/CSS/SCSS <br />🌟 Frameworks and
    Libraries: Next.js, React.js Vue.js (Vue 3), Nuxt, Express.js <br />🌟
    CI/CD: Bitbucket pipeline, GitHub pipeline, Docker and Docker Compose
    <br />🌟 Databases: PostgreSQL, MySQL, MongoDB, Firestore <br />🌟
    Deployment: Google Cloud Service, Amazon Web Service, Heroku, Vercel,
    Railway, fly.io
    <br />
    <div class="line-divide"></div>
    Other Skills: <br />
    🚀 RESTful APIs, SendGrid, Brevo, Elastic, Twilio, Stripe, OAuth2, Google
    Cloud Function, SocketIO, In-depth git knowledge, <br />
    🚀 Frontend Libraries: Bootstrap, Tailwind, AntDesign, Quasar, VueX, Redux,
    Material UI, ChakraUI Testing: JestJS <br />
    🚀 Responsive Development: Expert in responsive, mobile-first development
    and mindset
    <br />
    🚀 Design (UI/UX) : Photoshtop, Adobe Illustrator, Figma <br />
    🚀 Language Skills: Intermediate English (Good reading/writing skills, basic
    verbal communication)
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

<style scoped>
.info-description {
  margin-top: 60px;
  font-size: 30px;
  font-weight: 500;
  color: var(--color-silver);
  font-family: "supply", sans-serif;
}
.line-divide {
  width: 100%;
  height: 1px;
  background-color: var(--color-silver);
  margin: 50px 0;
}
</style>
