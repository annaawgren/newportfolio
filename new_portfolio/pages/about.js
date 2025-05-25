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

      <div className="w-full mb-12 md:mb-20 px-20">
        <img className={imageClassNames} src="./images/anna_wa.png" />
      </div>

      <section className="text-justify w-full flex flex-col items-center mt-10 mb-20 px-5 md:px-10 lg:px-20">
        <p className="untitled-text text-md">
          Hello <span>👋🏻</span> I’m a curious and continuously learning creative with frontend skills and
          experience design at heart. Passionate about exploring emerging technologies,
          systems thinking and working towards preferred futures – with a strong interest in ethics and how
          the things we design impact our world and ourselves. I believe in the importance of detail, and solving problems that matter to create awesome
          and meaningful content, communication and experiences – for people to love.
        </p>

        <p className="untitled-text text-md indent">
          I have a 15-year background as an editorial Art Director, focusing on new design, concept development, redesigns
          and production of (award-winning!) magazines, including SJ’s on-board magazine Kupé.
          I’ve also taught Magazine Production and designed 20+ nonfiction books for various publishing houses.
        </p>

        <p className="untitled-text text-md indent">
          In 2018 I leveled up my digital skills at Hyper Island’s full-time Design Lead program and
          learned to code at Technigo’s Frontend Developer Boot Camp.
          After that I worked as a Designer and Frontend Developer at <span>
            <a
              href="https://department.se/"
              target="_blank"
              className="text-red-300"
            >
              Department
            </a>
          </span>,
          and founded the learning community <span className="font-extrabold">Newbie Tech Exploration Lab</span>,
          where we facilitated hands-on creative tech explorations for beginners.
        </p>

        <p className="untitled-text text-md indent">
          Since 2021 I’ve been working as a Senior Art Director at <span>
            <a
              href="https://www.makeyourmark.se/"
              target="_blank"
              className="text-red-300"
            >
              Make Your Mark
            </a>
          </span>,
          focusing on creative solutions that engage and make an impact – across concepts,
          campaigns, UI/UX design and video for clients like Vattenfall, Systembolaget and Advania.
        </p>

        <p className="untitled-text text-md indent">
          In 2024 I started leading Make Your Mark’s AI development, exploring what’s next
          in content creation and communication. Since 2025 I'm sharing my time between Make Your Mark and <span>
            <a
              href="https://www.aheadgroup.se/"
              target="_blank"
              className="text-red-300"
            >
              Ahead Group
            </a>
          </span>, where I combine creativity, strategy, and emerging technology as a Creative Technologist in the Insights and AI Team.
        </p>

        <p className="untitled-text text-md indent">
          Beyond work, you’ll often find me in the Tänndalen mountains with my family or at the gym crossfitting.
          I’m happy where I’m at – but always curious to connect, collaborate, or just share a good <span>☕️</span>!
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
            <li className="mb-2">Advania</li>
            <li className="mb-2">Alandia</li>
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
            <li className="mb-2">Systembolaget</li>
            <li className="mb-2">Technigo</li>
            <li className="mb-2">Telness</li>
            <li className="mb-2">Tidningsstatistik / TS</li>
            <li className="mb-2">Tidningen Vi</li>
            <li className="mb-2">Tjejer Kodar</li>
            <li className="mb-2">Tukan Förlag</li>
            <li className="mb-2">Vattenfall</li>
            <li className="mb-2">W Hotel</li>
            <li className="mb-2">Världskulturmuséerna</li>
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
              Video Motion Production <br />
              @Berghs School of Communication 2021
            </li>

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
            <li className="mb-2">AI Strategy</li>
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
            <li className="mb-2">HeyGen</li>
            <li className="mb-2">HTML & CSS</li>
            <li className="mb-2">Illustrator</li>
            <li className="mb-2">InDesign</li>
            <li className="mb-2">Javascript</li>
            <li className="mb-2">Keynote</li>
            <li className="mb-2">Magazine Design</li>
            <li className="mb-2">Midjourney</li>
            <li className="mb-2">Next.js</li>
            <li className="mb-2">Photoshop</li>
            <li className="mb-2">Process Design</li>
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
