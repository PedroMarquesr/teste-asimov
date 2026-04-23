'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'

const system = createSystem(defaultConfig, {
  theme: {

    breakpoints: {
      sm: '480px',
      md: '998px',
      lg: '1024px',
      xl: '1280px',
    },
    tokens: {


      colors: {
        brand: {
          green: { value: '#B9FF66' },
          dark: { value: '#191A23' },
          gray: { value: '#F3F3F3' },
          black: { value: '#000000' },
        },
      },
      fonts: {
        heading: { value: "'Space Grotesk', sans-serif" },
        body: { value: "'Space Grotesk', sans-serif" },
      },
      fontSizes: {
        h1: { value: '60px' },
        h2: { value: '40px' },
        h3: { value: '30px' },
        h4: { value: '20px' },
        p: { value: '18px' },
        h1Mob: { value: '43px' },
        h2Mob: { value: '36px' },
        h3Mob: { value: '26px' },
        h4Mob: { value: '18px' },
        pMob: { value: '16px' },
      },
      spacing: {
        sectionX: { value: '100px' },
        sectionY: { value: '70px' },
      },
    },
  },
})

export default function Providers({ children }) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  )
}