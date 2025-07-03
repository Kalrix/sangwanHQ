import {
  Box,
  Flex,
  Heading,
  Link,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';

type HeaderProps = {
  openOnLoad?: boolean;
};

const accentColor = "#000000";
const linkColor = "#333333";
const hoverColor = "#000000";
const borderColor = "#e5e5e5";

export default function Header({ openOnLoad }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hasOpened = useRef(false); // ✅ track modal open

  useEffect(() => {
  if (openOnLoad) {
    const timer = setTimeout(() => {
      onOpen();
    }, 200); // small delay ensures Chakra mounts modal internals

    return () => clearTimeout(timer); // clean up
  }
}, [openOnLoad, onOpen]);

  return (
    <>
      <Flex
        as="header"
        justify="space-between"
        align="center"
        px={{ base: 6, md: 12, lg: 16 }}
        py={{ base: 4, md: 6 }}
        bg="white"
        borderBottom={`1px solid ${borderColor}`}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="sticky"
      >
        <Heading
          as={RouterLink}
          to="/"
          fontWeight="bold"
          fontSize={{ base: 'xl', md: '2xl' }}
          userSelect="none"
          color={accentColor}
          letterSpacing="0.05em"
          _hover={{ textDecoration: 'none', color: hoverColor }}
        >
          SangwanHQ
        </Heading>

        <Flex as="nav" align="center" gap={{ base: 4, md: 8 }}>
          <Link
            as={RouterLink}
            to="/blog"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="normal"
            color={linkColor}
            _hover={{ color: hoverColor, textDecoration: 'none' }}
          >
            Thoughts
          </Link>

          <Link
            as={RouterLink}
            to="/case-study"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="normal"
            color={linkColor}
            _hover={{ color: hoverColor, textDecoration: 'none' }}
          >
            Case Study
          </Link>

          <Button
            size="sm"
            variant="outline"
            colorScheme="gray"
            onClick={onOpen}
          >
            Subscribe
          </Button>
        </Flex>
      </Flex>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="lg" fontWeight="bold">
            Subscribe to SangwanHQ
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box
              as="iframe"
              src="https://sangwanhq.substack.com/embed"
              width="100%"
              height="320px"
              style={{
                border: '1px solid #EEE',
                background: 'white',
                borderRadius: '6px'
              }}
              scrolling="no"
              frameBorder="0"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
