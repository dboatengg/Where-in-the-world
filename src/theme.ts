
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ 
  config, 
  colors:{
    gray:{
      50:'#f0f2f4',
      100:'#d6d8da',
      200:'#bbbec2',
      300:'#9ea5ac',
      400:'#818b95',
      500: '#68727d',
      600:'#515860',
      700:'#3b3f44',
      800:'#232629',
      900:'#0b0d0f'
    }
  }
})

export default theme