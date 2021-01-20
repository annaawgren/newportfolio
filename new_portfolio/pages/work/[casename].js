import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Navlinks from "../../components/Navlinks";
import Image from "../../components/Image";

import { KupeCase } from "../../components/cases/Kupe";
import { TelnessCase } from "../../components/cases/Telness";
import { WCase } from "../../components/cases/W";
import { VegogoCase } from "../../components/cases/Vegogo";
import { MlProjectionCase } from "../../components/cases/ML";
import { CoraCase } from "../../components/cases/Cora";
import { InteDuCase } from "../../components/cases/Intedu";
import { GirlsOnSkisCase } from "../../components/cases/Girlsonskis";
import { NolltidCase } from "../../components/cases/Nolltid";
import { OlgaCase } from "../../components/cases/Olga";
import { NewbieCase } from "../../components/cases/NewbieTech";
import { TheNewGreenCase } from "../../components/cases/TheNewGreen";

const cases = {
  cora: CoraCase,
  kupe: KupeCase,
  intedu: InteDuCase,
  w: WCase,
  girlsonskis: GirlsOnSkisCase,
  telness: TelnessCase,
  vegogo: VegogoCase,
  nolltid: NolltidCase,
  ml: MlProjectionCase,
  olga: OlgaCase,
  newbietech: NewbieCase,
  thenewgreen: TheNewGreenCase,
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
