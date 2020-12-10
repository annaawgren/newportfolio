import React from "react";
import { useLayoutEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Navlinks from "../components/Navlinks";

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

      <div className="h-20 w-full" />

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 px-5 md:px-10 lg:px-20">
        <li>
          <Link href="/work/kupe">
            <a className="...h-auto w-full flex flex-col items-center">
              <img src="/images/claratest.png" className="case-thumb" />
              <p className=" untitled-text mb-2 mt-6 text-sm">Kupe Magazine</p>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/work/telness">
            <a className="... h-auto w-full flex flex-col items-center">
              <img src="/images/telnesstest.png" className="case-thumb" />
              <p className="untitled-text mb-2 mt-6 text-sm">Telness</p>
            </a>
          </Link>
        </li>

        <li>
          <a className="... h-auto w-full flex flex-col items-center">
            <img
              src="/images/wtest.png"
              className="object-cover w-full case-thumb"
            />
            <p className="untitled-text mb-2 mt-6 text-sm">W Hotel</p>
          </a>
        </li>

        <li>
          <a className="col-span-2 ... bg-gray-400 h-auto">
            <img
              src="/images/dance.gif"
              className="object-contain w-full case-thumb"
            />
          </a>
        </li>

        <li>
          <Link href="/work/kupe">
            <a className="...h-auto w-full flex flex-col items-center">
              <img src="/images/claratest.png" className="case-thumb" />
              <p className=" untitled-text mb-2 mt-6 text-sm">Kupe Magazine</p>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/work/telness">
            <a className="... h-auto w-full flex flex-col items-center">
              <img src="/images/telnesstest.png" className="case-thumb" />
              <p className="untitled-text mb-2 mt-6 text-sm">Telness</p>
            </a>
          </Link>
        </li>

        <li>
          <a className="... h-auto w-full flex flex-col items-center">
            <img
              src="/images/wtest.png"
              className="object-cover w-full case-thumb"
            />
            <p className="untitled-text mb-2 mt-6 text-sm">W Hotel</p>
          </a>
        </li>

        <li>
          <a className=" col-span-2  ... bg-gray-400 h-auto">
            <img
              src="/images/dance.gif"
              className="object-contain w-full case-thumb"
            />
          </a>
        </li>
      </ul>

      <div className="h-20 w-full" />

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
          transition: 900ms;
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
        transition-delay: 1s;
      }
      li.in-view:nth-child(4) {
        transition-delay: 1.5s;
      }
      li.in-view:nth-child(5) {
        transition-delay: 2s;
      }
      li.in-view:nth-child(6) {
        transition-delay: 2.5s;
      }

    }

        }
      `}</style>
    </Layout>
  );
}
