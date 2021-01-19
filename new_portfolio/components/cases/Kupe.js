export const KupeCase = {
  title: "Kupe",
  description: <p>Art Director at SJ's onboard magazine Kupé</p>,
  introtext: (
    <div>
      <h2 className="untitled-text mb-6 mt-2 text-md text-center">
        Kupe Magazine
      </h2>
      <p className="untitled-text mb-4 text-md ">
        I was the Art Director for SJ’s onboard magazine Kupé (reaching about
        300 000 readers a month) between 2011–2017. Our mission was to make a
        contemporary and popular magazine filled with the best of what current
        culture, trends, travels, and SJ’s destinations had to offer. I did
        everything from concept development (I redesigned Kupé twice), putting
        together teams and assigning Sweden’s top illustrators and
        photographers, writing headings, some articles, and editing content – to
        designing it all. All images below shot by Linda Alfvegren, art
        direction by me.
      </p>
    </div>
  ),
  heroimageWork: "Kupe.gif",
  heroimageCase: "kupe-test.png",
  overviewSize: "large",
  images: (
    <div className="grid grid-cols-2  gap-4 md:gap-4">
      <div className="... bg-gray-400 h-auto w-full flex flex-col items-center">
        <img src="/images/cases/claratest.png" />
      </div>

      <div className="... bg-red-300">
        <div className="... bg-gray-400 h-auto">
          <img src="/images/telnesstest.png" />
        </div>
      </div>

      <div className="col-span-2 ... bg-green-100 ">
        <div className="... bg-gray-400 h-auto ">
          <img src="/images/wtest.png" className="h-auto object-cover w-full" />
        </div>
      </div>
      <div className="col-span-2 ...">
        <div className="... bg-gray-400 h-auto">
          <img src="/images/dance.gif" className="object-contain w-full" />
        </div>
      </div>
      <div className=" ...">
        <div className="... bg-gray-400 h-auto">
          <img src="/images/telnesstest.png" />
        </div>
      </div>
      <div className=" ...">
        <div className="... bg-gray-400 h-auto">
          <img src="/images/claratest.png" />
        </div>
      </div>

      <div className="w-full h-40 md:h-60 " />
    </div>
  ),
};
