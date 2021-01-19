import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header(props) {
  const { initialPosition = "sides" } = props;

  // Position: center | sides
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    setPosition(initialPosition);
  }, [initialPosition]);

  useEffect(() => {
    if (initialPosition === "sides") {
      return;
    }

    const handleScroll = (evt) => {
      if (window.scrollY > 100 && position === "center") {
        setPosition("sides");
      } else if (window.scrollY < 100 && position === "sides") {
        setPosition("center");
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  let nameOuterClasses;
  let nameInnerClasses;
  let professionOuterClasses;
  let professionInnerClasses;

  if (position == "center") {
    nameOuterClasses = "translate-x-1/2";
    nameInnerClasses = "-translate-x-1/2";
    professionOuterClasses = "-translate-x-1/2";
    professionInnerClasses = "translate-x-1/2";
  } else if (position == "sides") {
    nameOuterClasses = "";
    nameInnerClasses = "";
    professionOuterClasses = "-translate-y-full";
    professionInnerClasses = "";
  }

  return (
    <>
      <header className="pt-8 pb-12 mb-12 sticky top-0 z-10 px-5 md:px-10 lg:px-20">
        <div className="relative overflow-hidden">
          <Link href="/">
            <a
              className={`block transition duration-700 transform ${nameOuterClasses}`}
            >
              <div
                className={`inline-block transition duration-700 transform ${nameInnerClasses}`}
              >
                <p className="soehne-drei headerfont">Anna Wikberg Agren</p>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a
              className={`block transition duration-700 transform text-right ${professionOuterClasses}`}
            >
              <div
                className={`inline-block transition duration-700 transform ${professionInnerClasses}`}
              >
                <p className="soehne-drei headerfont">
                  Art Director \ Designer
                </p>
              </div>
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}
