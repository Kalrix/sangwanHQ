import { Box, Heading, Text, VStack } from '@chakra-ui/react';

interface LayerCardProps {
  name: string;
  color: string;
  description: string;
  onClick: () => void;
}

const LayerCard = ({ name, color, description, onClick }: LayerCardProps) => {
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      bg="whiteAlpha.100"
      borderRadius="lg"
      p={6}
      border="1px solid"
      borderColor={color}
      _hover={{ bg: 'whiteAlpha.200' }}
      transition="0.2s"
    >
      <VStack align="start" spacing={3}>
        <Heading size="md" color={color}>
          {name}
        </Heading>
        <Text color="whiteAlpha.800">{description}</Text>
      </VStack>
    </Box>
  );
};

export default LayerCard;
