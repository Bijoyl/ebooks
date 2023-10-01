import { Hero } from "./components/Hero";
import { FeaturedBooks } from "./components/FeaturedBooks";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { useTitle } from "../../hooks/useTitle";
export const HomePage = () => {
  useTitle("Get your Favorite books on your devices")
  return (
    <main>
      <Hero />
      <FeaturedBooks />
      <Testimonials/>
      <Faq/>
    </main>
  )
}
