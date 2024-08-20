import Image from "next/image.js";
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";

export default function Artifact() {
  return (
    <div className="pl-8 mb-10 w-full">
      <div className="flex justify-between mb-4">
        <Image
          src="/TerracottaArmy.jpg"
          width={500}
          height={500}
          alt="Terracotta Army"
        />
        <Image
          src="/TerracottaArmy2.jpg"
          width={500}
          height={500}
          alt="Terracotta Army"
        />
        <Image
          src="/TerracottaArmy1.jpg"
          width={500}
          height={500}
          alt="Terracotta Army"
        />
      </div>
      <h1 className="text-3xl mb-4">The Terracotta Army</h1>
      <p className=" mb-4">
        The Terracotta Army, a vast collection of life-sized clay soldiers,
        horses, and chariots, was buried with China's first emperor, Qin Shi
        Huang, in 210–209 BCE to protect him in the afterlife. Discovered in
        1974 near Xi'an, Shaanxi Province, the army is now housed in the Museum
        of the Terracotta Warriors and Horses. While the Terracotta Army is a
        symbol of ancient craftsmanship, it is also shrouded in mystery and
        believed by some to be haunted or cursed. Legends tell of the spirits of
        the warriors bound to their clay forms, eternally guarding the emperor’s
        tomb, and curses befalling those who disturb their rest. Several
        archaeologists and workers have reported strange occurrences and
        misfortunes after handling the figures, adding to the eerie allure of
        this ancient wonder. It is currently located in The Museum of the
        Terracotta Warriors and Horses in Xi'an, Shaanxi Province, China.
      </p>
      <div className="flex gap-8">
        <p className="flex items-center gap-2 px-2 bg-zinc-700 rounded-lg">
          <BiCurrentLocation />
          Xi’an, China
        </p>
        <p className="flex items-center gap-2 px-2 bg-zinc-700 rounded-lg">
          <MdOutlineDateRange />
          210-209 BCE
        </p>
      </div>
    </div>
  );
}
