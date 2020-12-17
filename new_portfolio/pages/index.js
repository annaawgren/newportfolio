import React, { useState, useEffect } from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";
import CaseLargeListing from "../components/CaseLargeListing";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Anna Wikberg Ågren ⚡️ Portfolio</title>
      </Head>

      {/* <Header /> */}

      <hero className="w-full h-screen">
        <section className="bg-gradient-to-r from-primary via-secondary to-danger w-full h-screen flex flex-col justify-top pt-12 px-5 md:px-10 lg:px-20 top-0 mb-screen">
          <p className="ivar-light bigfont">
            Anna Wikberg Ågren <br /> Art Director <span /> Designer
          </p>
        </section>
      </hero>

      <main>
        <CaseLargeListing />
      </main>

      <div className="w-full h-screen">
        <section className="bg-gradient-to-r from-primary via-secondary to-danger w-full h-screen flex flex-col px-5 md:px-10 lg:px-20 mb-screen">
          <p className="ivar-light bigfont">
            Say hello! <br /> hello@annawagren.work
          </p>
        </section>
      </div>

      <Navlinks />

      <style jsx>{`

      hero span {
  background-color: #000000;
  width: 1em;
  height: 0.02em;
  display: inline-block;
  vertical-align: middle;
  animation: hyphen 2s 1s infinite alternate cubic-bezier(0.86,0,0.07,1);
}
        
       
       
        .outer-img-box {
          position: relative;
          max-width: 800px;
        }
        
        .outer-img-box:before {
            display: block;
            content: "";
            width: 100%;
            padding-top: calc((304 / 460) * 100%);
          }
        }

        .outer-img-box > .inner-img-box {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
        
      `}</style>
    </Layout>
  );
}
