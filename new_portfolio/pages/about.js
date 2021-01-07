import Header from "../components/Header";
import Layout from "../components/Layout";
import ImageWithDelay from "../components/ImageWithDelay";

import Navlinks from "../components/Navlinks";

export default function About() {
  let images = [
    {
      image: "images/aboutme/me_1.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_2.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_3.png",
      transform: "scale(0.8)",
    },
    {
      image: "images/aboutme/me_4.png",
      transform: "scale(0.6)",
    },
    {
      image: "images/aboutme/me_5.png",
      transform: "scale(0.9)",
    },
    {
      image: "images/aboutme/me_6.png",
      transform: "scale(0.9)",
    },
    {
      image: "images/aboutme/me_7.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_8.png",
      transform: "scale(0.7)",
    },
    {
      image: "images/aboutme/me_9.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_10.png",
      transform: "scale(0.7)",
    },
    {
      image: "images/aboutme/me_11.png",
      transform: "scale(0.4)",
    },
    {
      image: "images/aboutme/me_12.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_13.png",
      transform: "scale(0.8)",
    },
    {
      image: "images/aboutme/me_14.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_15.png",
      transform: "scale(0.7)",
    },
    {
      image: "images/aboutme/me_16.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_17.png",
      transform: "scale(0.7)",
    },
    {
      image: "images/aboutme/me_18.png",
      transform: "scale(0.6)",
    },
    {
      image: "images/aboutme/me_19.png",
      transform: "scale(0.7)",
    },
    {
      image: "images/aboutme/me_20.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_21.png",
      transform: "scale(0.3)",
    },
    {
      image: "images/aboutme/me_22.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_23.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_24.png",
      transform: "scale(0.7)",
    },
    {
      image: "images/aboutme/me_25.png",
      transform: "scale(0.9)",
    },
    {
      image: "images/aboutme/me_26.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_27.png",
      transform: "scale(0.2)",
    },
    {
      image: "images/aboutme/me_28.png",
      transform: "scale(0.8)",
    },
    {
      image: "images/aboutme/me_29.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_30.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_31.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_32.png",
      transform: "scale(0.7)",
    },
    {
      image: "images/aboutme/me_33.png",
      transform: "scale(0.9)",
    },
    {
      image: "images/aboutme/me_34.png",
      transform: "scale(0.7)",
    },
    {
      image: "images/aboutme/me_35.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_36.png",
      transform: "scale(0.6)",
    },
    {
      image: "images/aboutme/me_37.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_38.png",
      transform: "scale(0.8)",
    },
    {
      image: "images/aboutme/me_39.png",
      transform: "scale(0.4)",
    },
    {
      image: "images/aboutme/me_40.png",
      transform: "scale(0.6)",
    },
    {
      image: "images/aboutme/me_41.png",
      transform: "scale(1)",
    },
    {
      image: "images/aboutme/me_42.png",
      transform: "scale(0.5)",
    },
    {
      image: "images/aboutme/me_43.png",
      transform: "scale(0.4)",
    },
    {
      image: "images/aboutme/6.jpeg",
      transform: "scale(0.8)",
    },
  ];

  images = images.map((imageData, index) => {
    imageData.delay = index * 400;
    return imageData;
  });

  return (
    <Layout>
      <Header />

      <div className="w-full image-box-height m-auto relative px-5 md:px-10 lg:px-20 overflow-hidden md:overflow-visible">
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
          I have a strong interest in new technologies, innovation and ethics –
          and how things we design impact our world and ourselves. I believe in
          the importance of detail and being passionate about everything I do.
          I'm all in for design thinking and life centered design, lifelong
          learning – and having fun!
        </p>

        <p className="untitled-text text-md mb-4">
          I have a 15 years background as an editorial Art Director focusing on
          new design, concept development, redesign and production of
          (award-winning!) magazines, among others SJ's on-board magazine Kupé.
          I have also been teaching in Magazine Production and designed 20+
          illustrated facts books for several different publishing houses.
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
            <li className="mb-4 leading-relaxed">
              Designing Ethical Futures <br />
              @Copenhagen Institute of Interaction Design 2019
            </li>
            <li className="mb-4 leading-relaxed">
              Frontend Developer <br />
              @Technigo Boot Camp 2018
            </li>
            <li className="mb-4 leading-relaxed">
              Design Lead <br />
              @Hyper Island 2017-2018
            </li>
            <li className="mb-4 leading-relaxed">
              HTML & CSS <br />
              @Tjejer Kodar 2017
            </li>
            <li className="mb-4 leading-relaxed">
              Social Video <br />
              @Bergs 2017
            </li>
            <li className="mb-4 leading-relaxed">
              UX / UI Design <br />
              @Berghs 2016
            </li>
            <li className="mb-4 leading-relaxed">
              Copywriting <br />
              @Berghs 2009
            </li>
            <li className="mb-4 leading-relaxed">
              Illustration <br />
              @Parsons The New School, NY 2008
            </li>
            <li className="mb-4 leading-relaxed">
              Art <br />
              @Konstskolan Basis 2001-2002
            </li>
            <li className="mb-4 leading-relaxed">
              Magazine Design <br />
              @Bergs 1999 - 2000
            </li>
            <li className="mb-4 leading-relaxed">
              History of Literature <br />
              @LTU 1998
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-center mt-20 md:mt-0">
          <div className="pb-6 mb-8  ">
            <span className="border-b border-black pb-3 ">Skills I have</span>
          </div>
          <ul>
            <li className="mb-2">Art Direction</li>
            <li className="mb-2">Adobe CS</li>
            <li className="mb-2">Book Design</li>
            <li className="mb-2">Brand Strategy</li>
            <li className="mb-2">Concepting & Ideation</li>
            <li className="mb-2">Concept Development</li>
            <li className="mb-2">Copywriting</li>
            <li className="mb-2">Digital Design</li>
            <li className="mb-2">Design Lead</li>
            <li className="mb-2">Editorial Design</li>
            <li className="mb-2">Experience Design</li>
            <li className="mb-2">Figma</li>
            <li className="mb-2">Frontend Development</li>
            <li className="mb-2">Graphic Design</li>
            <li className="mb-2">HTML & CSS</li>
            <li className="mb-2">Illustration</li>
            <li className="mb-2">Javascript</li>
            <li className="mb-2">Magazine Design</li>
            <li className="mb-2">Next.js</li>
            <li className="mb-2">React</li>
            <li className="mb-2">Runway ML</li>
            <li className="mb-2">UI + UX design</li>
            <li className="mb-2">Workshop Facilitation </li>
          </ul>
        </div>
      </section>

      <div className="w-full h-40 md:h-60 " />

      <Navlinks />
      <style jsx>
        {`
          .image-box-height {
            height: clamp(20rem, 75vw, 30rem);
          }
        `}
      </style>
    </Layout>
  );
}
