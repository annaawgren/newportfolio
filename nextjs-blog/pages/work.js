import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>
      <h1>Work</h1>
      <h2 className=" text-9xl">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
