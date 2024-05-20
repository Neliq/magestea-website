import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavBar } from "../client/navbar";

const HeroSection = () => {
  return (
    <div className="flex w-full flex-col items-center bg-main-pattern text-center">
      <NavBar />
      <div className="mt-16 flex w-full flex-col items-center">
        <Image
          src="logo_long.svg"
          height={100}
          width={512}
          alt="Logo"
          className="p-8 lg:p-0"
        />
        <h1 className="font-regular mb-8 mt-32 font-mono text-4xl text-white drop-shadow-2xl lg:text-6xl">
          Want some tea?
        </h1>
        <p className="max-w-xl font-mono text-xl text-slate-300">
          Mage’s Tea is a tea shop that offers a wide variety of teas from
          around the world. We have teas for every taste and occasion. Whether
          you’re looking for a relaxing cup of chamomile tea or an energizing
          matcha latte, we’ve got you covered.
        </p>
        <Button className="mb-24 mt-8 bg-secondary-500 font-mono text-lg text-primary-800 hover:bg-secondary-300">
          Contact us
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
