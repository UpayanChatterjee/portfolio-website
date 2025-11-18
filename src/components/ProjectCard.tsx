'use client'

import { Box, Heading, Text, Badge, Link, VStack, HStack, Icon } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

interface ProjectCardProps {
    name: string
    description: string
    language: string
    stargazers_count: number
    html_url: string
}

export default function ProjectCard({ name, description, language, stargazers_count, html_url }: ProjectCardProps) {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} _hover={{ shadow: 'md' }} transition="all 0.2s">
            <VStack align="start" spacing={4}>
                <Heading size="md">
                    <Link href={html_url} isExternal>
                        {name}
                    </Link>
                </Heading>
                <Text noOfLines={3}>{description}</Text>
                <HStack justify="space-between" w="full">
                    <Badge colorScheme="yellow">{language}</Badge>
                    <HStack>
                        <Icon as={StarIcon} color="yellow.400" />
                        <Text>{stargazers_count}</Text>
                    </HStack>
                </HStack>
            </VStack>
        </Box>
    )
}
