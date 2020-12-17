import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-10 z-20 mb-6">
      <Link href="/">
        <a className="flex flex-col items-center justify-center text-center w-full">
          <p className="ivar-heading header-txt">
            Anna Wikberg Ågren
            <br />
            Art Director \ Designer
          </p>
        </a>
      </Link>

      <style jsx>
        {`
          .header-txt {
            font-size: 2rem;
          }
        `}
      </style>
    </header>
  );
}
