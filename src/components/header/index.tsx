import { Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

export function Header() {
    const { asPath } = useRouter()

    return (
        <Flex
            as="header"
            width="100%"
            maxWidth={1080}
            height="5rem"
            justify="center"
            align="center"
            mx="auto"
            position="relative"
        >
            {
                asPath !== '/' && (
                    <ChakraLink                        
                        position="absolute"
                        left="0"                    
                    >
                        <Link href="/">
                            <ChevronLeftIcon w={8} h={8}/>
                        </Link>
                    </ChakraLink>
                )
            }

            <Link href="/">
                <Image
                    htmlWidth="150"
                    src="/images/logo.png"
                    alt="WorldTrip"
                />
            </Link>
        </Flex>
    )
}