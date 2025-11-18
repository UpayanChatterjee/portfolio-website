'use client'

import { Heading, Text, Container } from '@chakra-ui/react'

export default function About() {
    return (
        <Container maxW="container.lg" py={10} id="about">
            <Heading as="h2" size="xl" mb={6}>About Me</Heading>
            <Text fontSize="lg">
                I am a developer with a passion for creating efficient and scalable applications.
                I love open source and contributing to the community.
            </Text>
        </Container>
    )
}
