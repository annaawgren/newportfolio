import React, { useState, useEffect } from "react";
import Head from "next/head";

import { InView, useInView } from "react-intersection-observer";

import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";
import CaseLargeListing from "../components/CaseLargeListing";
import Link from "next/link";

const THRESHOLD = [0.25, 0.5, 0.75];

export default function Home() {
  const [ref, inView, entry] = useInView({ threshold: THRESHOLD });
  let extraClasses = "";

  if (entry && entry.intersectionRatio <= 0.75) {
    extraClasses = "opacity-0 -translate-y-3 transform";
  } else {
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
            className={`ivar-light biggestfont relative transition-all duration-500 ${extraClasses}`}
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
          <p className="ivar-light bigfont">
            I'm passionate about solving problems that matter and creating
            awesome and meaningful{" "}
            <span className="ivar-lightIta">content</span>,{" "}
            <span className="ivar-lightIta">design</span>,{" "}
            <span className="ivar-lightIta">products</span> and{" "}
            <span className="ivar-lightIta">experiences</span> - on everything
            digital, IRL and paper – for people to love.
          </p>
          <div className="w-full h-10" />
          <Link href="/contact">
            <a className="flex flex-row">
              <p className="ivar-light bigfont mr-1">Say hello!</p>
              <svg
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
              </svg>
            </a>
          </Link>
        </section>
      </div>

      <Navlinks />

      <style jsx>{`

        @keyframes spinner {
          0% {
            transform: rotate(0deg);
           
          }
          100% {
            transform: rotate(360deg);
           
          }
        }

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

       
          svg:hover {
            
            animation: spinner 1s ease-in-out; 

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
