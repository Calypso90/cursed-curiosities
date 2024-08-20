import Image from "next/image.js";
import artifacts from "../lib/ItemArray.js";

export default function SideMeu() {
  return (
    <div className="flex flex-col items-center gap-4 px-8 py-2 mr-8 bg-zinc-900 rounded-md">
      <h3 className="text-xl">Explore Other Artifacts</h3>
      {artifacts.map((artifact) => (
        <p
          key={artifact.name}
          className="sidemenuimg flex flex-col items-center gap-2 bg-zinc-700 px-4 pt-4 pb-2 rounded-lg w-full"
        >
          <Image
            src={"/" + artifact.src}
            width={130}
            height={130}
            alt={artifact.name}
          />
          {artifact.name}
        </p>
      ))}
    </div>
  );
}
