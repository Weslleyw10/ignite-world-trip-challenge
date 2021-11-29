import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';
import { Flex, Box, Image, Heading, Text, Divider, Center, useBreakpointValue, Stack } from '@chakra-ui/react'

import Link from 'next/link'

import 'swiper/css';
import 'swiper/css/scrollbar'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

SwiperCore.use([
  Pagination,
  Autoplay,
  EffectFade
]);

interface IResponsiveProps {
  textAlign: string;
}

import { Header } from '../components/header'
import React from 'react';

export default function Home() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const responsiveProps: IResponsiveProps = {
    textAlign: isWideVersion ? 'left' : 'center'
  }

  return (
    <Flex
      width="100%"
      flex="1"
      justify="center"
      flexDirection="column"
    >
      <Header />

      <Box
        width="100%"
        minHeight="330px"
        backgroundImage="url('/images/background.png')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Box
          width="100%"
          maxWidth={1080}
          mx="auto"
          align="center"
          padding={["0 2rem"]}
          position="relative"
        >
          <Flex
            width="100%"
            minHeight="330px"
            flex="1"
            flexDirection="column"
            justify="center"
            textAlign={responsiveProps.textAlign}
          >
            <Heading
              as="h1"
              // width="100%"
              size="lg"
              fontSize="36px"
              fontWeight="500"
              color="gray.200"
              mb="20px"
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>

            <Text
              fontSize="20px"
              fontWeight="400"
              color="gray.300"
            >
              Chegou a hora de tirar do papel a viagem que você <br />sempre sonhou.
            </Text>
          </Flex>

          {isWideVersion && (
            <Image
              src="/images/airplane.png"
              position="absolute"
              right="0"
              bottom="-45px"
            />
          )}
        </Box>
      </Box>

      <Stack
        spacing="2rem"
        w="100%"
        maxWidth={1080}
        padding="4rem 2rem"
        mx="auto"
        direction={["column", "row"]}
        justify="space-between"
        align="center"
      >
        <Box
          align="center"
          justify="center"
        >
          <Image
            boxSize="100px"
            src="/images/cocktail.png"
          />
          <Text
            fontWeight="bold"
            mt="20px"
          >
            vida noturna
          </Text>
        </Box>
        <Box
          align="center"
          justify="center"
        >
          <Image
            boxSize="100px"
            src="/images/surf.png"
          />
          <Text
            fontWeight="bold"
            mt="20px"
          >
            praia
          </Text>
        </Box>
        <Box
          align="center"
          justify="center"
        >
          <Image
            boxSize="100px"
            src="/images/building.png"
          />
          <Text
            fontWeight="bold"
            mt="20px"
          >
            moderno
          </Text>
        </Box>
        <Box
          align="center"
          justify="center"
        >
          <Image
            boxSize="100px"
            src="/images/museum.png"
          />
          <Text
            fontWeight="bold"
            mt="20px"
          >
            clássico
          </Text>
        </Box>
        <Box
          align="center"
          justify="center"
        >
          <Image
            boxSize="100px"
            src="/images/earth.png"
          />
          <Text
            fontWeight="bold"
            mt="20px"
          >
            e mais...
          </Text>
        </Box>
      </Stack>

      <Divider
        width="100px"
        borderColor="gray.700"
        borderWidth="3px"
        mx="auto"
        mb="30px"
      />

      <Flex
        width="100%"
        mx="auto"
        maxWidth={1080}
        justify="center"
        align="center"
        textAlign="center"
        padding="10px 0 80px 0"
      >
        <Heading as="h2">
          Vamos nessa? <br /> Então escolha seu continente
        </Heading>
      </Flex>

      <Flex
        width="100%"
        maxWidth={1080}
        height="350px"
        mx="auto"

        bg="gray.300"
        mb="30px"

      >
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          centeredSlides={true}
          effect={'fade'}
          loop={true}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}

          pagination={{
            clickable: true,
            dynamicBullets: true
          }}

        >
          <Center>
            <SwiperSlide>
              <Link href="/continent/europe">
                <Image
                  src="https://images.unsplash.com/photo-1605136260265-6752c5441a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                  objectFit="cover"
                  boxSize="100%"
                />
              </Link>
            </SwiperSlide>
          </Center>

          <Center>
            <SwiperSlide>
              <Link href="/continent/europe">
                <Image
                  src="https://images.unsplash.com/photo-1627754332050-f8daf87fc5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  objectFit="cover"
                  boxSize="100%"
                />
              </Link>
            </SwiperSlide>
          </Center>

          <Center>
            <SwiperSlide>
              <Link href="/continent/europe">
                <Image
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80"
                  alt=""
                  objectFit="cover"
                  boxSize="100%"
                />
              </Link>
            </SwiperSlide>
          </Center>
        </Swiper>
      </Flex>
    </Flex>
  )
}
