import Hero from "./components/Hero"
import Services from "./components/Services"
import ProjectShowcase from "./components/ProjectShowcase"
import AboutUs from "./components/AboutUs"
import Testimonials from "./components/Testimonials"
import PortfolioGrid from "./components/PortfolioGrid"
import Stats from "./components/Stats"
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProjectShowcase />
      <Stats />
      <AboutUs />
      <PortfolioGrid />
      <Testimonials />
      <ContactForm />
    </>
  )
}
