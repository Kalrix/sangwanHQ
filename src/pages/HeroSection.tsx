import { Box, Heading, Text, Stack, Button, Link, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
  return (
    <Box
      minHeight="100vh"
      bg="#fbfbfb"
      color="gray.800"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
    >
      <Stack spacing={3} align="center" maxW="4xl" width="100%" textAlign="center">
        <Image
          src="/jhibli-home.png"
          alt="Udit Sangwan and Togo"
          maxW={{ base: '90%', md: '500px' }}
          height="auto"
          borderRadius="0"
          boxShadow="none"
        />

        <Heading fontSize="4xl" color="black">
          Hi, I'm Udit Sangwan
        </Heading>

        <Text fontSize="xl" maxW="4xl" color="gray.600" textAlign="center">
  2x Founder — Building <Link href="https://agrigator.co" isExternal color="blue.500" fontWeight="medium">Agrigator</Link> · 
  Ex– <Link href="https://in.linkedin.com/company/zipgo" isExternal color="blue.500" fontWeight="medium">ZipGo</Link>, 
  <Link href="https://mahindralogistics.com/b2b-express/" isExternal color="blue.500" fontWeight="medium"> Rivigo</Link> · 
  <Text as="span" fontWeight="bold">    IIM-A Alumni</Text><br />
Life’s the board. We’re all players. I decode marketing, psychology, and strategy — every day.</Text>


        <Stack direction={{ base: 'column', md: 'row' }} spacing={5}>
          <Button as={RouterLink} to="/blog" colorScheme="gray" variant="outline">
            Inside My Head
          </Button>
          <Link href="https://x.com/sangwanHQ" isExternal>
            <Button variant="ghost" colorScheme="gray">X / Twitter</Button>
          </Link>
          <Link href="https://sangwanhq.substack.com" isExternal>
            <Button variant="ghost" colorScheme="gray">Substack</Button>
          </Link>
          <Link href="https://instagram.com/sangwanHQ" isExternal>
            <Button variant="ghost" colorScheme="gray">Instagram</Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
