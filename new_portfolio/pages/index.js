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
      </Head>

      <div className="w-full">
        {/* hide header on landing page, show on scroll */}
        <header className="hidden flex-row justify-between items-center h-12 soehne-heading bg-red-500">
          <Link href="/index">
            <div>Anna Wikberg Ågren</div>
          </Link>
          <div>Art Director \ Designer</div>
        </header>

        <section className="intro bg-gradient-to-r from-primary via-secondary to-danger w-full h-screen sticky top-0 flex flex-col items-center justify-top pt-60 ">
          <p className="soehne-heading text-2xl text-center mb-4">
            Anna Wikberg Agren
          </p>
          <p className="soehne-heading text-center text-6xl">
            Art Director <br /> \ Designer
          </p>
        </section>

        <section className="case-one bg-red-500 w-full h-screen sticky top-0 z-10 flex flex-col items-center justify-top pt-20 pb-20 ">
          <div className="w-full mx-auto">
            <img
              className="mb-4 bg-gray-100 w-1/3 object-cover"
              src="/images/wtest.png"
            />

            <h2 className="soehne-heading mb-2 mt-6 text-sm">
              Visual identity
            </h2>
            <p className="untitled-text text-center mb-4 w-5/6 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              imperdiet facilisis non, elit ipsum venenatis justo, egestas
              mattis.
            </p>
          </div>
        </section>

        <section className="footer-img w-full h-screen sticky z-10 top-0 flex flex-col items-center justify-center ">
          <img
            src="/images/anna-test.jpeg"
            className="text-center bg-gray-100 w-full h-auto object-cover"
          ></img>
        </section>
      </div>

      <Navlinks />
      <style jsx>{``}</style>
    </Layout>
  );
}
