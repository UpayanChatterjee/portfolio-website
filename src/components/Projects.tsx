'use client'

import ProjectCard from './ProjectCard'
import { SimpleGrid, Container, Heading } from '@chakra-ui/react'

export default function Projects({ repos }: { repos: any[] }) {
    return (
        <Container maxW="container.lg" py={10} id="projects">
            <Heading as="h2" size="xl" mb={6}>Projects</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {repos.map((repo) => (
                    <ProjectCard
                        key={repo.id}
                        name={repo.name}
                        description={repo.description}
                        language={repo.language}
                        stargazers_count={repo.stargazers_count}
                        html_url={repo.html_url}
                    />
                ))}
            </SimpleGrid>
        </Container>
    )
}
