import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Career from "./Sections/Career"
import Contacts from "./Sections/Contacts"
import Services from "./Sections/Services"
import Gallery from "./Sections/Gallery"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </main>
  )
}
