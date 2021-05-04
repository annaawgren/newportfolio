import React, { useState, useEffect } from "react";
import Link from "next/link";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);
const intThemeSmallWidth = parseInt(fullConfig.theme.screens.sm, 10);

export default function Header(props) {
  const { initialPosition = "sides" } = props;

  const [
    windowSizeAndScrollPosition,
    setWindowSizeAndScrollPosition,
  ] = useState(() => {
    if (typeof window === "undefined") {
      return;
    }

    return {
      windowInnerWidth: window.innerWidth,
      windowScrollY: window.scrollY,
    };
  });

  const getPositionBasedonWindowSizeAndScrollPosition = () => {
    console.log({ windowSizeAndScrollPosition, initialPosition });

    // Bail if values not set.
    if (windowSizeAndScrollPosition === undefined) {
      return;
    }

    const windowWidth = windowSizeAndScrollPosition.windowInnerWidth;
    const scrollY = windowSizeAndScrollPosition.windowScrollY;

    // Default to old position.
    let newPosition = "";

    // Bail if windowWidth or scrollY is not set yet.
    if (windowWidth === undefined || scrollY === undefined) {
      return;
    }

    const initialPositionIsCenter = initialPosition === "center";

    console.log("animate on scroll or resize", {
      position,
      newPosition,
      windowWidth,
      intThemeSmallWidth,
      scrollY,
      initialPositionIsCenter,
    });

    // Set state based on screen width.
    // Small screens always get centered, so this overrides scroll position.
    if (windowWidth <= intThemeSmallWidth) {
      // On small screen, so center.
      console.log("center because small screen");
      newPosition = "center";
      return newPosition;
    }
    // } else if (initialPosition !== "center") {
    //   newPosition = "sides";
    // }

    // Set state based on scrolled position.
    if (initialPositionIsCenter && scrollY > 100 && position === "center") {
      newPosition = "sides";
    } else if (
      initialPositionIsCenter &&
      scrollY < 100 &&
      position === "sides"
    ) {
      newPosition = "center";
    }

    console.log("determined new position is", newPosition);

    return newPosition;
  };

  // Position: center | sides
  const [position, setPosition] = useState(() => {
    const newPosition = getPositionBasedonWindowSizeAndScrollPosition();
    console.log("newPosition in first useState", newPosition);
    return newPosition;
  });

  console.log({ windowSizeAndScrollPosition });

  // Set initial values if running in browser.
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     console.log("set init values");
  //     setWindowWidth(window.innerWidth);
  //     setScrollY(window.scrollY);
  //   }
  // }, []);

  useEffect(() => {
    console.log("set init position");
    setPosition(initialPosition);
  }, [initialPosition]);

  // Update window width state on resize.
  useEffect(() => {
    console.log("xxx");
    const handleResize = (evt) => {
      console.log("set win size", window.innerWidth);
      setWindowSizeAndScrollPosition({
        ...windowSizeAndScrollPosition,
        windowInnerWidth: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  // Update window scroll position state on scroll.
  useEffect(() => {
    const handleScroll = (evt) => {
      console.log("set scroll");
      setWindowSizeAndScrollPosition({
        ...windowSizeAndScrollPosition,
        windowScrollY: window.scrollY,
      });
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animate header text on scroll or when window size changes.
  useEffect(() => {
    const newPosition = getPositionBasedonWindowSizeAndScrollPosition();
    setPosition(newPosition);
  }, [position, windowSizeAndScrollPosition]);

  let nameOuterClasses = "aaa";
  let nameInnerClasses = "bbb";
  let professionOuterClasses = "ccc";
  let professionInnerClasses = "ddd";

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

  console.log("render with position and classes", {
    position,
    nameOuterClasses,
    nameInnerClasses,
    professionOuterClasses,
    professionInnerClasses,
  });

  return (
    <>
      <header
        className={`pt-8 pb-12 mb-12 sticky top-0 z-10 px-5 md:px-10 lg:px-20`}
      >
        <div className="relative overflow-hidden">
          <Link href="/">
            <a className={`block duration-700 transform ${nameOuterClasses}`}>
              <div
                className={`inline-block duration-700 transform ${nameInnerClasses}`}
              >
                <p className="soehne-halbfett headerfont">Anna Wikberg Ågren</p>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a
              className={`block duration-700 transform text-right ${professionOuterClasses}`}
            >
              <div
                className={`inline-block duration-700 transform ${professionInnerClasses}`}
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
