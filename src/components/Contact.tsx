'use client'

import { Heading, Text, Container, Link } from '@chakra-ui/react'

export default function Contact() {
    return (
        <Container maxW="container.lg" py={10} id="contact">
            <Heading as="h2" size="xl" mb={6}>Contact</Heading>
            <Text fontSize="lg" mb={4}>
                Feel free to reach out to me via email at <Link href="mailto:upayanc9@proton.me" color="blue.500">upayanc9@proton.me</Link>.
            </Text>
            <Text fontSize="lg">
                Connect with me on social media:
                <Link href="https://www.instagram.com/upayan_chatterjee/" color="pink.500" ml={2} isExternal>Instagram</Link>
                <Link href="https://www.linkedin.com/in/upayan-chatterjee-329a2b23b/" color="blue.600" ml={2} isExternal>LinkedIn</Link>
            </Text>
        </Container>
    )
}
