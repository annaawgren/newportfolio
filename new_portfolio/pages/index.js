import React, { useState, useLayoutEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import Navlinks from "../components/Navlinks";

export default function Home() {
  useLayoutEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.2) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: [0.0, 0.2, 1.0],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);

      // const img = section.querySelector("img")

      // document.addEventListener("mousemove", function (event) {
      //   const aimX = (event.pageX - (window.innerWidth / 2)) / 20
      //   const aimY = (event.pageY – (window.innerHeight /2)) / -20
      //   div.style.transform = `rotateX(${aimY}deg) rotateY(${aimX}deg)`
      // })
    });
  });

  return (
    <Layout>
      <Head>
        <title>Anna Wikberg Ågren Art Director</title>
      </Head>

      <main className="w-full">
        <section className="intro bg-gradient-to-r from-primary via-secondary to-danger w-full h-screen sticky top-0 flex flex-col items-center justify-top pt-60 ">
          <p className="ivar-light text-lg text-center mb-4">
            Anna Wikberg Agren
          </p>
          <p className="ivar-heading text-center text-9xl">
            Art Director <br /> \ Designer
          </p>
        </section>

        <section className="case-one bg-white w-full h-screen sticky top-0 z-10 flex flex-col items-center justify-top pt-20 pb-20 ">
          <div className="w-full flex flex-col items-center justify-center">
            <img
              className="mb-4 bg-gray-100 w-5/6 object-cover banan"
              src="/images/wtest.png"
              alt=""
            />

            <h2 className="untitled-text mb-2 mt-6 text-md">Case Heading</h2>
            <p className="untitled-text text-center mb-4 w-5/6 text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              imperdiet facilisis non, elit ipsum venenatis justo, egestas
              mattis.
            </p>
          </div>
        </section>

        <section className="case-one bg-white w-full h-screen sticky top-0 z-10 flex flex-col items-center justify-top pt-20 pb-20 ">
          <div className="w-full flex flex-col items-center justify-center">
            <img
              className="mb-4 bg-gray-100 w-5/6 object-cover banan"
              src="/images/wtest.png"
              alt=""
            />

            <h2 className="untitled-text mb-2 mt-6 text-md">Case Heading</h2>
            <p className="untitled-text text-center mb-4 w-5/6 text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              imperdiet facilisis non, elit ipsum venenatis justo, egestas
              mattis.
            </p>
          </div>
        </section>

        <section className="case-one bg-white w-full h-screen sticky top-0 z-10 flex flex-col items-center justify-top pt-20 pb-20 ">
          <div className="w-full flex flex-col items-center justify-center">
            <img
              className="mb-4 bg-gray-100 w-5/6 object-cover banan"
              src="/images/wtest.png"
              alt=""
            />

            <h2 className="untitled-text mb-2 mt-6 text-md">Case Heading</h2>
            <p className="untitled-text text-center mb-4 w-5/6 text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              imperdiet facilisis non, elit ipsum venenatis justo, egestas
              mattis.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer-img w-full h-screen sticky z-10 top-0 flex flex-col items-center justify-center ">
        <img
          src="/images/anna-test.jpeg"
          className="text-center bg-gray-100 w-full h-auto object-cover"
        ></img>
      </footer>

      <Navlinks />
      <style jsx>{`
        @keyframes show {
          0% {
            opacity: 0;
            transform: translate(0, 40px) scale(0.85);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          section.in-view img {
            animation: show 0.8s 0s ease-out;
          }
          section img {
            opacity: 0;
          }
          section.in-view img {
            opacity: 1;
          }
        }

        section {
          perspective: 800deg;
        }
         {
          @media (prefers-reduced-motion: no-preference) and (min-width: 900px) {
            html,
            body {
              height: 100%;
              overflow: hidden;
            }

            main {
              height: 100vh;
              overflow-y: scroll;
              scroll-snap-type: y mandatory;
            }

            section {
              scroll-snap-align: start;
            }
          }
        }
      `}</style>
    </Layout>
  );
}
