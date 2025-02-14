import { FAQ } from "@/components/ui/FAQ";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { Stats } from "@/components/ui/stats";
import { Case } from "@/components/ui/testimonila";

export default function Home() {
  return (
    <main>
      <div></div>
      <div>
        <Header />
        <Hero />
        <Case />
        <Stats />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
