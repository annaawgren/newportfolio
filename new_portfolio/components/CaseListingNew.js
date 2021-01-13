import Link from "next/link";
import { useEffect, useRef } from "react";
import { KupeCase } from "../components/cases/Kupe";
import { MLLAB } from "../components/cases/ML";
import { NewbieCase } from "../components/cases/Newbie";
import { TelnessCase } from "../components/cases/Telness";
import { VegogoCase } from "../components/cases/Vegogo";
import { WCase } from "../components/cases/W";
import Image from "../components/Image";
import classNames from "classnames";

const GosCaseTest = {
  title: "Girls on skis",
  heroimage: "gos-test.png",
  description: <p>Lorem ipsum dolor sit amet.</p>,
  overviewSize: "medium",
};

const WHotelTest = {
  title: "W Hotel",
  heroimage: "w-test.png",
  description: <p>Lorem ipsum dolor sit amet.</p>,
  overviewSize: "small",
};

const NewbieTechTest = {
  title: "Newbie Tech",
  heroimage: "newbie-test.png",
  description: <p>Lorem ipsum dolor sit amet.</p>,
  overviewSize: "small",
};

const KupeTest = {
  title: "Kupé",
  heroimage: "kupe-test-resized.jpg",
  description: <p>Lorem ipsum dolor sit amet.</p>,
  overviewSize: "large",
};

const casesObject = {
  gostest: GosCaseTest,
  whoteltest: WHotelTest,
  newbietechtest: NewbieTechTest,
  kupetest: KupeTest,
  telness: TelnessCase,
  kupe: KupeCase,
  vegogo: VegogoCase,
  whotel: WCase,
  newbietech: NewbieCase,
  machinelearninglab: MLLAB,
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

    const { title, description, heroimage, overviewSize = "medium" } = caseInfo;

    let liClasses = ["case-item", "flex", "justify-center"];
    let liInnerClasses = [
      "h-auto",
      "w-full",
      "flex",
      "flex-col",
      "items-center",
    ];

    switch (overviewSize) {
      case "small":
        liClasses.push("md:w-2/5");
        liClasses.push("md:px-10");
        break;
      case "medium":
        liClasses.push("md:w-full");
        liInnerClasses.push("md:w-1/2");
        break;
      case "large":
        liClasses.push("md:w-full");
        break;
    }

    const liClassNames = classNames(liClasses);
    const liInnerClassNames = classNames(liInnerClasses);

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
            <img src={`/images/${heroimage}`} alt="" />
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
      <ul className="pt:80 px-5 md:px-10 lg:px-20 flex flex-wrap justify-center">
        {caseListingItems}
      </ul>
      <style jsx>{``}</style>
    </React.Fragment>
  );
}
