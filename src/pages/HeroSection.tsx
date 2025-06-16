import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  Link,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaTwitter, FaBookOpen, FaLinkedin } from "react-icons/fa";
import BeamsBackground from "../components/BeamsBackground";
import ProfileCard from "../components/ProfileCard";

const accentColor = "#5894FF";
const glowColor = "#93A3DA";
const textColor = "#C9D1D9";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      minH="100vh"
      position="relative"
      overflow="hidden"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 16 }}
      justify="center"
      zIndex="1"
    >
      <BeamsBackground />

      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgImage="url('/indiabg.png')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        zIndex="-1"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%",
          h: "100%",
          bg: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={12}
        maxW="6xl"
        mx="auto"
        zIndex={1}
      >
        {/* Profile Card */}
        <Box flexShrink={0}>
          <ProfileCard
            name=""
            title=""
            handle="SangwanHQ"
            status="On X"
            contactText="Check X"
            avatarUrl="/im.jpg"
            miniAvatarUrl="/im.jpg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() =>
              window.open("https://x.com/SangwanHQ", "_blank")
            }
          />
        </Box>

        {/* Right Section */}
        <Box maxW="lg" textAlign={{ base: "center", md: "left" }}>
          <Heading
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            mb={4}
            lineHeight="1.2"
            color={accentColor}
          >
            Udit Sangwan
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} color={textColor} mb={6}>
            Building <Text as="span" color={accentColor}>agrigator</Text>.<br />
            Ex-Rivigo, ZipGo, Apnalot. <Text as="span" color={accentColor}>IIMA alum.</Text><br />
            I write, build, and bark (with my dog).<br />
            Cricket 💜, Rohit Sharma Fan.
          </Text>

          <Stack direction="row" spacing={4} mb={6} justify={{ base: "center", md: "flex-start" }}>
  <Link href="https://x.com/SangwanHQ" isExternal>
    <IconButton
      icon={<FaTwitter />}
      aria-label="Twitter"
      size="lg"
      variant="ghost"
      color={textColor}
      _hover={{ color: accentColor }}
    />
  </Link>
  <Link href="https://substack.com/@sangwanhq" isExternal>
    <IconButton
      icon={<FaBookOpen />}
      aria-label="Substack"
      size="lg"
      variant="ghost"
      color={textColor}
      _hover={{ color: accentColor }}
    />
  </Link>
  <Link href="https://linkedin.com/in/uditbsangwan" isExternal>
    <IconButton
      icon={<FaLinkedin />}
      aria-label="LinkedIn"
      size="lg"
      variant="ghost"
      color={textColor}
      _hover={{ color: accentColor }}
    />
  </Link>
</Stack>


          <Button
            size="lg"
            bg={accentColor}
            color="white"
            fontWeight="bold"
            _hover={{
              bg: "transparent",
              border: `2px solid ${accentColor}`,
              color: accentColor,
              transform: "translateY(-2px)",
              boxShadow: `0 0 20px ${glowColor}`,
            }}
            transition="all 0.3s ease-out"
            onClick={() => navigate("/n-theory")}
          >
            Explore Atom Loop →
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
