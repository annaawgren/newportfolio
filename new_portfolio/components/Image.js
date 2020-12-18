import { InView, useInView } from "react-intersection-observer";

const THRESHOLD = [0.25, 0.5, 0.75];

export default function Image(props) {
  const [ref, inView, entry] = useInView({ threshold: THRESHOLD });

  console.log(entry && entry.intersectionRatio);

  let extraClasses = "";

  if (entry && entry.intersectionRatio >= 0.5) {
    console.log("hej");
    extraClasses = "opacity-1 -translate-y-9 delay-150 duration-300";
  } else {
    console.log("hola");
    extraClasses = "opacity-0";
  }

  const { imageSrc } = props;
  return (
    <React.Fragment>
      <div
        className={`outer-img-box w-full transition transform  ${extraClasses}`}
        ref={ref}
      >
        <div className="inner-img-box w-full h-full ">
          <div className="h-full flex justify-center items-center ">
            <img
              className="h-full w-full object-cover"
              src={`/images/${imageSrc}`}
              alt=""
            />
          </div>
        </div>
      </div>

      <style jsx>
        {`
        .outer-img-box {
          position: relative;
          max-width: 600px;
          margin: auto;
        }
        
        .outer-img-box:before {
            display: block;
            content: "";
            width: 100%;
            padding-top: calc((304 / 460) * 100%);
          }
        }

        .outer-img-box > .inner-img-box {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
        `}
      </style>
    </React.Fragment>
  );
}
