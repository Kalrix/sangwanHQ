// src/pages/NTheoryPage.tsx
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
  VStack,
} from '@chakra-ui/react';

export default function NTheoryPage() {
  return (
    <Flex>
      {/* Sticky Vertical Tabs */}
      <Box position="sticky" top={0} height="100vh" width="250px" bg="white" boxShadow="md">
        <Tabs variant="enclosed" orientation="vertical" colorScheme="teal" size="md" mt={8} px={{ base: 4, md: 16 }}>
          <TabList flexDirection="column" gap={4}>
            <Tab>Nucleus</Tab>
            <Tab>Nuance</Tab>
            <Tab>Native</Tab>
            <Tab>Nexus</Tab>
            <Tab>Nonlinear</Tab>
          </TabList>
        </Tabs>
      </Box>

      {/* Tab Panels (Empty content for now) */}
      <Box flex="1" px={{ base: 4, md: 16 }} py={8}>
        <Tabs variant="enclosed" colorScheme="teal" size="md">
          <TabPanels>
            {/* Empty content for Nucleus */}
            <TabPanel>
              <Box p={4}>
                <p>Module content will go here.</p>
              </Box>
            </TabPanel>

            {/* Empty content for Nuance */}
            <TabPanel>
              <Box p={4}>
                <p>Module content will go here.</p>
              </Box>
            </TabPanel>

            {/* Empty content for Native */}
            <TabPanel>
              <Box p={4}>
                <p>Module content will go here.</p>
              </Box>
            </TabPanel>

            {/* Empty content for Nexus */}
            <TabPanel>
              <Box p={4}>
                <p>Module content will go here.</p>
              </Box>
            </TabPanel>

            {/* Empty content for Nonlinear */}
            <TabPanel>
              <Box p={4}>
                <p>Module content will go here.</p>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
