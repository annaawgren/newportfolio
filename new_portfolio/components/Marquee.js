import React, { useState, useEffect } from "react";

const Marqueen = (props) => {
  const title = (
    <span>
      <span className=" text-yellow-400">• </span>
      <span className="white"> I'm currently up for hire </span>
      <span className=" text-yellow-200">• </span>
      <span className="white"> Let's talk! </span>
    </span>
  );

  const marqueeText = new Array(100).fill(title);

  return <div>{marqueeText}</div>;
};

export default function Marquee() {
  return (
    <div className="banner marquee w-100 ">
      <a href="#ourlabs" class="">
        <span className="marquee-animator">
          <Marqueen />
        </span>
      </a>
      <style jsx>{`
        @keyframes moveLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-3000px);
          }
        }

        @keyframes moveRight {
          0% {
            transform: translateX(-3000px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-animator {
          animation: moveLeft 100s linear infinite;
          white-space: nowrap;
          position: relative;
          display: block;
        }

        .header-banner {
          box-shadow: 0 0 5px 0px rgba(65, 65, 65, 0.5);
        }

        .banner {
          height: auto;
          padding: 10px 0;
          z-index: 3;
        }
        .bomb {
          display: inline-block;
        }

        .underlined-ml {
          border-bottom: solid 2px #000;
          padding-bottom: 2px;
        }

        .underlined-ml:hover {
          border-bottom: solid 0 #000;
        }

        .banner a {
          text-decoration: none;
        }

        .banner.hidden {
          display: none;
        }

        .marquee {
          width: 100%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
