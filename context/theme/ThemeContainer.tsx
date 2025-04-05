import React from 'react'
import Head from 'next/head'
import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core'
import theme from '../../styles/theme'

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ColorModeProvider value="light">
        <EmotionThemeProvider theme={theme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  )
}

export default ThemeContainer
