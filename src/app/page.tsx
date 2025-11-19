import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

async function getRepos() {
  // Revalidate every hour
  const res = await fetch('https://api.github.com/users/UpayanChatterjee/repos?sort=updated&per_page=100', { next: { revalidate: 3600 } })
  if (!res.ok) {
    console.error('Failed to fetch repos')
    return []
  }
  const allRepos = await res.json()

  const pinnedNames = ['hate-speech-detection-BERT', 'att-img-capt', 'cv-analyzer']
  const excludedNames = ['ixana-embedded-kgp']

  const projectDescriptions: Record<string, string> = {
    'hate-speech-detection-BERT': 'Binary classification of hate speech using BERT.',
    'att-img-capt': 'Image captioning model utilizing attention mechanisms to generate descriptive text.',
    'cv-analyzer': 'Resume parser and analyzer that extracts key information from Curriculum Vitae.',
    'cc-fraud-detection': 'Machine learning model designed to detect fraudulent credit card transactions.',
    'fashionMNIST': 'Deep learning model for classifying fashion articles using the Fashion-MNIST dataset.',
    'POS-tagging': 'Implementation of Part-of-Speech tagging algorithms for grammatical categorization.',
    'aruco-pose-estimation': 'Real-time pose estimation system using ArUco markers and computer vision.',
    'my-sh': 'A custom shell implementation in C demonstrating system programming concepts.',
  }

  const pinnedRepos = allRepos.filter((repo: any) => pinnedNames.includes(repo.name))
  // Sort pinned repos to match the order in pinnedNames
  pinnedRepos.sort((a: any, b: any) => pinnedNames.indexOf(a.name) - pinnedNames.indexOf(b.name))

  const otherRepos = allRepos
    .filter((repo: any) => !pinnedNames.includes(repo.name) && !excludedNames.includes(repo.name))
    .slice(0, 9 - pinnedRepos.length)

  const finalRepos = [...pinnedRepos, ...otherRepos].map((repo) => ({
    ...repo,
    description: projectDescriptions[repo.name] || repo.description
  }))

  return finalRepos
}

export default async function Home() {
  const repos = await getRepos()

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects repos={repos} />
      <Contact />
      <Footer />
    </main>
  )
}
