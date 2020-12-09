import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Navlinks from "../../components/Navlinks";

import { KupeCase } from "../../components/cases/Kupe";
import { TelnessCase } from "../../components/cases/Telness";
import { WCase } from "../../components/cases/W";
import { VegogoCase } from "../../components/cases/Vegogo";
import { MLLAB } from "../../components/cases/ML";
import { NewbieCase } from "../../components/cases/Newbie";

const cases = {
  kupe: KupeCase,
  telness: TelnessCase,
  vegogo: VegogoCase,
  whotel: WCase,
  newbietech: NewbieCase,
  machinelearninglab: MLLAB,
};

const Case = () => {
  const router = useRouter();
  const { casename } = router.query;

  const currentCase = cases[casename];

  if (!currentCase) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>Case</title>
      </Head>

      <Header />

      <main className="w-full px-5 md:px-10 lg:px-20 ">
        <div className="hero-img h-1/3">
          {" "}
          <img
            src={`../../images/${casename}/${currentCase.heroimage}`}
            className="h-1/3 w-full object-cover"
          />{" "}
        </div>

        <div className="h-10 w-full" />

        {currentCase.introtext}

        <div className="h-10 w-full" />

        {currentCase.images}
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
