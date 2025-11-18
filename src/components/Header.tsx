'use client'

import { Flex, Heading, Spacer, IconButton, useColorMode, Link as ChakraLink } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex
            as="nav"
            p={4}
            align="center"
            wrap="wrap"
            position="sticky"
            top={0}
            zIndex={100}
            backdropFilter="blur(10px)"
            bg={colorMode === 'dark' ? 'rgba(29, 32, 33, 0.8)' : 'rgba(251, 241, 199, 0.8)'}
            color={colorMode === 'dark' ? 'gruvbox.dark.fg' : 'gruvbox.light.fg'}
            borderBottom="1px"
            borderColor={colorMode === 'dark' ? 'rgba(235, 219, 178, 0.1)' : 'rgba(60, 56, 54, 0.1)'}
        >
            <Heading size="md" letterSpacing="tight">
                <NextLink href="/" passHref>
                    Upayan Chatterjee
                </NextLink>
            </Heading>
            <Spacer />
            <Flex gap={6} align="center" fontWeight="medium">
                <ChakraLink as={NextLink} href="#about" _hover={{ color: 'gruvbox.dark.primary' }}>About</ChakraLink>
                <ChakraLink as={NextLink} href="#projects" _hover={{ color: 'gruvbox.dark.primary' }}>Projects</ChakraLink>
                <ChakraLink as={NextLink} href="#contact" _hover={{ color: 'gruvbox.dark.primary' }}>Contact</ChakraLink>
                <IconButton
                    aria-label="Toggle color mode"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                    variant="ghost"
                    _hover={{ bg: 'transparent', color: 'gruvbox.dark.primary' }}
                />
            </Flex>
        </Flex>
    )
}
