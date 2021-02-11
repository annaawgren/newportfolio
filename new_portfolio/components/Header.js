import React, { useState, useEffect } from "react";
import Link from "next/link";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);
const intThemeSmallWidth = parseInt(fullConfig.theme.screens.sm, 10);

export default function Header(props) {
  const { initialPosition = "sides" } = props;

  // Position: center | sides
  const [position, setPosition] = useState(initialPosition);
  const [windowWidth, setWindowWidth] = useState();
  const [scrollY, setScrollY] = useState();

  // Set initial values if running in browser.
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setScrollY(window.scrollY);
    }
  }, []);

  useEffect(() => {
    setPosition(initialPosition);
  }, [initialPosition]);

  // Update window width state on resize.
  useEffect(() => {
    const handleResize = (evt) => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  // Update window scroll position state on scroll.
  useEffect(() => {
    const handleScroll = (evt) => {
      setScrollY(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animate header text on scroll or when window size changes.
  useEffect(() => {
    const initialPositionIsCenter = initialPosition === "center";

    // Set state based on scrolled position.
    if (initialPositionIsCenter && scrollY > 100 && position === "center") {
      setPosition("sides");
    } else if (
      initialPositionIsCenter &&
      scrollY < 100 &&
      position === "sides"
    ) {
      setPosition("center");
    }

    // Set state based on screen width.
    // Small screens always get centered.
    if (windowWidth <= intThemeSmallWidth) {
      setPosition("center");
    }
  }, [position, windowWidth, scrollY]);

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
                <p className="soehne-halbfett headerfont">Anna Wikberg Ågren</p>
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
                <p className="soehne-halbfett headerfont">
                  Art Director \ Designer
                </p>
              </div>
            </a>
          </Link>
        </div>
        <style jsx>{`
          .headerfont {
            font-size: clamp(1rem, 5vw, 1.1rem);
            line-height: 1.1;
          }
        `}</style>
      </header>
    </>
  );
}
