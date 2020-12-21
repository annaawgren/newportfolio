import Layout from "../components/Layout";
import Header from "../components/Header";
import Navlinks from "../components/Navlinks";

export default function Contact() {
  return (
    <Layout>
      <Header />

      <section className="w-full h-screen flex flex-col items-center">
        <a href="https://www.pinterest.se/annaawgren/" target="_blank">
          <p className="untitled-text text-md mb-2"> Mail</p>
        </a>
        <a href="https://www.pinterest.se/annaawgren/" target="_blank">
          <p className="untitled-text text-md mb-2"> Call</p>
        </a>

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

      <Navlinks />
    </Layout>
  );
}
