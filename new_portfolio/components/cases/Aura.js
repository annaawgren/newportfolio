export const AuraCase = {
    title: "Aura exprimentation",
    description: "Creative tech + art direction",
    introtext: (
        <div>
            <h2 className="untitled-text mb-12 md:mb-20 mt-2 text-md text-center ">
                <span className="border-b-2 border-black pb-4">
                    Aura Experimentation
                </span>
            </h2>
            <p className="untitled-text text-md">
                What if your aura could be visible. An ongoing experimentation. Visualisation in Sora.
            </p>

            <style jsx>{`
        .indent {
          text-indent: 3rem;
        }
      `}</style>
        </div>
    ),
    heroimageWork: "aura.gif",
    heroimageCase: "aura.gif",
    overviewSize: "medium",
    images: (
        <div className="grid grid-cols-2 gap-10 ">
            <div className=" ">
                <video
                    src="/images/cases/aura/aura.gif"
                    className="object-cover w-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>


        </div>
    ),
    backgroundcolor: "bg-blue-100",
};
