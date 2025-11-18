import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

async function getRepos() {
  // Revalidate every hour
  const res = await fetch('https://api.github.com/users/UpayanChatterjee/repos?sort=updated&per_page=6', { next: { revalidate: 3600 } })
  if (!res.ok) {
    console.error('Failed to fetch repos')
    return []
  }
  return res.json()
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
