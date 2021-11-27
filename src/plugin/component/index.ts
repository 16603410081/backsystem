import cButton from './c-button.vue'
import cIcon from './c-icon.vue'
import { Component,Plugin } from 'vue'
const components:Map<string,Component>=new Map([
  ['c-button',cButton],['c-icon',cIcon]
])
const componentsPlugin:Plugin=app=>components.forEach((component,name)=>app.component(name,component))

export default componentsPlugin
