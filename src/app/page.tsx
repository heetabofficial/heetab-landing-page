import { FAQ } from "@/components/ui/FAQ";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Hero />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
