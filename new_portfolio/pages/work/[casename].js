import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Navlinks from "../../components/Navlinks";

const Case = () => {
  const router = useRouter();
  const { casename } = router.query;

  return (
    <Layout>
      <Head>
        <title>Case</title>
      </Head>

      <Header />

      <div className="h-20 w-full" />

      <main className="w-full px-5 md:px-10 lg:px-20 ">
        <div className="hero-img h-1/3">
          {" "}
          <img
            src="../../images/wtest.png"
            className="h-1/3 w-full object-cover"
          />{" "}
        </div>

        <div className="h-10 w-full" />

        <p>
          I was the Art Director for Kupé Magazine between 2011-2017. I did
          everything between being responsible for the design-team, to concept
          development (I redesigned it twice), putting together teams and
          assigning illustrators and photographers, to writing articles,
          headings and editing content – to designing it all. Here’s Jens
          Lapidus, shot by Linda Alfvegren.
        </p>

        <div className="h-10 w-full" />

        <div className="grid grid-cols-2  gap-4 md:gap-4">
          <div className="... bg-gray-400 h-auto w-full flex flex-col items-center">
            <img src="/images/claratest.png" />
          </div>

          <div className="... bg-red-300">
            <div className="... bg-gray-400 h-auto">
              <img src="/images/telnesstest.png" />
            </div>
          </div>

          <div className="col-span-2 ... bg-green-100 ">
            <div className="... bg-gray-400 h-auto ">
              <img
                src="/images/wtest.png"
                className="h-auto object-cover w-full"
              />
            </div>
          </div>
          <div className="col-span-2 ...">
            <div className="... bg-gray-400 h-auto">
              <img src="/images/dance.gif" className="object-contain w-full" />
            </div>
          </div>
          <div className=" ...">
            <div className="... bg-gray-400 h-auto">
              <img src="/images/telnesstest.png" />
            </div>
          </div>
          <div className=" ...">
            <div className="... bg-gray-400 h-auto">
              <img src="/images/claratest.png" />
            </div>
          </div>
        </div>
      </main>

      <div className="h-20 w-full" />

      <Navlinks />

      <style jsx>
        {`
      .soehne-heading {
        font-family: "Soehne-drei";
      }
      .ivar-heading {
        font-family: "Ivar-display";
      }
      .ivar-light {
        font-family: "Ivar-fine-light";
      }
      .ivar-lightIta {
        font-family: "Ivar-fine-light-italic";
      }
      .untitled-text {
        font-family: "Untitled";
        font-size: 16px;
        line-height: 1.5;
      }

      }
    `}
      </style>
    </Layout>
  );
};

export default Case;
