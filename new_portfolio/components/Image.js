export default function Image(props) {
  const { imageSrc, hasHoverEffect = false } = props;

  return (
    <React.Fragment>
      <div
        className={`outer-img-box w-full border-2 border-transparent ${
          hasHoverEffect ? "has-hover-effect" : ""
        }`}
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
        .has-hover-effect:hover {
          filter: drop-shadow(4px 4px 0px #ffdada);
        }

        .outer-img-box {
          position: relative;
          max-width: 700px;
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
