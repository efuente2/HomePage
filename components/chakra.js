import {
  ChakraProvider,
  cookieStrongeManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
import theme from '../lib/theme'

export default funtion Chakra({ cookies, children}) {
  const colorModeManager = 
  typesof cookies === 'string'
      ? cookieStrongeManagerSSR(cookies)
      : localStorageManager

      return(
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
      )
}

export async function getServerSideProps({req }) {
  return {
    props: {
      cookies: req.header.cookie ?? ''
    }
  }
}

