import {extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    colors: {
      primary: '#214DB6'
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins'
    },
    global: {
      body: {
        bg: '#f5f5f5',
        color: '#222'
      }
    }
  }
})