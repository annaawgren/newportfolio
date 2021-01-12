import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full pt-8 pb-12 mb-12 sticky top-0 z-10 px-5 md:px-10 lg:px-20 ">
      <Link href="/">
        <a className="flex flex-col justify-top text-center">
          <p className="soehne headerfont">
            Anna Wikberg Agren <br /> Art Director \ Designer{" "}
          </p>
        </a>
      </Link>
    </header>
  );
}
