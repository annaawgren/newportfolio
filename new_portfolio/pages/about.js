import Header from "../components/Header";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Navlinks from "../components/Navlinks";
import { useEffect, useState } from "react";

export default function About() {
  const [imageClassNames, setImageClassNames] = useState(
    "mx-auto w-96 px-5 transition-all	duration-500 ease-in-out opacity-0 delay-300"
  );

  useEffect(() => {
    setImageClassNames(
      "mx-auto w-96 px-5 transition-all duration-500 ease-in-out opacity-100 delay-300"
    );
  }, []);

  return (
    <Layout>
      <Header />

      <motion.div
        className="w-full mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <img className={imageClassNames} src="./images/anna_wa.png" />
      </motion.div>

      <motion.section
        className="text-justify w-full flex flex-col items-center mt-10 mb-20 px-5 md:px-10 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="untitled-text text-md">
          Hello world <span>👋🏻</span> I'm an enthusiastic and strategic Art
          Director and Designer with Frontend Developer skills and experience
          design at heart. I'm passionate about solving problems that matter and
          creating awesome and meaningful content, design, products and
          experiences - on all things digital, IRL and paper – for people to
          love.
        </p>

        <p className="untitled-text text-md indent">
          I'm also a happy tech enthusiast with a love for machine learning and
          I have a strong interest in new technologies, innovation and ethics –
          and how things we design impact our world and ourselves. I believe in
          the importance of detail and being passionate about everything I do.
          I'm all in for design thinking and life centered design, lifelong
          learning – and having fun!
        </p>

        <p className="untitled-text text-md indent">
          I have a 15 years background as an editorial Art Director focusing on
          new design, concept development, redesign and production of
          (award-winning!) magazines, among others SJ's on-board magazine Kupé.
          I have also been teaching in Magazine Production and designed 20+
          illustrated facts books for several different publishing houses.
        </p>
        <p className="untitled-text text-md indent">
          In 2018, I leveled up my digital skills at the Design Lead full-time
          program at Hyper Island and learned to code at Technigo’s Frontend
          Developer Boot Camp. Since then I have worked as a Designer and
          Frontend developer at the (now closed) digital product Studio
          Department in Stockholm. I'm also co-founder of{" "}
          <span>
            <a
              href="https://newbietech.io"
              target="_blank"
              className="text-red-300"
            >
              Newbie Tech Exploration Lab
            </a>
          </span>{" "}
          where we facilitate hands-on creative tech explorations for beginners.
        </p>
        <p className="untitled-text text-md mb-4">
          I'm currently available for hire, full-time or freelance!
        </p>
      </motion.section>

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
            <span className="border-b border-black pb-3 ">
              Skills that I have
            </span>
          </div>
          <ul>
            <li className="mb-2">Art Direction</li>
            <li className="mb-2">Book Design</li>
            <li className="mb-2">Brand Strategy</li>
            <li className="mb-2">Concepting & Ideation</li>
            <li className="mb-2">Concept Development</li>
            <li className="mb-2">Digital Design</li>
            <li className="mb-2">Editorial Design</li>
            <li className="mb-2">Experience Design</li>
            <li className="mb-2">Figma</li>
            <li className="mb-2">Frontend Development</li>
            <li className="mb-2">Graphic Design</li>
            <li className="mb-2">HTML & CSS</li>
            <li className="mb-2">Illustrator</li>
            <li className="mb-2">InDesign</li>
            <li className="mb-2">Javascript</li>
            <li className="mb-2">Keynote</li>
            <li className="mb-2">Magazine Design</li>
            <li className="mb-2">Next.js</li>
            <li className="mb-2">Photoshop</li>
            <li className="mb-2">React</li>
            <li className="mb-2">Runway ML</li>
            <li className="mb-2">UI design</li>
            <li className="mb-2">Visual storytelling</li>
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

          .indent {
            text-indent: 3rem;
          }
        `}
      </style>
    </Layout>
  );
}
