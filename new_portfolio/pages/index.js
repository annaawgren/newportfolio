import React, { useState, useEffect, useLayoutEffect } from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";
import Image from "../components/Image";
import Header from "../components/Header";

export default function Home() {
  useLayoutEffect(() => {
    const heroTag = document.querySelectorAll("hero");

    const fadeHero = function () {
      const pixels = window.pageYOffset;

      heroTag.style.opacity = 1 - pixels / 200;
    };

    window.addEventListener("scroll", function () {
      fadeHero;
    });
  });
  return (
    <Layout>
      <Head>
        <title>Anna Wikberg Ågren Art Director</title>
      </Head>

      {/* <Header /> */}

      <hero className="w-full h-screen">
        <section className="bg-gradient-to-r from-primary via-secondary to-danger w-full h-screen flex flex-col items-center justify-top pt-24 md:pt-30 sticky top-0 ">
          <p className="ivar-light mediumfont text-center mb-6">
            Anna Wikberg Ågren
          </p>
          <p className="ivar-light text-center bigfont">
            Art Director <br /> \ Designer
          </p>
        </section>
      </hero>

      <main>
        <section className="bg-yellow-100 w-full h-screen flex flex-col items-center justify-top px-5 py-32 md:px-20 sticky top-0 z-10 ">
          <div className=" w-full ">
            <Image />

            <div>
              <h2 className="untitled-text mb-6 mt-8 text-md text-center">
                Case Heading
              </h2>
              <p className="untitled-text mb-4 text-md text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                imperdiet facilisis non, elit ipsum venenatis justo, egestas
                mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo imperdiet facilisis non, elit ipsum venenatis justo,
                egestas mattis.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-yellow-100 w-full h-screen flex flex-col items-center justify-top px-5 py-32 md:px-20 sticky top-0 z-10 ">
          <div className=" w-full ">
            <Image />

            <div>
              <h2 className="untitled-text mb-6 mt-8 text-md text-center">
                Case Heading
              </h2>
              <p className="untitled-text mb-4 text-md text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                imperdiet facilisis non, elit ipsum venenatis justo, egestas
                mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo imperdiet facilisis non, elit ipsum venenatis justo,
                egestas mattis.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-green-100 w-full h-screen flex flex-col items-center justify-top px-5 py-32 md:px-20 sticky top-0 z-10 ">
          <div className=" w-full ">
            <Image />

            <div>
              <h2 className="untitled-text mb-6 mt-8 text-md text-center">
                Case Heading
              </h2>
              <p className="untitled-text mb-4 text-md text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                imperdiet facilisis non, elit ipsum venenatis justo, egestas
                mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo imperdiet facilisis non, elit ipsum venenatis justo,
                egestas mattis.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-red-100 w-full h-screen flex flex-col items-center justify-top px-5 py-32 md:px-20 sticky top-0 z-10 ">
          <div className=" w-full ">
            <Image />

            <div>
              <h2 className="untitled-text mb-6 mt-8 text-md text-center">
                Case Heading
              </h2>
              <p className="untitled-text mb-4 text-md text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                imperdiet facilisis non, elit ipsum venenatis justo, egestas
                mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo imperdiet facilisis non, elit ipsum venenatis justo,
                egestas mattis.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-100 w-full h-screen flex flex-col items-center justify-top px-5 py-32 md:px-20 sticky top-0 z-10 ">
          <div className=" w-full ">
            <Image />

            <div>
              <h2 className="untitled-text mb-6 mt-8 text-md text-center">
                Case Heading
              </h2>
              <p className="untitled-text mb-4 text-md text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                imperdiet facilisis non, elit ipsum venenatis justo, egestas
                mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo imperdiet facilisis non, elit ipsum venenatis justo,
                egestas mattis.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Navlinks />

      <style jsx>{`

        {/* @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translate(0, 24px);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0);
          }
        }

        h2,
        p,
        .image-fadein {
          animation: fadeIn 0.4 1s both;
        } */}

        
       
       
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
