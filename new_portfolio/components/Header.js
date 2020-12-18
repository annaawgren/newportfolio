import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-10 z-20 mb-6 flex flex-row justify-between">
      <Link href="/">
        <a className=" w-full flex flex-col justify-top pt-8 px-5 md:px-10 lg:px-20 fixed top-0 z-10">
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
