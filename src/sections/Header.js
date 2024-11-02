'use client';

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
} from '@chakra-ui/react';
import { ReactTyped as Typed } from 'react-typed';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionImageBox = motion(Box);
const MotionIcon = motion(Icon);

export default function HeaderSection() {
  const bgColor = 'blue.800';
  const blobColor = 'blue.600';

  return (
    <MotionBox
      bgGradient="linear(to-r, gray.900, gray.800)"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 8 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Container maxW="7xl">
        <Stack
          align="center"
          spacing={{ base: 16, md: 24 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
          textAlign="left"
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <MotionHeading
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              lineHeight={1.2}
              fontWeight={700}
              fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
              color="white"
            >
              <Text as="span" display="block">
                Hi, I’m
              </Text>
              <Text as="span" position="relative" color="blue.400">
                <Typed
                  strings={['Rishit Reddy Palle']}
                  typeSpeed={80}
                  backSpeed={50}
                  loop={false}
                />
              </Text>
            </MotionHeading>
            <Text color="gray.300" fontSize={{ base: 'lg', lg: 'xl' }}>
              I am a passionate problem-solver focused on creating meaningful tech solutions that
              blend innovation with real-world impact. My work is driven by curiosity and a
              commitment to continuous learning.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify="center"
            align="center"
            position="relative"
            w="full"
            mt={{ base: 8, md: 0 }}
            ms={{ base: 0, md: 6 }}
          >
            <Blob
              w={{ base: '100%', sm: '120%', md: '150%' }}
              h={{ base: '100%', sm: '120%', md: '150%' }}
              position="absolute"
              top={{ base: '-10%', md: '-20%' }}
              left={0}
              zIndex={-1}
              color={blobColor}
            />
            <MotionImageBox
              position="relative"
              height={{ base: '250px', md: '300px' }}
              rounded="2xl"
              boxShadow="2xl"
              width="full"
              overflow="hidden"
              bg={bgColor}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                alt="Rishit Reddy Palle"
                fit="cover"
                align="center"
                w="100%"
                h="100%"
                src="rishit.jpg" // Replace with your photo path
                objectPosition="center 30%"
              />
            </MotionImageBox>
          </Flex>
        </Stack>
      </Container>
    </MotionBox>
  );
}

const Blob = (props) => {
  return (
    <MotionIcon
      width="100%"
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </MotionIcon>
  );
};


