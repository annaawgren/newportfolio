import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>

      <Header />

      <div className="h-20 w-full" />

      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 px-5 md:px-10 lg:px-20">
          <Link href="/work/kupe">
            <div className="... bg-gray-400 h-auto w-full flex flex-col items-center">
              <img src="/images/claratest.png" />
              <p>textrubbe</p>
              <p>
                alkgralkrefgl aerng laknerfglkn aerlkgna erknghlkaenr lgkhnre
                hlkbn rlek
              </p>
            </div>
          </Link>

          <Link href="/work/telness">
            <div className="... bg-red-300">
              <div className="... bg-gray-400 h-auto">
                <img src="/images/telnesstest.png" />
              </div>
            </div>
          </Link>

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
          <div className="...">
            <div className="... bg-gray-400 h-auto">
              <img src="/images/telnesstest.png" />
            </div>
          </div>
          <div className="...">
            <div className="... bg-gray-400 h-auto">
              <img src="/images/claratest.png" />
            </div>
          </div>
        </div>
      </section>

      <div className="h-20 w-full" />

      <Navlinks />
    </Layout>
  );
}
