'use client'

import { Flex, Heading, Spacer, IconButton, useColorMode, Link as ChakraLink } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex as="nav" p={4} align="center" wrap="wrap" bg={colorMode === 'dark' ? 'gruvbox.dark.bg' : 'gruvbox.light.bg'} color={colorMode === 'dark' ? 'gruvbox.dark.fg' : 'gruvbox.light.fg'}>
            <Heading size="md">
                <NextLink href="/" passHref>
                    Upayan Chatterjee
                </NextLink>
            </Heading>
            <Spacer />
            <Flex gap={4} align="center">
                <ChakraLink as={NextLink} href="#about">About</ChakraLink>
                <ChakraLink as={NextLink} href="#projects">Projects</ChakraLink>
                <ChakraLink as={NextLink} href="#contact">Contact</ChakraLink>
                <IconButton
                    aria-label="Toggle color mode"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                    variant="ghost"
                />
            </Flex>
        </Flex>
    )
}
