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
        Department I desiged an interface for a mood based
        playlist picker and an in-room music experience for <span>
          <a
            href="https://w-hotels.marriott.com/"
            target="_blank"
            className="text-red-300"
          >
            W Hotels
          </a>
        </span>.
      </p>
      <p className="untitled-text text-md indent">
        Typically when you enter a hotel room anywhere in the world you get a similar experience.
        A nice clean room. But one that is quiet and "cold". W hotels asked us to help them change
        that with music, color and emotion. Their London hotel was undergoing major renovations in
        2019 and became the perfect location to try out our new solution.
        We designed a never before seen music interface for iPad and TV.
      </p>
      <p className="untitled-text text-md indent mb-8">
        I did the UI based on the idea that the interaction should
        feel organic and fluid – like an emotion. Like a lava lamp or liquid light show.
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
        <video
          src="/images/cases/w/w hotels.mp4"
          className="object-contain w-full"
          autoPlay
          muted
          loop
          playsInline
        />

      </div>

      <div className="col-span-2 ...">



        <div className="...  h-auto">
          {/* <img src="w-hotels-video.mp4" className="object-contain w-full" /> */}
          <video
            src="w-hotels-video.mp4"
            className="object-contain w-full"
            autoPlay
            muted
            loop
            playsInline
          />

        </div>
      </div>

      <div className="col-span-2  ...">
        <img src="/images/cases/w/w3.png" className="object-contain w-full" />
      </div>

      <div className="w-full h-40 md:h-60 " />
    </div>
  ),
};
