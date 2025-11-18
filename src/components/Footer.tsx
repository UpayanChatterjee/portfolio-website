'use client'

import { Box, Text, Flex, Link, useColorMode } from '@chakra-ui/react'

export default function Footer() {
    const { colorMode } = useColorMode()
    return (
        <Box as="footer" py={4} textAlign="center" bg={colorMode === 'dark' ? 'gruvbox.dark.bg' : 'gruvbox.light.bg'} color={colorMode === 'dark' ? 'gruvbox.dark.fg' : 'gruvbox.light.fg'}>
            <Text>&copy; {new Date().getFullYear()} Upayan Chatterjee. All rights reserved.</Text>
            <Flex justify="center" gap={4} mt={2}>
                <Link href="https://github.com/UpayanChatterjee" isExternal>GitHub</Link>
                <Link href="https://linkedin.com/in/your-profile" isExternal>LinkedIn</Link>
            </Flex>
        </Box>
    )
}
