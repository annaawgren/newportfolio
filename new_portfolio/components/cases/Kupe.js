export const KupeCase = {
  title: "Kupe",
  description: <p>Art Director at SJ's onboard magazine Kupé</p>,
  introtext: (
    <div>
      <h2 className="untitled-text mb-6 mt-8 text-md text-center">
        Case Heading
      </h2>
      <p className="untitled-text mb-4 text-md text-justify">
        I was the Art Director for Kupé Magazine between 2011-2017. I did
        everything between being responsible for the design-team, to concept
        development (I redesigned it twice), putting together teams and
        assigning illustrators and photographers, to writing articles, headings
        and editing content – to designing it all. Here’s Jens Lapidus, shot by
        Linda Alfvegren.
      </p>
    </div>
  ),
  heroimage: "kupe-test.png",
  images: (
    <div className="grid grid-cols-2  gap-4 md:gap-4">
      <div className="... bg-gray-400 h-auto w-full flex flex-col items-center">
        <img src="/images/claratest.png" />
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
    </div>
  ),
  backgroundcolor: "bg-red-100",
};
