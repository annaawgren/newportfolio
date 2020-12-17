import Link from "next/link";
import Image from "./Image";
import { KupeCase } from "./cases/Kupe";
import { TelnessCase } from "./cases/Telness";
import { WCase } from "./cases/W";
import { VegogoCase } from "./cases/Vegogo";
import { MLLAB } from "./cases/ML";
import { NewbieCase } from "./cases/Newbie";

const casesObject = {
  telness: TelnessCase,
  kupe: KupeCase,
  vegogo: VegogoCase,
  whotel: WCase,
  newbietech: NewbieCase,
  machinelearninglab: MLLAB,
};

export default function CaseLargeListing() {
  const cases = Object.entries(casesObject);

  let caseListingItems = cases.map(([caseSlug, caseInfo]) => {
    if (!caseSlug || !caseInfo) {
      return null;
    }

    const { title, description, heroimage, backgroundcolor } = caseInfo;

    return (
      <section
        key={title}
        className={`${backgroundcolor} w-full h-screen flex flex-col items-center justify-top px-5 py-32 md:px-20 sticky top-0 z-10`}
      >
        <div className=" w-full ">
          <Link href={`/work/${caseSlug}`}>
            <a className="h-auto w-full flex flex-col items-center">
              <Image imageSrc={heroimage} />

              <h2 className="untitled-text mb-6 mt-8 text-md text-center">
                {title}
              </h2>
              <p className="untitled-text mb-4 text-md text-center max-w-7xl">
                {description}
              </p>
            </a>
          </Link>
        </div>
      </section>
    );
  });

  return (
    <React.Fragment>
      {/* Antal cases {Object.entries(cases).length} */}
      <ul className="">{caseListingItems}</ul>
      <style jsx>{``}</style>
    </React.Fragment>
  );
}
