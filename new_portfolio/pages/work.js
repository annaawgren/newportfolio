import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Navlinks from "../components/Navlinks";

import CaseListing from "../components/CaseListing";

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>

      <Header />

      <CaseListing />

      <div className="h-40 w-full" />

      <Navlinks />
    </Layout>
  );
}
