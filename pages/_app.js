import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/layouts/main.js'

const Website = ({ components, pageProps, router }) => {
  return (
  <ChakraProvider>
      <Layout router={router}>
        <component {...pageProps} key={router.route}/>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
