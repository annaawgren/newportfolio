import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Anna Wikberg Ågren Art Director</title>
      </Head>

      <hero className="w-full h-screen">
        <section className="bg-gradient-to-r from-primary via-secondary to-danger w-full h-screen flex flex-col items-center justify-top pt-40 sticky top-0 ">
          <p className="ivar-heading mediumfont text-center mb-6">
            Anna Wikberg Ågren
          </p>
          <p className="ivar-heading text-center bigfont">
            Art Director <br /> \ Designer
          </p>
        </section>
      </hero>

      <main className="sticky top-0 z-10 ">
        <section className="bg-red-100 w-full flex flex-col  items-center justify-center px-5 py-20 md:px-20 lg:px-20">
          <div className=" w-full h-auto ">
            <div className="outer-img-box w-full ">
              <img
                className="inner-img-box bg-gray-100 w-full h-full"
                src="/images/wtest.png"
                alt=""
              />
            </div>

            <div>
              <h2 className="untitled-text mb-6 mt-8 text-md text-center">
                Case Heading
              </h2>
              <p className="untitled-text mb-4 text-md text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                imperdiet facilisis non, elit ipsum venenatis justo, egestas
                mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo imperdiet facilisis non, elit ipsum venenatis justo,
                egestas mattis.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Navlinks />

      <style jsx>{`
        .bigfont {
          font-size: clamp(5rem, 10vw, 12rem);
          line-height: 1;
        }

        .mediumfont {
          font-size: clamp(0.2rem, 10vw, 1.7rem);
          line-height: 1;
        }

       

        .outer-img-box {
          position: relative;
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
