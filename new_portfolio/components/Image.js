export default function Image() {
  return (
    <React.Fragment>
      <div className="outer-img-box w-full">
        <div className="inner-img-box bg-green-100 w-full h-full ">
          <div className="h-full flex justify-center items-center ">
            <img
              className="h-full object-cover"
              //   src="/images/wtest.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <style jsx>
        {`
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
