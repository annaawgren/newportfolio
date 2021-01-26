export const MlProjectionCase = {
  title: "Computer Vision Project",
  description: "An Interactive Machine Learning Projection",
  introtext: (
    <div>
      <h2 className="untitled-text mb-12 md:mb-20 mt-2 text-md text-center ">
        <span className="border-b-2 border-black pb-4">
          An interactive Machine Learning Projection
        </span>
      </h2>

      <p className="untitled-text text-md">
        This interactive machine learning projection was my personal project at
        the Design Lead / Interactive Art Director program at Hyper Island. I
        and my fellow student Anna O wanted to do a machine learning project
        that was gonna make people go wow. So we created this interactive
        projection with the machine learning software Wekinator and VJ software
        Resolume Arena, using the webcam and computer vision making the lines on
        the wall followed your dancing.{" "}
      </p>
      <p className="untitled-text text-md indent">
        Things we practiced in the project: Using machine learning as a creative
        tool, process design, creative documentation, and co-creation.{" "}
      </p>
      <p className="untitled-text text-md indent mb-8">
        Things learned: How to train machine learning models, how to use OSC
        protocol, how to work with Wekinator and controlling it via OSC, to be
        agile in the process, and align expectations with knowledge – and that
        working with machine learning is so much fun and that it gives you a
        delightful feeling of empowerment when you can teach your computer to do
        things that you want it to do. 😃
      </p>
      <style jsx>{`
        .indent {
          text-indent: 3rem;
        }
      `}</style>
    </div>
  ),
  heroimageWork: "dance.gif",
  heroimageCase: "kupe-test.png",
  overviewSize: "medium",
  images: (
    <div className="grid grid-cols-2 gap-10 ">
      <div className=" ... ">
        <img
          src="/images/cases/ml/ml-processdance.gif"
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
        <div className="absolute top-1/3  biggestfont text-center soehne w-full text-white">
          <span>Play</span>
        </div>
      </div>

      <div className="w-full h-40 md:h-60 " />
    </div>
  ),
};
