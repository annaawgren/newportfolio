import Header from "../components/Header";
import Layout from "../components/Layout";
import ImageWithDelay from "../components/ImageWithDelay";

import Navlinks from "../components/Navlinks";

export default function About() {
  const images = [
    { image: "images/aboutme/1.png", delay: 300, top: 50, left: 50 },
    { image: "images/aboutme/2.png", delay: 600, top: 50, left: 50 },
    { image: "images/aboutme/3.png", delay: 900, top: 50, left: 50 },
    { image: "images/aboutme/4.png", delay: 1200, top: 50, left: 50 },
    { image: "images/aboutme/5.png", delay: 1500, top: 50, left: 50 },
    { image: "images/aboutme/1.png", delay: 300, top: 0, left: 0 },
    { image: "images/aboutme/2.png", delay: 600, top: 10, left: 0 },
    { image: "images/aboutme/3.png", delay: 900, top: 15, left: 20 },
    { image: "images/aboutme/4.png", delay: 1200, top: 0, left: 0 },
    { image: "images/aboutme/5.png", delay: 1500, top: 8, left: 0 },
  ];

  return (
    <Layout>
      <Header />

      <div className="w-96 h-96 mb-10 mx-auto relative">
        {images.map((imagedata) => {
          return <ImageWithDelay {...imagedata} key={imagedata.image} />;
        })}
      </div>

      <section className="text-justify w-full flex flex-col items-center mb-20 px-5 md:px-10 lg:px-20">
        <p className="untitled-text text-md mb-4">
          Hello world <span>👋🏻</span> I'm an enthusiastic and strategic Art
          Director and Designer with Frontend Developer skills and experience
          design at heart. I'm passionate about solving problems that matter and
          creating awesome and meaningful content, design, products and
          experiences - on all things digital, IRL and paper – for people to
          love.
        </p>

        <p className="untitled-text text-md mb-4">
          I'm also a happy tech enthusiast with a love for machine learning and
          a strong interest in ethics and how things we design impact our world
          and ourselves. I believe in the importance of detail and being
          passionate about everything I do. I practice design thinking, lifelong
          learning – and having fun!
        </p>

        <p className="untitled-text text-md mb-4">
          I have a 15 years background as an editorial Art Director focusing on
          new design, concept development, redesign and production of
          (award-winning!) magazines, among others SJ's on-board magazine Kupé.
          I have also been teaching in Magazine Production and designed 20+
          illustrated facts books for a number of different publishing houses.
        </p>
        <p className="untitled-text text-md mb-4">
          In 2018, I leveled up my digital skills at the Design Lead full-time
          program at Hyper Island and learned to code at Technigo’s Frontend
          Developer Boot Camp. Since then I have worked as a Designer and
          Frontend developer at the (now closed) digital product Studio
          Department in Stockholm. I'm also co-founder of{" "}
          <span>
            <a href="https://newbietech.io" target="_blank">
              Newbie Tech Exploration Lab
            </a>
          </span>{" "}
          where we facilitate hands-on creative tech explorations for beginners.
        </p>
        <p className="untitled-text text-md mb-4">
          I'm currently available for hire, full-time or freelance!
        </p>
      </section>

      <section className="studies text-sm flex flex-col lg:flex-row justify-between w-full px-5 md:px-10 lg:px-20">
        <div className="flex flex-col text-center">
          <div className="pb-6 mb-8  ">
            <span className="border-b border-black pb-3 ">
              Clients I have worked with
            </span>
          </div>
          <ul>
            <li className="mb-2">Apollo</li>
            <li className="mb-2">Bokförlaget Arena</li>
            <li className="mb-2">Bonnier Fakta</li>
            <li className="mb-2">Bonnier Tidskrifter</li>
            <li className="mb-2">Bokförlaget Forum</li>
            <li className="mb-2">Content Innovation</li>
            <li className="mb-2">Egmont Publishing </li>
            <li className="mb-2">Geelmuyden.Kiese</li>
            <li className="mb-2">Hemnet</li>
            <li className="mb-2">Hyper Island</li>
            <li className="mb-2">Klintberg Niléhn</li>
            <li className="mb-2">Kulturtidskriften Cora</li>
            <li className="mb-2">Luleå Tekniska Universitet</li>
            <li className="mb-2">Massolit Förlag</li>
            <li className="mb-2">Norstedts</li>
            <li className="mb-2">Office Depot</li>
            <li className="mb-2">Proffice</li>
            <li className="mb-2">SKAP</li>
            <li className="mb-2">Sveriges Tidskrifter</li>
            <li className="mb-2">SJ</li>
            <li className="mb-2">Tidningsstatistik / TS</li>
            <li className="mb-2">Telness</li>
            <li className="mb-2">Tidningen Vi</li>
            <li className="mb-2">Tukan Förlag</li>
            <li className="mb-2">W Hotel</li>
          </ul>
        </div>

        <div className="flex flex-col text-center mt-20 md:mt-0">
          <div className="pb-6 mb-8  ">
            <span className="border-b border-black pb-3 ">
              Things I have studied
            </span>
          </div>

          <ul>
            <li className="mb-4">
              Designing Ethical Futures <br />
              @Copenhagen Institute of Interaction Design 2019
            </li>
            <li className="mb-4">
              Frontend Developer <br />
              @Technigo Boot Camp 2018
            </li>
            <li className="mb-4">
              Interactive Art Director / Design Lead <br />
              @Hyper Island 2017-2018
            </li>
            <li className="mb-4">
              HTML & CSS <br />
              @Tjejer Kodar 2017
            </li>
            <li className="mb-4">
              Social Video <br />
              @Bergs 2017
            </li>
            <li className="mb-4">
              UX / UI Design <br />
              @Berghs 2016
            </li>
            <li className="mb-4">
              Copywriting <br />
              @Berghs 2009
            </li>
            <li className="mb-4">
              Illustration <br />
              @Parsons The New School, NY 2008
            </li>
            <li className="mb-4">
              Art <br />
              @Konstskolan Basis 2001-2002
            </li>
            <li className="mb-4">
              Magazine Design <br />
              @Bergs 1999 - 2000
            </li>
            <li className="mb-4">
              History of Literature <br />
              @LTU 1998
            </li>
          </ul>
        </div>
      </section>

      {/* <div className="w-full px-5 md:px-10 lg:px-20">
        <div className="outer-img-box w-full">
          <div className="inner-img-box w-full h-full ">
            <div className="h-full w-full flex justify-center items-center">
              <img
                className="h-full w-full object-cover"
                src="/images/anna-test.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full h-40 md:h-60 " />

      <Navlinks />

      <style jsx>
        {`
        
        .outer-img-box {
          position: relative;
          
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
