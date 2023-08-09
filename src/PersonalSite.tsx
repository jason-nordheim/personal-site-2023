import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

export const PersonalSite = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </>
  );
};
