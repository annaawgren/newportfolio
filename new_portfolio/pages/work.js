import React from "react";
import { useLayoutEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Navlinks from "../components/Navlinks";

import CaseListing from "../components/CaseListing";

export default function Work() {
  // useLayoutEffect(() => {
  //   const listItem = document.querySelectorAll("li");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.intersectionRatio > 0.2) {
  //           entry.target.classList.add("in-view");
  //         } else {
  //           entry.target.classList.remove("in-view");
  //         }
  //       });
  //     },
  //     {
  //       threshold: [0.0, 0.2, 1.0],
  //     }
  //   );

  //   listItem.forEach((li) => {
  //     observer.observe(li);
  //   });
  // });

  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>

      <Header />

      <div className="w-full h-48 md:h-60 " />

      <CaseListing />

      <div className="h-40 w-full" />

      <Navlinks />

      <style jsx>{`
     

    

        }
      `}</style>
    </Layout>
  );
}
