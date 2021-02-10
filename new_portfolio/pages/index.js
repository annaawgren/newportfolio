import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import Layout from "../components/Layout";

import Header from "../components/Header";
import CaseListingNew from "../components/CaseListingNew";
import Navlinks from "../components/Navlinks";

const THRESHOLD = [0.25, 0.5, 0.75];

export default function Home() {
  const [entry] = useInView({ threshold: THRESHOLD });
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

      <div className="h-40 w-full" />

      <Header initialPosition="center" />

      <div className="h-40 w-full" />

      <CaseListingNew />

      <div className="h-40 w-full" />

      <Navlinks />
    </Layout>
  );
}
