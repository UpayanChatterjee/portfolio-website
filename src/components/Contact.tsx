'use client'

import { Heading, Text, Container, Link } from '@chakra-ui/react'

export default function Contact() {
    return (
        <Container maxW="container.lg" py={10} id="contact">
            <Heading as="h2" size="xl" mb={6}>Contact</Heading>
            <Text fontSize="lg">
                Feel free to reach out to me via email at <Link href="mailto:example@example.com" color="blue.500">example@example.com</Link> or connect with me on social media.
            </Text>
        </Container>
    )
}
