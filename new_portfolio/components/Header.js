import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-between pt-8 pb-8 mb-8 sticky top-0 z-10">
      <Link href="/">
        <a className=" w-full flex flex-col justify-top px-5 md:px-10 lg:px-20   ">
          <p className="ivar-light headerfont">
            Anna Wikberg Ågren <br /> Art Director \ Designer{" "}
          </p>
        </a>
      </Link>

      <style jsx>
        {`
          .headerfont {
            font-size: clamp(2rem, 8vw, 5rem);
            line-height: 1.1;
          }
        `}
      </style>
    </header>
  );
}
