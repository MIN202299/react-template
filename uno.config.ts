import { defineConfig, presetAttributify, presetIcons, presetUno, transformerAttributifyJsx } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'vertical-align': 'middle',
      },
    }),
    presetAttributify(),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
},

)
