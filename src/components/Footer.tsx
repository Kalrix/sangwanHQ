import { Flex, Box, Link, Icon } from '@chakra-ui/react';

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
      bg="white"
      borderTop="1px solid #e5e5e5"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex={1}
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
        color="gray.600"
        _hover={{
          color: "black",
          textDecoration: 'none',
          '.diagonal-arrow-icon': {
            transform: 'translateX(2px) translateY(-2px)',
            color: "black"
          }
        }}
        transition="all 0.3s ease-out"
      >
        Udit Sangwan <DiagonalArrowIcon ml={1} boxSize={4} className="diagonal-arrow-icon" color="gray.500" />
      </Link>
    </Flex>
  );
}
