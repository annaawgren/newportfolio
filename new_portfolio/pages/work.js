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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-4 md:gap-4 px-5 md:px-10 lg:px-20">
          <Link href="/work/kupe">
            <div className="...h-auto w-full flex flex-col items-center">
              <img src="/images/claratest.png" />
              <p className="untitled-text mb-2 mt-6 text-sm">Kupe Magazine</p>
            </div>
          </Link>

          <Link href="/work/telness">
            <div className="...h-auto w-full flex flex-col items-center">
              <img src="/images/telnesstest.png" />
              <p className="untitled-text mb-2 mt-6 text-sm">Telness</p>
            </div>
          </Link>

          <div className="col-span-2 ...">
            <div className="...h-auto w-full flex flex-col items-center">
              <img
                src="/images/wtest.png"
                className="h-auto object-cover w-full"
              />
              <p className="untitled-text mb-2 mt-6 text-sm">W Hotel</p>
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

          <div className="col-span-2 ...">
            <div className="...h-auto w-full flex flex-col items-center">
              <img
                src="/images/wtest.png"
                className="h-auto object-cover w-full"
              />
              <p className="untitled-text mb-2 mt-6 text-sm">W Hotel</p>
              {/* <p className="untitled-text text-center mb-4 w-5/6 text-sm">
                alkgralkrefgl aerng laknerfglkn aerlkgna erknghlkaenr lgkhnre
                hlkbn rlek
              </p> */}
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
