export const BrygganCase = {
    title: "Alandias mentorprogram Bryggan",
    description: "Art director and Video Creative",
    introtext: (
        <div>
            <h2 className="untitled-text mb-12 md:mb-20 mt-2 text-md text-center ">
                <span className="border-b-2 border-black pb-4">
                    The Alandia Bryggan Mentor Program
                </span>
            </h2>
            <p className="untitled-text text-md">
                xxxxxxxxx            </p>

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
