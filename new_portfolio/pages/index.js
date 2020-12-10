import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Anna Wikberg Ågren Art Director</title>
      </Head>

      <main className="w-full h-screen">
        <section className="intro bg-gradient-to-r from-primary via-secondary to-danger w-full h-screen sticky top-0 flex flex-col items-center justify-top pt-40 ">
          <p className="ivar-light text-md text-center mb-4 text-white">
            Anna Wikberg Agren
          </p>
          <p className="ivar-light text-center bigfont text-white">
            Art Director <br /> \ Designer
          </p>
        </section>
      </main>

      <Navlinks />

      <style jsx>{`
        .bigfont {
          font-size: 12rem;
          line-height: 1;
        }
      `}</style>
    </Layout>
  );
}
