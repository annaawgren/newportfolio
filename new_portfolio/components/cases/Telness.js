export const TelnessCase = {
  title: "Telness",
  description: "Visual identity for Sweden's top telecom company",
  introtext: (
    <div>
      <h2 className="untitled-text mb-12 md:mb-20 mt-2 text-md text-center ">
        <span className="border-b-2 border-black pb-4">
          Telness Visual Identity
        </span>
      </h2>
      <p className="untitled-text text-md">
        As a Designer at digital product studio Department I was responsible for
        evolving telecom company Telness’ design system – to make their visual
        identity more warm, vivid and welcoming.
      </p>
      <p className="untitled-text text-md indent">
        Telness is all about simplifying for customers and exceeding their
        expectations on business telecom and wanted their visual identity to
        promote this. I overlooked all the design components, how to work with
        typography (changing font color from black to warmer petroleum blue),
        adding more and vivid colors, neat and simple pictograms, welcoming
        speech bubbles and animated arrows for more life, for example.
      </p>
      <p className="untitled-text text-md indent mb-8">
        See the implemented design here{" "}
        <span>
          <a
            href="https://www.telness.se/"
            target="_blank"
            className="text-red-300"
          >
            telness.se
          </a>
        </span>{" "}
      </p>
      <style jsx>{`
        .indent {
          text-indent: 3rem;
        }
      `}</style>
    </div>
  ),
  heroimageWork: "telness-hero-new.png",
  heroimageCase: "kupe-test.png",
  overviewSize: "small",
  images: (
    <div className="grid grid-cols-2 gap-10 ">
      <div className="col-span-2 ... ">
        <img
          src="/images/cases/telness/telness-icons.png"
          className=" object-cover w-full"
        />
      </div>

      <div className="col-span-2 ... ">
        <img
          src="/images/cases/telness/telness-speech.png"
          className=" object-cover w-full"
        />
      </div>

      <div className="w-full h-40 md:h-60 " />
    </div>
  ),
};
