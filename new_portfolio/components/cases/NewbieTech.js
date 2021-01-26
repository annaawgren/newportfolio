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
        I am co-founder of Newbie Tech Exploration Lab where we facilitate
        hands-on creative tech workshops for beginners. Newbie Tech was born in
        the idea that we wanted to lower the threshold and create opportunities
        for tech newbies to explore – and have fun! Also because we are forever
        curious and passionate about exploring emerging technologies.
      </p>
      <p className="untitled-text text-md indent">
        Up until now we have facilitated workshops in Machine Learning as a
        creative tool and I'm also the designer and developer of our homepage{" "}
        <span>
          <a
            href="https://text-generator.vercel.app/"
            target="_blank"
            className="text-red-300"
          >
            newbietech.io
          </a>
        </span>{" "}
      </p>
      <p className="untitled-text text-md indent mb-8">
        Every second sunday we do an online Sunday Session where we learn and
        try out new technologies – and build things like{" "}
        <span>
          <a
            href="https://newbietech.io"
            target="_blank"
            className="text-red-300"
          >
            The Rapplication
          </a>
        </span>{" "}
        using OpenAi's GPT2 and Runway ML, for example.
      </p>
      <style jsx>{`
        .indent {
          text-indent: 3rem;
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

      <div className="w-full h-40 md:h-60 " />
    </div>
  ),
};
