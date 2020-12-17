import Header from "../components/Header";
import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";

export default function About() {
  return (
    <Layout>
      <Header />

      <div className=" h-28 w-full" />

      <div className="px-5 md:px-10 lg:px-20">
        <div className="outer-img-box w-full">
          <div className="inner-img-box bg-green-100 w-full h-full ">
            <div className="h-full w-full flex justify-center items-center">
              <img
                className="h-full w-full object-cover"
                src="/images/anna-test.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <section className="about-txt w-full h-screen flex flex-col items-center  bg-white mt-10 px-5 md:px-10 lg:px-20">
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

        {/* <div className="w-full h-screen flex flex-row justify-center absolute bottom-0 ">
          <img src="/images/anna-test.jpeg" className="w-full object-cover" />
        </div> */}
      </section>

      <Navlinks />

      <style jsx>
        {`
        .outer-img-box {
          position: relative;
          max-width: 600px;
          margin: auto;
        }
        
        .outer-img-box:before {
            display: block;
            content: "";
            width: 100%;
            padding-top: calc((304 / 460) * 100%);
          }
        }

        .outer-img-box > .inner-img-box {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
        `}
      </style>
    </Layout>
  );
}
