import React from "react";
import { useLayoutEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Navlinks from "../components/Navlinks";
import Image from "../components/Image";
import CaseListing from "../components/CaseListing";

export default function Work() {
  useLayoutEffect(() => {
    const listItem = document.querySelectorAll("li");

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

    listItem.forEach((li) => {
      observer.observe(li);
    });
  });

  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>

      <Header />

      <div className=" h-28 w-full" />

      <CaseListing />

      <div className="h-40 w-full" />

      <Navlinks />

      <style jsx>{`
      @keyframes show {
      0% {
        opacity: 0;
        transform: translate(0, 40px) ;
      }
      100% {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      li.in-view  {
        opacity: 0;
        scale: 0;
          transition: 400ms;
          transform: translateY(25px);
      }
      li {
        opacity: 0;
      }
      li.in-view {
        opacity: 1;
        scale: 1;
        transform: translateY(0);
      }

      
     
      li.in-view:nth-child(1) {
        transition-delay: 0.0s;
      }
      li.in-view:nth-child(2) {
        transition-delay: 0.2s;
      }
      li.in-view:nth-child(3) {
        transition-delay: 0.4s;
      }
      li.in-view:nth-child(4) {
        transition-delay: 0.6s;
      }
      li.in-view:nth-child(5) {
        transition-delay: 0.8s;
      }
      li.in-view:nth-child(6) {
        transition-delay: 1s;
      }

    }

        }
      `}</style>
    </Layout>
  );
}
