import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Navlinks from "../../components/Navlinks";
import Image from "../../components/Image";

import { KupeCase } from "../../components/cases/Kupe";
import { TelnessCase } from "../../components/cases/Telness";
import { WCase } from "../../components/cases/W";
import { MlProjectionCase } from "../../components/cases/ML";
import { CoraCase } from "../../components/cases/Cora";
import { NewbieCase } from "../../components/cases/NewbieTech";

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
  console.log(currentCase);

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
        <Image imageSrc={`cases/${casename}/${currentCase.heroimageWork}`} />

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
