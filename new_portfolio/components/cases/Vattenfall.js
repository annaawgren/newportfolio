
export const Vattenfall = {
    title: "Vattenfall projects",
    description: "Creative lead for Vattenfall",
    introtext: (
        <div>
            <h2 className="untitled-text mb-12 md:mb-20 mt-2 text-md text-center ">
                <span className="border-b-2 border-black pb-4">
                    Art Direction and creative tech for Vattenfall
                </span>
            </h2>

            <p className="untitled-text text-md">
                Since 2022 I've been the Art Director for Make Your Marks main client Vattenfall.
                Here are some (success!) projects that I have been highly involved in.{" "}
            </p>

            <style jsx>{`
        .indent {
          text-indent: 3rem;
        }
      `}</style>
        </div>
    ),
    heroimageWork: "VF_Freedome_copy.jpg",
    heroimageCase: "VF_Freedome_copy.jpg",
    overviewSize: "medium",
    images: (
        <div className="grid grid-cols-2 gap-10 ">
            <div className=" ... ">
                <img
                    src="/images/cases/vattenfall/VF_Freedome_copy.jpg"
                    className=" object-cover w-full"
                />
                {/* <p className="untitled-text mt-8 caption ">
          Me and Anna trying out our model.
        </p> */}
            </div>

            <div className=" ... ">
                <img
                    src="/images/cases/ml/ml-ideo.png"
                    className=" object-cover w-full"
                />
            </div>

            <div className="col-span-2 ... relative ">
                <video
                    src="/images/cases/ml/ml-movie.mov"
                    className="object-cover w-full"
                    controls
                    muted
                    preload
                />
                <div className="absolute top-1/3 text-center soehne w-full text-white">
                    <span>Play</span>
                </div>
            </div>

            <div className="w-full h-40 md:h-60 " />
        </div>
    ),
};
