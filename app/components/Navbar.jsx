import Image from "next/image.js";
import "../globals.css";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3 px-4 py-2 items-center">
      <Image
        src="/logo.png"
        width={130}
        height={130}
        alt="Cursed Curiosities Logo"
      />
      <div className="mx-auto">
        <Image
          src="/Header.png"
          width={500}
          height={500}
          alt="Cursed Curiosities"
        />
      </div>
      <div className="text-right text-xl">
        <button className="p-4">Sign In</button>
        <button className="p-4">Sign Up</button>
      </div>
    </div>
  );
}
