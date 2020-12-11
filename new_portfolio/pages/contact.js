import Layout from "../components/Layout";
import Header from "../components/Header";
import Navlinks from "../components/Navlinks";

export default function Contact() {
  return (
    <Layout>
      <Header />
      <hero className="w-full h-screen">
        <section className="w-full h-screen flex flex-col items-center justify-center md:pt-50 sticky top-0 ">
          <p className="untitled-text text-md mb-2">hello@annawagren.work</p>
          <p className="untitled-text text-md mb-2">+ 46 707 13 54 91</p>

          <div className=" h-12 w-full" />

          <div className="flex flex-row justify-around items-center w-full px-5 md:px-10 lg:px-20">
            <a href="https://www.pinterest.se/annaawgren/" target="_blank">
              <p className="untitled-text text-md mb-2"> Pinterest</p>
            </a>
            <a
              href="https://www.linkedin.com/in/anna-wikberg-ågren/"
              target="_blank"
            >
              <p className="untitled-text text-md mb-2"> LinkedIn</p>
            </a>

            <a href="https://github.com/annaawgren" target="_blank">
              <p className="untitled-text text-md mb-2"> Github</p>
            </a>
          </div>
        </section>
      </hero>

      <Navlinks />
    </Layout>
  );
}
