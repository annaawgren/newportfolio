import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "./Image";
import { KupeCase } from "../components/cases/Kupe";
import { MlProjectionCase } from "../components/cases/ML";
import { NolltidCase } from "../components/cases/Nolltid";
import { TelnessCase } from "../components/cases/Telness";
import { VegogoCase } from "../components/cases/Vegogo";
import { WCase } from "../components/cases/W";
import { CoraCase } from "../components/cases/Cora";
import { GirlsOnSkisCase } from "../components/cases/Girlsonskis";
import { InteDuCase } from "../components/cases/Intedu";
import { NewbieCase } from "../components/cases/NewbieTech";
import { OlgaCase } from "../components/cases/Olga";
import { TheNewGreenCase } from "./cases/TheNewGreen";

const casesObject = {
  w: WCase,
  girlsonskis: GirlsOnSkisCase,
  nolltid: NolltidCase,
  newbietech: NewbieCase,
  cora: CoraCase,
  intedu: InteDuCase,
  kupe: KupeCase,
  ml: MlProjectionCase,
  vegogo: VegogoCase,
  telness: TelnessCase,
  olga: OlgaCase,
  thenewgreensalad: TheNewGreenCase,
};

export default function CaseListing() {
  const itemsRefs = useRef([]);

  useEffect(() => {
    function observerItemCallback(entries) {
      function showItem(item, delay) {
        setTimeout(() => {
          item.target.classList.add("case-item--inView");
        }, delay);
      }

      // Only act on intersecting items.
      const intersectingItems = entries.filter((item) => item.isIntersecting);
      for (var i = 0; i < intersectingItems.length; i++) {
        // .case-item--inView
        const delay = i * 100;
        const item = intersectingItems[i];
        showItem(item, delay);
      }
    }
    // console.log("caselisting useeffect mount");
    // console.log("itemsRefs", itemsRefs);

    let options = {
      threshold: 0.2,
    };

    let observer = new IntersectionObserver(observerItemCallback, options);

    itemsRefs.current.forEach((elm) => {
      observer.observe(elm);
    });
  }, []);

  const cases = Object.entries(casesObject);

  let caseListingItems = cases.map(([caseSlug, caseInfo], mapIndex, arr) => {
    if (!caseSlug || !caseInfo) {
      return null;
    }

    const { title, description, heroimageWork } = caseInfo;

    return (
      <li
        className="case-item"
        key={title}
        ref={(el) => (itemsRefs.current[mapIndex] = el)}
      >
        <style jsx>{`
      {
        .case-item {
         opacity: 0;
         transform: translateY(20px);
         transition: all .35s ease-in-out;
       }
       .case-item--inView {
         opacity: 1;
         transform: translateY(0);
       }
       `}</style>
        <Link href={`/work/${caseSlug}`}>
          <a className="...h-auto w-full flex flex-col items-center">
            <Image imageSrc={`cases/${caseSlug}/${heroimageWork}`} />
            <h3 className=" untitled-text mt-6 mb-2 text-sm text-center">
              {title}
            </h3>
            <div className=" untitled-text mb-6 text-sm text-center">
              {description}
            </div>
          </a>
        </Link>
      </li>
    );
  });

  return (
    <React.Fragment>
      {/* Antal cases {Object.entries(cases).length} */}
      <ul className="grid md:grid-cols-2 lg:grid-cols-3  pt:80 gap-4 px-5 md:px-10 lg:px-20">
        {caseListingItems}
      </ul>
      <style jsx>{``}</style>
    </React.Fragment>
  );
}
