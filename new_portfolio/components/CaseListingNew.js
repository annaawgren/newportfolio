import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { KupeCase } from "../components/cases/Kupe";
import { MLLAB } from "../components/cases/ML";
import { NolltidCase } from "../components/cases/Nolltid";
import { TelnessCase } from "../components/cases/Telness";
import { VegogoCase } from "../components/cases/Vegogo";
import { WCase } from "../components/cases/W";
import { CoraCase } from "../components/cases/Cora";
import { GirlsOnSkisCase } from "../components/cases/Girlsonskis";
import { InteDuCase } from "../components/cases/Intedu";
import { NewbieCase } from "../components/cases/NewbieTech";
import { OlgaCase } from "../components/cases/Olga";
import { TheNewGreenSaladCase } from "./cases/TheNewGreenSalad";

import classNames from "classnames";

const casesObject = {
  ml: MLLAB,
  w: WCase,
  girlsonskis: GirlsOnSkisCase,
  nolltid: NolltidCase,
  newbietech: NewbieCase,
  cora: CoraCase,
  intedu: InteDuCase,
  kupe: KupeCase,
  vegogo: VegogoCase,
  telness: TelnessCase,
  olga: OlgaCase,
  thenewgreensalad: TheNewGreenSaladCase,
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
        const delay = i * 100;
        const item = intersectingItems[i];
        showItem(item, delay);
      }
    }

    let observer = new IntersectionObserver(observerItemCallback, {
      threshold: 0.2,
    });

    itemsRefs.current.forEach((elm) => {
      observer.observe(elm);
    });
  }, []);

  const cases = Object.entries(casesObject);

  let caseListingItems = cases.map(([caseSlug, caseInfo], mapIndex, arr) => {
    if (!caseSlug || !caseInfo) {
      return null;
    }

    const {
      title,
      description,
      heroimageWork,
      overviewSize = "medium",
    } = caseInfo;

    let liClasses = ["case-item", "flex", "justify-center"];
    let liInnerClasses = [
      "h-auto",
      "w-full",
      "flex",
      "flex-col",
      "items-center",
      "mb-20",
    ];

    switch (overviewSize) {
      case "small":
        liClasses.push("md:w-2/5");
        liClasses.push("md:px-10");
        break;
      case "medium":
        liClasses.push("md:w-full");
        liInnerClasses.push("md:w-3/4 ");
        break;
      case "large":
        liClasses.push("md:w-full");
        break;
    }

    const liClassNames = classNames(liClasses);
    const liInnerClassNames = classNames(liInnerClasses);

    const [visibleText, setVisibleText] = useState(false);

    const handleVisibleText = () => {
      setVisibleText(!visibleText);
    };
    console.log(handleVisibleText);

    return (
      <li
        className={liClassNames}
        key={caseSlug}
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
          <a className={liInnerClassNames}>
            <img
              className="w-full object-contain"
              src={`/images/cases/${caseSlug}/${heroimageWork}`}
              alt=""
            />
            <div>
              <h3 className=" untitled-text mt-6 mb-2 text-sm text-center ">
                {title}
              </h3>
              <p className=" untitled-text mb-6 text-sm text-center ">
                {description}
              </p>
            </div>
          </a>
        </Link>
      </li>
    );
  });

  return (
    <React.Fragment>
      <ul className="pt:80 px-5 md:px-10 lg:px-20 flex flex-wrap justify-center">
        {caseListingItems}
      </ul>
    </React.Fragment>
  );
}
