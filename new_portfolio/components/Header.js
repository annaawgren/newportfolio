import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-between pt-8 pb-12 mb-12 sticky top-0 z-10 px-5 md:px-10 lg:px-20 ">
      <Link href="/">
        <a className="w-full flex flex-col justify-top   ">
          <p className="soehne headerfont">
            Anna Wikberg Agren <br /> Art Director \ Designer{" "}
          </p>
        </a>
      </Link>

      {/* <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9687 13.2C16.9187 12.675 11.5937 11.25 9.71874 10.725C11.5937 10.2 16.9187 8.775 17.9687 8.25C19.0937 7.65 19.3937 6.375 18.8687 5.325C18.3437 4.275 16.9937 4.05 15.8687 4.725C14.8937 5.25 11.1437 9.15 9.64374 10.5C10.1687 8.55 11.5937 3.375 11.5937 2.175C11.5937 0.975002 10.7687 0 9.56874 0C8.36874 0 7.54374 0.975002 7.54374 2.175C7.54374 3.375 8.96874 8.55 9.49374 10.5C7.99374 9.15 4.24374 5.25 3.26874 4.725C2.14374 4.05 0.86874 4.35 0.26874 5.325C-0.33126 6.3 0.118741 7.65 1.16874 8.25C2.21874 8.775 7.54374 10.2 9.41874 10.725C7.54374 11.25 2.21874 12.675 1.16874 13.2C0.0437405 13.8 -0.25626 15.075 0.26874 16.125C0.79374 17.175 2.14374 17.4 3.26874 16.725C4.24374 16.2 8.06874 12.225 9.49374 10.875C9.04374 12.75 7.54374 18 7.54374 19.275C7.54374 20.475 8.36874 21.45 9.56874 21.45C10.7687 21.45 11.5937 20.475 11.5937 19.275C11.5937 18 10.0937 12.75 9.64374 10.875C11.0687 12.225 14.8937 16.2 15.8687 16.725C16.9937 17.4 18.2687 17.1 18.8687 16.125C19.4687 15.15 19.0187 13.8 17.9687 13.2Z"
          fill="black"
        />
      </svg> */}

      <style jsx>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          svg:hover {
            animation: spin 1.5s cubic-bezier(0.77, 0, 0.18, 1);
            fill: red;
          }
          .headerfont {
            font-size: clamp(1rem, 5vw, 2rem);
            line-height: 1.1;
          }
        `}
      </style>
    </header>
  );
}
