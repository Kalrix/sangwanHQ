import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  useToast,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

export default function LoginPage() {
  const toast = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    uniqueId: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { uniqueId, password } = formData;

    if (!uniqueId || !password) {
      toast({
        title: 'Both fields are required.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    // Simulate login request (replace with actual API call)
    setTimeout(() => {
      setLoading(false);
      toast({
        title: 'Login successful',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate('/nucleus'); // Redirect to dashboard or nucleus tool
    }, 1500);
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="black">
      <Box
        w={{ base: '90%', sm: '400px' }}
        p={8}
        borderRadius="lg"
        border="1px solid rgba(129, 231, 175, 0.2)"
        boxShadow="0 0 20px rgba(129, 231, 175, 0.1)"
        bg="rgba(15,15,15,0.8)"
      >
        <Heading mb={6} fontSize="2xl" color="#81E7AF" textAlign="center">
          Sign In to N-Theory
        </Heading>

        <form onSubmit={handleSubmit}>
          <FormControl id="uniqueId" mb={4} isRequired>
            <FormLabel color="white">Unique ID</FormLabel>
            <Input
              name="uniqueId"
              value={formData.uniqueId}
              onChange={handleChange}
              placeholder="e.g. bharat_builder01"
              color="white"
              bg="gray.800"
              border="1px solid #81E7AF40"
              _focus={{ borderColor: '#81E7AF' }}
            />
          </FormControl>

          <FormControl id="password" mb={6} isRequired>
            <FormLabel color="white">Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              color="white"
              bg="gray.800"
              border="1px solid #81E7AF40"
              _focus={{ borderColor: '#81E7AF' }}
            />
          </FormControl>

          <Button
            type="submit"
            width="100%"
            bg="#81E7AF"
            color="black"
            fontWeight="bold"
            isLoading={loading}
            _hover={{
              bg: "transparent",
              color: "#81E7AF",
              border: "2px solid #81E7AF",
            }}
          >
            Sign In
          </Button>
        </form>

        <Text mt={4} fontSize="sm" color="gray.400" textAlign="center">
          Don’t have an account?{' '}
          <Link as={RouterLink} to="/register" color="#81E7AF">
            Register now
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}
