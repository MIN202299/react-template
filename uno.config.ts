import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, transformerAttributifyJsx } from 'unocss'

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
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'AlibabaPuHuiTi-2',
      },
    }),
    presetAttributify(),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
},

)
