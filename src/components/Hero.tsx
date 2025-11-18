'use client'

import { Heading, Text, Button, Container, VStack } from '@chakra-ui/react'

export default function Hero() {
    return (
        <Container maxW="container.lg" centerContent py={32}>
            <VStack spacing={8} textAlign="center">
                <Heading as="h1" size="4xl" letterSpacing="tighter" lineHeight="1.2">
                    Hi, I'm <Text as="span" color="gruvbox.dark.primary">Upayan Chatterjee</Text>
                </Heading>
                <Text fontSize="2xl" maxW="2xl" color="gray.500" _dark={{ color: 'gray.400' }}>
                    A passionate developer building amazing things for the web.
                </Text>
                <Button
                    colorScheme="yellow"
                    size="lg"
                    px={8}
                    fontSize="md"
                    rounded="full"
                    as="a"
                    href="#projects"
                    _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                    transition="all 0.2s"
                >
                    View My Work
                </Button>
            </VStack>
        </Container>
    )
}
