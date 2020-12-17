import React, { useState, useEffect } from "react";
import Head from "next/head";

import { InView, useInView } from "react-intersection-observer";

import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";
import CaseLargeListing from "../components/CaseLargeListing";

const THRESHOLD = [0.25, 0.5, 0.75];

export default function Home() {
  const [ref, inView, entry] = useInView({ threshold: THRESHOLD });
  let extraClasses = "";

  if (entry && entry.intersectionRatio <= 0.75) {
    console.log("hej");
    extraClasses = "opacity-0 -translate-y-3 transform";
  } else {
    console.log("hola");
  }

  return (
    <Layout>
      <Head>
        <title>Anna Wikberg Ågren ⚡️ Portfolio</title>
      </Head>

      <hero className="w-full h-screen">
        <section className="bg-gradient-to-r from-primary via-secondary to-danger w-full h-screen flex flex-col justify-top pt-12 px-5 md:px-10 lg:px-20 top-0 ">
          <p
            ref={ref}
            className={`ivar-light bigfont relative transition-all duration-500 ${extraClasses}`}
          >
            Anna Wikberg Ågren <br /> Art Director \ Designer{" "}
          </p>
        </section>
      </hero>

      <main>
        <CaseLargeListing />
      </main>

      <div className="w-full h-screen">
        <section className="bg-gradient-to-r from-primary via-secondary to-danger w-full h-screen flex flex-col px-5 md:px-10 lg:px-20 pt-12">
          <p className="ivar-lightIta bigfont">
            Say hello! <br /> I'd love to talk{" "}
            <span className="ivar-light">design</span> tech sustainable futures
            code or just have a coffee.
          </p>
        </section>
      </div>

      <Navlinks />

      <style jsx>{`

      @keyframes hyphen {
        0% {
          height: 100px;
        }
        
        100% {
          height: 50px;
        }
      }

      hero span {
          background-color: black;
          height: 100px;
          width: 2px;
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
