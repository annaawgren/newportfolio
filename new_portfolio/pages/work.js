import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>

      <header className="w-full flex flex-row justify-between items-center h-12 px-20 fixed">
        <Link href="/">
          <div className="ivar-heading">Anna Wikberg Ågren</div>
        </Link>
        <div className="ivar-heading">Art Director \ Designer</div>
      </header>

      <div className="h-20 w-full" />

      <div className="px:10 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 ">
          <div className="... bg-gray-400 h-auto">
            <img src="/images/claratest.png" />
          </div>
          <div className="... bg-red-300">
            <div className="... bg-gray-400 h-auto">
              <img src="/images/telnesstest.png" />
            </div>
          </div>

          <div className="col-span-2 ... bg-green-100 ">
            <div className="... bg-gray-400 h-auto ">
              <img src="/images/wtest.png" className="object-cover" />
            </div>
          </div>
          <div className="col-span-2 ...">
            <div className="... bg-gray-400 h-auto ">
              <img src="/images/wtest.png" className="object-contain" />
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
      </div>

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

          .photo-h {
            height: 800px;
          }
          .photo-h-w {
            height: 500px;
          }
        `}
      </style>
    </Layout>
  );
}
