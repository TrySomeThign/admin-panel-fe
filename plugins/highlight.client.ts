import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import highlightJS from "@highlightjs/vue-plugin";
import "highlight.js/styles/base16/twilight.css";

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("json", json);
  hljs.highlightAll();
  nuxtApp.vueApp.use(highlightJS);
});
