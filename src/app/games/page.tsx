import Footer from "@/components/server/footer";
import { NavBar } from "@/components/client/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-between text-sm lg:flex lg:flex-col">
        <div className="bg-glorysmith flex w-full flex-col items-center text-center">
          <NavBar />
          <div className="mt-16 flex w-full flex-col items-center">
            <div className="flex flex-col items-center">
              <Image
                src="/glorysmith_logo.png"
                height={100}
                width={512}
                alt="Logo"
                className="mb-16 p-8 lg:p-0"
              />
              {/* <h2 className="font-regular mb-8 mt-32 font-mono text-4xl text-white drop-shadow-2xl lg:text-6xl">
                Glorysmith
              </h2> */}
              <p className="max-w-xl font-mono text-xl text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                porttitor. Ut in nulla enim. Phasellus molestie magna non est
                non nonummy.
              </p>
              <Link
                href="https://mages-tea.itch.io/glorysmith"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mb-64 mt-8 bg-secondary-500 font-mono text-lg text-primary-800 hover:bg-secondary-300">
                  Try demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
