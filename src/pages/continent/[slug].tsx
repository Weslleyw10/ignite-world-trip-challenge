import React from 'react'
import { Flex, Image, Text, Box, Stack, useBreakpointValue, Wrap, WrapItem, Tooltip, Icon } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'

import { Header } from '../../components/header'

export default function Continent() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const citys = [1, 2, 3, 4, 5, 6, 7]


    return (
        <Flex
            flex="1"
            justify="center"
            flexDirection="column"
        >
            <Header />

            <Flex
                width="100%"
                height={["300px", "500px"]}
                position="relative"
                backgroundImage="url('https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                justify="center"
                align="flex-end"
            >

                <Box
                    width="100%"
                    height={["300px", "500px"]}
                    opacity=".5"
                    position="absolute"
                    zIndex="90"
                    bg="gray.900"
                ></Box>

                <Box
                    width="100%"
                    height="100px"
                    maxWidth={1080}
                    padding="0 2rem"
                    mx="auto"
                    zIndex="91"
                >
                    <Text
                        as="h1"
                        color="gray.200"
                        fontSize="48px"
                        fontWeight="600"
                    >
                        Europa
                    </Text>
                </Box>
            </Flex>

            <Flex
                as="main"
                padding="1rem"
                flexDirection="column"
            >
                <Stack
                    width="100%"
                    spacing={["4rem", "4rem"]}
                    maxWidth={1080}
                    mx="auto"
                    flex="2"
                    padding={["60px 2rem", "80px 2rem"]}
                    direction={["column", "row"]}
                    justify="center"
                >
                    <Text
                        as="p"
                        width={["100%", "50%"]}
                        align="justify"
                        fontSize={["16px", "18px"]}
                    >
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
                        a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
                        o Cáucaso, e o mar Negro a sudeste...
                    </Text>

                    <Flex
                        width={["100%", "50%"]}
                        justify="space-between"
                        align="center"
                    >
                        <Box
                            align="center"
                            display="flex"
                            flexDirection="column"
                        >
                            <Text
                                as="span"
                                fontSize={["42px", "48px"]}
                                fontWeight="bold"
                                color="yellow.500"
                                lineHeight="40px"
                            >
                                50
                            </Text>

                            <Text
                                as="span"
                                fontSize={["18px", "24px"]}
                                fontWeight="bold"
                                color="gray.500"
                                lineHeight="40px"
                            >
                                países
                            </Text>
                        </Box>

                        <Box
                            align="center"
                            display="flex"
                            flexDirection="column"
                        >
                            <Text
                                as="span"
                                fontSize={["42px", "48px"]}
                                fontWeight="bold"
                                color="yellow.500"
                                lineHeight="40px"
                            >
                                50
                            </Text>

                            <Text
                                as="span"
                                fontSize={["18px", "24px"]}
                                fontWeight="bold"
                                color="gray.500"
                                lineHeight="40px"
                            >
                                países
                            </Text>
                        </Box>

                        <Box
                            align="center"
                            display="flex"
                            flexDirection="column"
                        >
                            <Text
                                as="span"
                                fontSize={["42px", "48px"]}
                                fontWeight="bold"
                                color="yellow.500"
                                lineHeight="40px"
                            >
                                27
                            </Text>

                            <Text
                                as="span"
                                fontSize={["18px", "24px"]}
                                fontWeight="bold"
                                color="gray.500"
                                lineHeight="40px"
                            >
                                Cidades +100
                                <Tooltip
                                    label="Hey, I'm here!"
                                    aria-label="A tooltip">
                                    <Icon
                                        as={WarningIcon}
                                        w={5}
                                        h={5}
                                        color="gray.500"
                                        paddingLeft="4px"
                                    />
                                </Tooltip>
                            </Text>

                        </Box>
                    </Flex>
                </Stack>

                <Flex
                    w="100%"
                    maxWidth={1080}
                    mx="auto"
                    flexDirection="column"
                    padding="0 2rem"
                >
                    <Text
                        as="h2"
                        fontSize={["32px", "36px"]}
                        fontWeight="600"
                        color="gray.600"
                        marginBottom="2rem"
                    >
                        Cidades +100
                    </Text>

                    <Wrap
                        spacing="1rem"
                        align='center'
                    >
                        {
                            citys.map(city => (
                                <WrapItem
                                    key={city}
                                    as="article"
                                    width={["100%", "31.75%"]}
                                >
                                    <div>
                                        <Flex as="header">
                                            <Image
                                                src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                                alt=""
                                                objectFit="cover"
                                            />
                                        </Flex>
                                        <Flex
                                            as="footer"
                                            borderWidth="1px"
                                            borderColor="gray.300"
                                            padding="1rem"

                                            align="center"
                                            justify="space-between"
                                        >
                                            <Flex
                                                flexDirection="column"
                                            >
                                                <Text
                                                    color="gray.900"
                                                    fontSize="20px"

                                                >
                                                    Londres
                                                </Text>
                                                <Text
                                                    color="gray.400"
                                                    fontSize="16px"
                                                >
                                                    Reino Unido
                                                </Text>
                                            </Flex>

                                            <Image
                                                src="https://media.istockphoto.com/photos/flag-of-england-picture-id854115776?k=20&m=854115776&s=612x612&w=0&h=Q9umhsdZxyIQbyU7rS1cXON304Dmo4uRbcgj46WbL5A="
                                                alt=""
                                                borderRadius="full"
                                                boxSize="30px"
                                            />

                                        </Flex>
                                    </div>
                                </WrapItem>

                            ))
                        }

                    </Wrap>
                </Flex>

            </Flex>

        </Flex>
    )
}