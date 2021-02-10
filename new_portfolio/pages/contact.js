import Layout from "../components/Layout";
import Header from "../components/Header";
import Navlinks from "../components/Navlinks";
import * as React from "react";

import LoveToTalkSVG from "../components/LoveToTalkSVG";

export default function Contact() {
  return (
    <Layout>
      <div />

      <div className="w-full h-full relative z-10">
        <Header />

        <div className="h-8 w-full" />

        <div className="mx-auto flex flex-row justify-center items-center w-full">
          <LoveToTalkSVG />
        </div>

        <div className="flex flex-col justify-around items-center w-full px-5 md:px-40 lg:px-20">
          <a href="https://www.pinterest.se/annaawgren/" target="_blank">
            <p className="untitled-text text-md mb-2"> info@annaagren.se</p>
          </a>
          <a href="https://www.pinterest.se/annaawgren/" target="_blank">
            <p className="untitled-text text-md mb-2"> +46 707 13 54 91</p>
          </a>
        </div>

        <div className=" h-12 w-full" />

        <div className="flex flex-col justify-around items-center w-full px-5 md:px-10 lg:px-20">
          <a
            href="https://www.linkedin.com/in/anna-wikberg-ågren/"
            target="_blank"
          >
            <p className="untitled-text text-md mb-2"> LinkedIn</p>
          </a>

          <a href="https://www.pinterest.se/annaawgren/" target="_blank">
            <p className="untitled-text text-md mb-2"> Pinterest</p>
          </a>

          <a href="https://github.com/annaawgren" target="_blank">
            <p className="untitled-text text-md"> Github</p>
          </a>
        </div>

        <Navlinks />
      </div>
      <style jsx>{``}</style>
    </Layout>
  );
}
