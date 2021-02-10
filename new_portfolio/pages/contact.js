import Layout from "../components/Layout";
import Header from "../components/Header";
import Navlinks from "../components/Navlinks";
import * as React from "react";

import { motion } from "framer-motion";

export default function Contact() {
  const easing = {
    ease: (progress) => progress * progress,
  };
  return (
    <Layout>
      <div />
      <motion.figure
        className="bg-pink-100 w-full h-screen fixed origin-bottom"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        originY={1}
        transition={{ duration: 1 }}
      />
      <div className="w-full h-full relative z-10">
        <Header />

        <div className="lg:h-20 w-full" />

        <motion.section
          className="w-full h-screen flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex flex-col justify-around items-center w-full px-5 md:px-10 lg:px-20">
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
        </motion.section>

        <Navlinks />
      </div>
    </Layout>
  );
}
