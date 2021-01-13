import { InView, useInView } from "react-intersection-observer";

export default function ImageBig(props) {
  const { imageSrc } = props;
  return (
    <React.Fragment>
      <div className="outer-img-box w-full">
        <div className="inner-img-box w-full h-full ">
          <div className="h-full flex justify-center items-center ">
            <img
              className="h-full w-full object-fit"
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
          max-width: 1200px;
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
