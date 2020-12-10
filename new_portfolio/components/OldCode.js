{
  /* <section className="case-one bg-white w-full h-screen sticky top-0 z-10 flex flex-col items-center justify-top pt-20 pb-20 ">
          <div className="w-full flex flex-col items-center justify-center">
            <img
              className="mb-4 bg-gray-100 w-5/6 object-cover banan"
              src="/images/wtest.png"
              alt=""
            />

            <h2 className="untitled-text mb-2 mt-6 text-md">Case Heading</h2>
            <p className="untitled-text text-center mb-4 w-5/6 text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              imperdiet facilisis non, elit ipsum venenatis justo, egestas
              mattis.
            </p>
          </div>
        </section>

        <section className="case-one bg-white w-full h-screen sticky top-0 z-10 flex flex-col items-center justify-top pt-20 pb-20 ">
          <div className="w-full flex flex-col items-center justify-center">
            <img
              className="mb-4 bg-gray-100 w-5/6 object-cover banan"
              src="/images/wtest.png"
              alt=""
            />

            <h2 className="untitled-text mb-2 mt-6 text-md">Case Heading</h2>
            <p className="untitled-text text-center mb-4 w-5/6 text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              imperdiet facilisis non, elit ipsum venenatis justo, egestas
              mattis.
            </p>
          </div>
        </section>

        <section className="case-one bg-white w-full h-screen sticky top-0 z-10 flex flex-col items-center justify-top pt-20 pb-20 ">
          <div className="w-full flex flex-col items-center justify-center">
            <img
              className="mb-4 bg-gray-100 w-5/6 object-cover banan"
              src="/images/wtest.png"
              alt=""
            />

            <h2 className="untitled-text mb-2 mt-6 text-md">Case Heading</h2>
            <p className="untitled-text text-center mb-4 w-5/6 text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              imperdiet facilisis non, elit ipsum venenatis justo, egestas
              mattis.
            </p>
          </div>
        </section>
      </main> */

  <style jsx>{`
    @keyframes show {
      0% {
        opacity: 0;
        transform: translate(0, 40px) scale(0.85);
      }
      100% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      section.in-view img {
        animation: show 0.8s 0s ease-out;
      }
      section img {
        opacity: 0;
      }
      section.in-view img {
        opacity: 1;
      }
    }

    section {
      perspective: 800deg;
    }
     {
      @media (prefers-reduced-motion: no-preference) and (min-width: 900px) {
        html,
        body {
          height: 100%;
          overflow: hidden;
        }

        main {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
        }

        section {
          scroll-snap-align: start;
        }
      }
    }
  `}</style>;
}

useLayoutEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.2) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      threshold: [0.0, 0.2, 1.0],
    }
  );

  sections.forEach((section) => {
    observer.observe(section);

    // const img = section.querySelector("img")

    // document.addEventListener("mousemove", function (event) {
    //   const aimX = (event.pageX - (window.innerWidth / 2)) / 20
    //   const aimY = (event.pageY – (window.innerHeight /2)) / -20
    //   div.style.transform = `rotateX(${aimY}deg) rotateY(${aimX}deg)`
    // })
  });
});
