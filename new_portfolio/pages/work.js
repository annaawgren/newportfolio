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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 md:gap-4 px-5 md:px-10 lg:px-20">
          <Link href="/work/kupe">
            <div className="...h-auto w-full flex flex-col items-center">
              <img src="/images/claratest.png" className="case-thumb" />
              <p className=" untitled-text mb-2 mt-6 text-sm">Kupe Magazine</p>
            </div>
          </Link>

          <Link href="/work/telness">
            <div className="...h-auto w-full flex flex-col items-center">
              <img src="/images/telnesstest.png" className="case-thumb" />
              <p className="untitled-text mb-2 mt-6 text-sm">Telness</p>
            </div>
          </Link>

          <div className=" ...">
            <div className="...h-auto w-full flex flex-col items-center">
              <img
                src="/images/wtest.png"
                className="h-auto object-cover w-full case-thumb"
              />
              <p className="untitled-text mb-2 mt-6 text-sm">W Hotel</p>
            </div>
          </div>

          <div className="col-span-2 ...">
            <div className="... bg-gray-400 h-auto">
              <img
                src="/images/dance.gif"
                className="object-contain w-full case-thumb"
              />
            </div>
          </div>

          <div className="...">
            <div className="... bg-gray-400 h-auto">
              <img src="/images/telnesstest.png" className="case-thumb" />
            </div>
          </div>

          <div className="col-span-2 ...">
            <div className="...h-auto w-full flex flex-col items-center">
              <img
                src="/images/wtest.png"
                className="h-auto object-cover w-full case-thumb"
              />
              <p className="untitled-text mb-2 mt-6 text-sm">W Hotel</p>
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

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .case-thumb {
          animation: fadeIn 0.8 0 ease-in;
        }
      `}</style>
    </Layout>
  );
}
