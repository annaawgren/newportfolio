export const NewbieCase = {
  title: "Newbie Tech Exploration Lab",
  description:
    "Facilitated and hands-on creative tech exploration for beginners.",
  introtext: (
    <div>
      <h2 className="untitled-text mb-12 md:mb-20 mt-2 text-md text-center ">
        <span className="border-b-2 border-black pb-4">
          Newbie Tech Exploration Lab
        </span>
      </h2>
      <p className="untitled-text text-md">
        I am co-founder of{" "}
        <span>
          <a href="https://newbietech.io" target="_blank" className="">
            Newbie Tech Exploration Lab
          </a>
        </span>{" "}
        where we facilitate hands-on creative tech workshops for beginners.
        Newbie Tech was born in the idea that we wanted to lower the threshold
        and create opportunities for tech newbies to explore – and have fun!
        Also because we are forever curious and passionate about exploring
        emerging technologies.
      </p>
      <p className="untitled-text text-md indent ">
        Up until now we have facilitated workshops in Machine Learning as a
        creative tool and every second sunday we do an online Sunday Session
        where we learn and try out new technologies – and build things like{" "}
        <span>
          <a
            href="https://newbietech.io"
            target="_blank"
            className="no-indent "
          >
            The Rapplication
          </a>
        </span>{" "}
        using OpenAi's GPT2 and Runway ML, for example.
      </p>
      <style jsx>{`
        .linear-bg {
          background: -webkit-linear-gradient(
            190deg,
            #fd9191 0%,
            #dafc93 50%,
            #7bfec0 100%
          );
           {
            /* -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; */
          }
        }
        .indent {
          text-indent: 3rem;
        }

        .no-indent {
          text-indent: 0rem;
        }

        a {
          display: inline-block;
          text-decoration: none;
        }
        a::after {
          content: " ";
          display: block;
          width: 100%;
          height: 2px;
          background: pink;
          transition: width 0.5s;
        }
        a:hover::after {
          width: 0%;
        }
        a:hover {
          font-family: "untitled-italic";
        }
      `}</style>
    </div>
  ),
  heroimageWork: "newbie-hero.png",
  heroimageCase: "kupe-test.png",
  overviewSize: "small",
  images: (
    <div className="grid grid-cols-2 gap-10 ">
      <div className="col-span-2 ... ">
        <img
          src="/images/cases/newbietech/newbie-collage.png"
          className=" object-cover w-full"
        />
      </div>

      <div className="col-span-2 ... ">
        <img
          src="/images/cases/newbietech/newbiescreen.png"
          className=" object-cover w-full"
        />
      </div>

      <div className="w-full h-40 md:h-60 " />
    </div>
  ),
};
