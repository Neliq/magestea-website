import Image from "next/image";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex w-full flex-row items-center bg-primary-800 text-center lg:flex-col">
      <div className="mx-auto grid grid-cols-1 items-center justify-between space-y-16 px-8 py-16 lg:max-w-[1280px] lg:grid-cols-3 lg:space-y-0 lg:px-32">
        <div className="space-y-8 text-secondary-500 lg:text-left">
          <p>Home</p>
          <p>Glorysmith</p>
          <p>Hairloom</p>
          <p>Herbata</p>
        </div>
        <div>
          <Image src="logo_long.svg" height={100} width={256} alt="Logo" />
        </div>
        <div className="space-y-8 text-white lg:text-right">
          <p>magestea@agh.edu.pl</p>
          <p>Czarnowiejska 36</p>
          <p>Budynek C-7 30-054</p>
          <p>Kraków</p>
        </div>
      </div>
      <p className="mb-4 text-secondary-500">
        Site by{" "}
        <a
          className="underline hover:text-secondary-400"
          href="https://www.koszyka.com/"
        >
          Jakub Koszyka
        </a>
      </p>
    </div>
  );
};

export default Footer;
