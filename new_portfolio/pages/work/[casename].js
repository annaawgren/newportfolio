import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Navlinks from "../../components/Navlinks";
import Image from "../../components/Image";

import { KupeCase } from "../../components/cases/Kupe";
import { MLLAB } from "../../components/cases/ML";
import { NolltidCase } from "../../components/cases/Nolltid";
import { TelnessCase } from "../../components/cases/Telness";
import { VegogoCase } from "../../components/cases/Vegogo";
import { WCase } from "../../components/cases/W";
import { CoraCase } from "../../components/cases/Cora";
import { GirlsOnSkisCase } from "../../components/cases/Girlsonskis";
import { InteDUCase } from "../../components/cases/Intedu";
import { NewbieCase } from "../../components/cases/NewbieTech";
import { OlgaCase } from "../../components/cases/Olga";
import { TheNewGreenSaladCase } from "../../components/cases/TheNewGreenSalad";

const cases = {
  w: WCase,
  girlsonskis: GirlsOnSkisCase,
  nolltid: NolltidCase,
  newbietech: NewbieCase,
  cora: CoraCase,
  intedu: InteDUCase,
  kupe: KupeCase,
  ml: MLLAB,
  vegogo: VegogoCase,
  telness: TelnessCase,
  olga: OlgaCase,
  thenewgreensalad: TheNewGreenSaladCase,
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
        <Image />

        <div className="h-10 w-full" />

        {currentCase.introtext}

        <div className="h-10 w-full" />

        {currentCase.images}
      </main>

      <div className="h-20 w-full" />

      <Navlinks />
    </Layout>
  );
};

export default Case;
