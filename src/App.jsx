import './App.css'
import AboutMeSection from './sections/AboutMeSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'
import LandingPage from './sections/LandingPage'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <>
      <LandingPage />
      <SkillsSection />
      <ProjectsSection />
      <AboutMeSection />
      <ContactSection />
      <FooterSection />
      <Analytics />
    </>
  )
}

export default App
