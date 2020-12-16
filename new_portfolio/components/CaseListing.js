import Link from "next/link";
import Image from "../components/Image";
import { KupeCase } from "../components/cases/Kupe";
import { TelnessCase } from "../components/cases/Telness";
import { WCase } from "../components/cases/W";
import { VegogoCase } from "../components/cases/Vegogo";
import { MLLAB } from "../components/cases/ML";
import { NewbieCase } from "../components/cases/Newbie";

const casesObject = {
  telness: TelnessCase,
  kupe: KupeCase,
  vegogo: VegogoCase,
  whotel: WCase,
  newbietech: NewbieCase,
  machinelearninglab: MLLAB,
};

export default function CaseListing() {
  const cases = Object.entries(casesObject);

  let caseListingItems = cases.map(([caseSlug, caseInfo]) => {
    if (!caseSlug || !caseInfo) {
      return null;
    }

    const { title, heroimage } = caseInfo;

    return (
      <li key={title}>
        <Link href={`/work/${caseSlug}`}>
          <a className="...h-auto w-full flex flex-col items-center">
            <Image imageSrc={heroimage} />
            <p className=" untitled-text mb-2 mt-6 text-sm">{title}</p>
          </a>
        </Link>
      </li>
    );
  });

  return (
    <React.Fragment>
      {/* Antal cases {Object.entries(cases).length} */}
      <ul className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 px-5 md:px-10 lg:px-20">
        {caseListingItems}
      </ul>
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          li.in-view {
            opacity: 0;
            scale: 0;
            transition: 400ms;
            transform: translateY(25px);
          }
          li {
            opacity: 0;
          }
          li.in-view {
            opacity: 1;
            scale: 1;
            transform: translateY(0);
          }

          li.in-view:nth-child(1) {
            transition-delay: 0s;
          }
          li.in-view:nth-child(2) {
            transition-delay: 0.2s;
          }
          li.in-view:nth-child(3) {
            transition-delay: 0.4s;
          }
          li.in-view:nth-child(4) {
            transition-delay: 0.6s;
          }
          li.in-view:nth-child(5) {
            transition-delay: 0.8s;
          }
          li.in-view:nth-child(6) {
            transition-delay: 1s;
          }
        }
      `}</style>
    </React.Fragment>
  );
}
