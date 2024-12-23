import Image from "next/image.js";
import artifacts from "../lib/ItemArray.js";

export default function SideMeu() {
  return (
    <div className="hidden lg:flex flex-col items-center gap-4 px-8 py-2 mr-8 bg-zinc-900 rounded-md">
      <h3 className="text-xl text-center">Explore Other Artifacts</h3>
      {artifacts.map((artifact) => (
        <p
          key={artifact.name}
          className="sidemenuimg flex flex-col items-center gap-2 bg-zinc-700 px-4 pt-4 pb-2 rounded-lg w-full"
        >
          <span
            style={{
              position: "relative",
              width: "85%",
              aspectRatio: "1 / 1",
              height: "150px",
              overflow: "hidden",
            }}
          >
            <Image
              src={"/" + artifact.src1}
              alt={artifact.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                objectPosition: "top",
              }}
            />
          </span>
          {artifact.name}
        </p>
      ))}
    </div>
  );
}
