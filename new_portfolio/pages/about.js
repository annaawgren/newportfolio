import Header from "../components/Header";
import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";

export default function About() {
  return (
    <Layout>
      <Header />

      <div className="h-48 w-full" />

      <section className="about-txt w-full h-screen flex flex-col items-center  px-5 md:px-10 lg:px-20">
        <p className="untitled-text text-md text-justify mb-4">
          Hi! I'm an enthusiastic and strategic Art Director \ Designer with
          Frontend Developer skills and experience design at heart. I'm
          passionate about solving problems that matter and creating awesome and
          meaningful content, design, products and experiences - on www, IRL and
          paper – for people to love!
        </p>
        <p className="untitled-text text-md text-justify mb-4">
          I have 15 years of industry experience as an Art Director and since
          2018 I have also worked as a digital designer and frontend developer.
          I have worked at Bonnier Tidskrifter, as a Design Director and partner
          at a content-agency I have done a lot of new designs, redesigns and
          concept development for (award-winning!) magazines and designed 20+
          illustrated facts books for different publishing houses. I'm also a
          happy tech-enthusiast and co-founder of Newbie Tech Exploration Lab
          (newbietech.io), where we facilitate hands-on creative tech
          experiences for beginners.
        </p>

        <p className="untitled-text text-md text-justify mb-4">
          I built this portfolio in next.js and xxx.
        </p>
      </section>

      <div className="w-full h-screen bg-transparent"></div>

      <div className="w-full h-64 flex flex-row justify-center px-5 md:px-10 lg:px-20 sticky bottom-0 z-10">
        <img
          src="/images/anna-test.jpeg"
          className="h-full text-center object-cover"
        />
      </div>

      <div className=" h-40 w-full" />
      <Navlinks />
    </Layout>
  );
}
