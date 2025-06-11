import { Flex, Box, Link, Icon } from '@chakra-ui/react';

const vibrantAccent = "#81E7AF";

const DiagonalArrowIcon = (props: any) => (
  <Icon
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 17L17 7" />
    <path d="M17 7H9" />
    <path d="M17 7V15" />
  </Icon>
);

export default function Footer() {
  return (
    <Flex
      as="footer"
      py={{ base: 4, md: 6 }}
      px={{ base: 6, md: 12, lg: 16 }}
      justify="space-between"
      align="center"
      fontSize={{ base: 'xs', md: 'sm' }}
      color="gray.600"
      opacity={0.7}
      userSelect="none"
      bg="rgba(0,0,0,0.8)"
      backdropFilter="blur(8px)"
      borderTop="1px solid rgba(129, 231, 175, 0.05)"
      boxShadow="0 -2px 10px rgba(0,0,0,0.2)"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex={1} // 👈 keep it low so your nav with zIndex={10/9999} stays above
      height="64px"
    >
      <Box>
        © {new Date().getFullYear()} SangwanHQ. All rights reserved.
      </Box>
      <Link
        href="https://twitter.com/uditsangwan"
        isExternal
        display="flex"
        alignItems="center"
        fontSize={{ base: 'xs', md: 'sm' }}
        color="gray.500"
        _hover={{
          color: "white",
          textDecoration: 'none',
          '.diagonal-arrow-icon': {
            transform: 'translateX(2px) translateY(-2px)',
            color: "white"
          }
        }}
        transition="all 0.3s ease-out"
      >
        Udit Sangwan <DiagonalArrowIcon ml={1} boxSize={4} className="diagonal-arrow-icon" color="gray.500" />
      </Link>
    </Flex>
  );
}
