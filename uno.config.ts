import { defineConfig, transformerVariantGroup } from 'unocss'
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  rules: [],
  shortcuts: [
    {
      full: 'w-full h-full',
      'abs-full': 'absolute top-0 left-0 w-full h-full',
      'flex-center': 'flex items-center justify-center',
      'abs-center': 'absolute top-50% left-50% translate--50%',
    },
  ],
  transformers: [transformerVariantGroup()],
})
