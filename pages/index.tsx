import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Why from "@/components/why";
import Features from "@/components/features";
import Antefoot from "@/components/antefoot";
import Footer from "@/components/footer";
export default function index() {
  return (
    <div className="flex w-full flex-col bg-[#FAFAFA]">
      <Nav />
      <Hero />
      <Why />
      <Features />
      <Antefoot />
      <Footer />
    </div>
  );
}
