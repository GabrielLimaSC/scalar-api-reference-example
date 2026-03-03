import '@scalar/api-reference/style.css' 
import { createApiReference } from '@scalar/api-reference'
import spec from './openapi.json'

createApiReference('#app', {
  content: spec,
  theme: 'default',
  darkMode: true,
})