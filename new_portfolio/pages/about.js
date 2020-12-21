import Header from "../components/Header";
import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";

export default function About() {
  return (
    <Layout>
      <Header />

      <div className="w-full h-48 md:h-60 " />

      <section className="about-txt about-margin-top w-full flex flex-col items-center mb-40 px-5 md:px-10 lg:px-20">
        <p className="untitled-text text-md mb-4">
          Hi! I'm an enthusiastic and strategic Art Director and Designer with
          Frontend Developer skills and experience design at heart. I'm forever
          curious and passionate about solving problems that matter and creating
          awesome and meaningful content, design, products and experiences - on
          all things digital, IRL and paper – for people to love!
        </p>
        <p className="untitled-text text-md mb-4">
          I have a long background as an editorial Art Director focusing on new
          design, concept development, redesign and production of
          (award-winning!) magazines. I have also designed 20+ illustrated facts
          books for a number of different publishing houses.
        </p>
        <p className="untitled-text text-md mb-4">
          I leveled up my digital skills at the Design Lead full-time program at
          Hyper Island and learned to code at Technigo’s Frontend Developer Boot
          Camp inn 2018. Since then I have worked as a Designer and Frontend
          developer at digital product Studio Department. I'm also a happy tech
          enthusiast and co-founder of{" "}
          <span>
            <a href="https://newbietech.io" target="_blank">
              Newbie Tech Exploration Lab
            </a>
          </span>{" "}
          where we facitlitate hands-on creative tech explorations for
          beginners.
        </p>
        <p className="untitled-text text-md mb-4">
          I live with my two kids Allan and Doris and boyfriend in a house in
          Sköndal and love to spend as much time as possible in the mountains –
          where I can go cross country skiing.
        </p>
      </section>

      <div className="w-full ">
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
      </div>

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
