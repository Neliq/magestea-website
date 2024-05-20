import Footer from "@/components/server/footer";
import HeroSection from "@/components/server/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-between text-sm lg:flex lg:flex-col">
        <HeroSection />
        <Footer />
      </div>
    </main>
  );
}
