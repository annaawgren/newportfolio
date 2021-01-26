export const WCase = {
  title: "W Hotels in-room music experience",
  description: "UI design for a mood based playlist picker",
  introtext: (
    <div>
      <h2 className="untitled-text mb-12 md:mb-20 mt-2 text-md text-center ">
        <span className="border-b-2 border-black pb-4">
          W Hotels in-room music experience
        </span>
      </h2>

      <p className="untitled-text text-md">
        As a Designer and Frontend Developer at Digital Product Studio
        Department I was part of designing an interface for a mood based
        playlist picker and an in-room music experience for W Hotels.
      </p>
      <p className="untitled-text text-md indent">
        Typically when you enter a hotel room anywhere in the world you get a
        similar experience. A nice clean room. But one that is quiet and "cold".
        W hotels asked Department to help them change that with music, color and
        emotion.
      </p>
      <p className="untitled-text text-md indent mb-8">
        I did the UI design and came up with the idea that the player should
        feel organic and fluid – like an emotion! – when you move your finger
        over the iPad. Like a lava lamp or liquid light show. Then my colleague
        Fredrik built an absolutely fantastic solution. Press play below to see
        the player in action.
      </p>
      <style jsx>{`
        .indent {
          text-indent: 3rem;
        }
      `}</style>
    </div>
  ),
  heroimageWork: "w2.png",
  overviewSize: "large",
  images: (
    <div className="grid grid-cols-2 gap-10 ">
      <div className="col-span-2 ... ">
        <img
          src="/images/cases/w/w-hero.png"
          className=" object-cover w-full"
        />
      </div>

      <div className="col-span-2 ...">
        <div className="...  h-auto">
          <img src="/images/cases/w/w2.png" className="object-contain w-full" />
        </div>
      </div>

      <div className="col-span-2  ...">
        <img src="/images/cases/w/w3.png" className="object-contain w-full" />
      </div>

      <div className="w-full h-40 md:h-60 " />
    </div>
  ),
};
