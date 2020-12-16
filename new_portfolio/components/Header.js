import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-row items-center justify-center px-5 md:px-10 lg:px-20 z-20 fixed top-0 h-20">
      <Link href="/">
        <a className="flex flex-row items-center justify-between w-full">
          <p className="ivar-heading text-md block leading-10">
            Anna Wikberg Ågren
          </p>

          <p className="ivar-heading text-md block">Art Director \ Designer</p>
        </a>
      </Link>

      <style jsx>
        {`
          .ivar-heading {
            font-family: "Ivar-display";
          }
          .ivar-light {
            font-family: "Ivar-fine-light";
          }
          .ivar-lightIta {
            font-family: "Ivar-fine-light-italic";
          }
          .untitled-text {
            font-family: "Untitled";
            font-size: 16px;
            line-height: 1.5;
          }
          .logo-big {
            font-size: 9rem;
            line-height: 1;
          }
        `}
      </style>
    </header>
  );
}
