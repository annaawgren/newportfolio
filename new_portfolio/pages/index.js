import React, { useState, useEffect } from "react";
import Head from "next/head";
import { InView, useInView } from "react-intersection-observer";
import Layout from "../components/Layout";
import Link from "next/link";

import Header from "../components/Header";
import CaseListingNew from "../components/CaseListing";
import Navlinks from "../components/Navlinks";
import CaseListingHome from "../components/CaseListingHome";

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

      <Header />

      {/* 
      <section>
        <NewSite />
      </section> */}

      <CaseListingNew />
      <div className="h-40 w-full" />

      <Navlinks />

      <style jsx>{`




  }
`}</style>
    </Layout>
  );
}
