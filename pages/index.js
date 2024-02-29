import {Container, Box } from '@chakra-ui/react'

const Home  = () => (
  <layout>
    <Container>
      <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg{useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} css{{ backdropFilter: 'blur(10px)'}}>
      Hello, I&apos; a full Stack Developer from Atlanta Georgia 
      </Box>
    <Box display={{ md: 'flex'}}>
      <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ernesto Fuentes 
          </Heading>
          <p>Deveoper/ Photographer/ Artist</p>
        </Box>
        <Box flexShrink={0} mt={{ base:4, md: 0}} ml={{ md: 6}} textAlign="center">
          <Box boarderColor="whiteAlpha.800" boarderWidth={2} boarderStyle="solid" w="100px" h="100" display="inline-block" boarderRadius="full" overflow="hidden">
             <image src="" alt="profile image" width="100" height="100"/>
          </Box>
        </Box>
      </Box>

    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Work
        </Heading> 
        <Paragraph>
          Ernesto is a fullstack softwear Developer
          <Link href= "www.ernestofuentes.xyz"> My WebSite</Link>
        </Paragraph>
        <Box align="center" my={4}>
          <Button href="resume" scrole={false} rightIcon={<ChevronRightIcon/>} colorScheme="teal">My Resume</Button>
          )
        </Box>
      </Section>
    </Container>
    </layout>
)
  

export default Home
export { getServerSideProps} from '../components/chakra'
