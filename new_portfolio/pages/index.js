import React from "react";
import Head from "next/head";
import Link from "next/link";

import Navlinks from "../components/navlinks";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Anna Wikberg Ågren Art Director</title>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png" />
      <link rel="manifest" href="../public/site.webmanifest" /> */}
      </Head>

      <div className="w-full">
        {/* hide header on landing page, show on scroll */}
        <header className="hidden flex-row justify-between items-center h-12 soehne-heading bg-red-500">
          <Link href="/index">
            <div>Anna Wikberg Ågren</div>
          </Link>
          <div>Art Director \ Designer</div>
        </header>

        <section className="intro bg-gradient-to-r from-primary via-secondary to-danger w-full h-screen sticky top-0 flex flex-col items-center justify-top pt-40 pb-20 ">
          <p className="soehne-heading text-2xl text-center mb-4">
            Anna Wikberg Ågren
          </p>
          <p className="soehne-heading text-6xl md:text-8xl lg:text-9xl text-center">
            Art Director <br /> \ Designer
          </p>
        </section>

        <section className="case-one bg-red-500 w-full h-screen sticky top-0 z-10 flex flex-col items-center justify-top pt-40 pb-20 ">
          <div className="soehne-heading text-9xl text-center mb-4 bg-gray-100 w-1/3  h-72"></div>
          <p className="untitled-text text-center mb-4 w-1/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            imperdiet facilisis non, elit ipsum venenatis justo, egestas mattis.
          </p>
        </section>

        <section className="case-two bg-red-50 w-full h-screen sticky top-0 z-10 flex flex-col items-center justify-top pt-40 pb-20 ">
          <div className="soehne-heading text-9xl text-center mb-4 bg-gray-100 w-1/3  h-72"></div>
          <p className="untitled-text text-center mb-4 w-1/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            imperdiet facilisis non, elit ipsum venenatis justo, egestas mattis.
          </p>
        </section>
      </div>

      <Navlinks />
      <style jsx>
        {`
          .soehne-heading {
            font-family: "Soehne-drei";
          }
          .ivar-heading {
            font-family: "Ivar-display";
            outline: 1px solid red;
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

          .photo-h {
            height: 800px;
          }
          .photo-h-w {
            height: 500px;
          }
        `}
      </style>

      <style jsx global>
        {`
          @font-face {
            font-family: "Ivar-display";
            src: url("../public/fonts/IvarDisplayCondensed-SemiBold.woff") format("woff"),
            src: url("../public/fonts/IvarDisplayCondensed-SemiBold.otf") format("otf")
          }
          @font-face {
            font-family: "Ivar-fine-light";
            src: url("../public/fonts/IvarFine-light.woff") format("woff"),
            src: url("../public/fonts/IvarFine-light.otf") format("otf")
          }
          @font-face {
            font-family: "Ivar-fine-light-italic";
            src: url("../public/fonts/IvarFine-lightItalic.woff") format("woff"),
            src: url("../public/fonts/IvarFine-lightItalic.otf") format("otf")
          }
          @font-face {
            font-family: "Soehne-buch";
            src: url("../public/fonts/soehne-breit-test-buch.woff") format("woff"),
            url("../public/fonts/SöhneBreitTest-Buch.otf") format("otf")
          }

          @font-face {
            font-family: "Soehne-drei";
            src: url("../public/fonts/soehne-breit-test-dreiviertelfett.woff") format("woff"),
            url("../public/fonts/SöhneBreitTest-Dreiviretelfett.otf") format("otf")       
          }

          @font-face {
            font-family: "Untitled";
            src: url("/public/fonts/untitled-sans-test.woff") format("woff"),
            url("../public/fonts/UntitledSansTest-Regular.otf") format("otf")      
          }

          body,
          html {
            font-family: "untitled", sans-serif;
            scroll-behavior: smooth;
            color: black;
          }

          a:hover {
            text-decoration: none;
          }
          summary:focus,
          button:focus,
          input:focus {
            outline: none;
            box-shadow: inset 0 0 0 2px #e6b771;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus {
            -webkit-text-fill-color: #5a4e3e;
            box-shadow: 0 0 0px 1000px #fcf9d5 inset;
            font-size: 16px;
          }
        `}
      </style>
    </React.Fragment>
  );
}
