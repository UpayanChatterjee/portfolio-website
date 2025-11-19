'use client'

import { Box, Heading, Text, Badge, Link, VStack, HStack, Icon, useColorModeValue } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

interface ProjectCardProps {
    name: string
    description: string
    language: string
    stargazers_count: number
    html_url: string
}

export default function ProjectCard({ name, description, language, stargazers_count, html_url }: ProjectCardProps) {
    const bg = useColorModeValue('gruvbox.light.surface', 'gruvbox.dark.surface')
    const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
    const hoverBorderColor = useColorModeValue('gruvbox.light.primary', 'gruvbox.dark.primary')
    const headingHoverColor = useColorModeValue('gruvbox.light.primary', 'gruvbox.dark.primary')
    const textColor = useColorModeValue('gray.600', 'gray.400')
    const statsColor = useColorModeValue('gray.600', 'gray.500')

    return (
        <Box
            as="a"
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            p={6}
            bg={bg}
            borderColor={borderColor}
            _hover={{
                transform: 'translateY(-4px)',
                shadow: 'xl',
                borderColor: hoverBorderColor,
            }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            position="relative"
            role="group"
        >
            <VStack align="start" spacing={4} height="100%">
                <Heading size="md" _groupHover={{ color: headingHoverColor }} transition="color 0.2s">
                    {name}
                </Heading>
                <Text noOfLines={2} color={textColor} fontSize="sm" flex={1}>
                    {description}
                </Text>
                <HStack justify="space-between" w="full" pt={2}>
                    <Badge
                        colorScheme="yellow"
                        variant="subtle"
                        px={2}
                        py={0.5}
                        rounded="md"
                        textTransform="none"
                        letterSpacing="wide"
                    >
                        {language}
                    </Badge>
                    <HStack spacing={1} color={statsColor}>
                        <Icon as={StarIcon} color="yellow.500" boxSize={3} />
                        <Text fontSize="sm">{stargazers_count}</Text>
                    </HStack>
                </HStack>
            </VStack>
        </Box>
    )
}
