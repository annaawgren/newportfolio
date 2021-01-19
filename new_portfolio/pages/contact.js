import Layout from "../components/Layout";
import Header from "../components/Header";
import Navlinks from "../components/Navlinks";

export default function Contact() {
  return (
    <Layout>
      <div className="w-full h-full">
        <Header />

        <div className="lg:h-40 w-full" />

        <section className="w-full h-screen flex flex-col items-center">
          <h1 className="untitled-text text-lg mb-20 text-center ">
            I’d love to talk!
          </h1>
          <div className="flex flex-col justify-around items-center w-full px-5 md:px-10 lg:px-20">
            <a href="https://www.pinterest.se/annaawgren/" target="_blank">
              <p className="untitled-text text-md mb-2"> info@annaagren.se</p>
            </a>
            <a href="https://www.pinterest.se/annaawgren/" target="_blank">
              <p className="untitled-text text-md mb-2"> +46 707 13 54 91</p>
            </a>
          </div>

          <div className=" h-12 w-full" />

          <div className="flex flex-col justify-around items-center w-full px-5 md:px-10 lg:px-20">
            <a
              href="https://www.linkedin.com/in/anna-wikberg-ågren/"
              target="_blank"
            >
              <p className="untitled-text text-md mb-2"> LinkedIn</p>
            </a>

            <a href="https://www.pinterest.se/annaawgren/" target="_blank">
              <p className="untitled-text text-md mb-2"> Pinterest</p>
            </a>

            <a href="https://github.com/annaawgren" target="_blank">
              <p className="untitled-text text-md mb-2"> Github</p>
            </a>
          </div>
        </section>

        <Navlinks />
      </div>
    </Layout>
  );
}
