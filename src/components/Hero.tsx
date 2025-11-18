'use client'

import { Heading, Text, Button, Container, VStack } from '@chakra-ui/react'

export default function Hero() {
    return (
        <Container maxW="container.lg" centerContent py={20}>
            <VStack spacing={6} textAlign="center">
                <Heading as="h1" size="2xl">
                    Hi, I'm Upayan Chatterjee
                </Heading>
                <Text fontSize="xl">
                    A passionate developer building amazing things for the web.
                </Text>
                <Button colorScheme="yellow" size="lg" as="a" href="#projects">
                    View My Work
                </Button>
            </VStack>
        </Container>
    )
}
