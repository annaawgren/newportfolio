import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import Navlinks from "../components/Navlinks";

export default function Home() {
  return (
    <Layout>
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
          <p className="ivar-heading text-3xl text-center mb-4">
            Anna Wikberg Agren
          </p>
          <p className="ivar-heading text-6xl md:text-9xl lg:text-12xl text-center">
            Art Director <br /> \ Designer
          </p>
        </section>

        <section className="case-one bg-red-500 w-full h-screen sticky top-0 z-10 flex flex-col items-center justify-top pt-40 pb-20 ">
          <img
            className="mb-4 bg-gray-100 w-auto h-auto object-fill"
            src="/images/wtest.png"
          />

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

        <section className="case-three bg-gray-300 w-full h-screen sticky top-0 z-10 flex flex-col items-center justify-top pt-40 pb-20 ">
          <div className="soehne-heading text-9xl text-center mb-4 bg-gray-100 w-1/3  h-72"></div>
          <p className="untitled-text text-center mb-4 w-1/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            imperdiet facilisis non, elit ipsum venenatis justo, egestas mattis.
          </p>
        </section>

        <section className="footer-img w-full h-screen sticky z-10 top-0  flex flex-col items-center justify-center ">
          <img
            src="/images/anna-test.jpeg"
            className="text-center bg-gray-100 w-full h-auto object-cover"
          ></img>
          <p className="ivar-heading text-white text-6xl absolute text-centered pb-4 text-red">
            hello@annawagren.work
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
        `}
      </style>
    </Layout>
  );
}
