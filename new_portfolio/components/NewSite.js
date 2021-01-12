import Link from "next/link";

export default function NewSite() {
  return (
    <section className="w-full flex flex-col justify-between items-center text-center">
      <h1>New site coming 2021</h1>
      <h1>
        For portfolio inqueries e-mail me{" "}
        <a href="info@annaagren.se">info@annaagren.se</a>
      </h1>

      <div className="w-full mt-20 container bg-red-50">
        <img
          className="container height-img fixed bottom-0 object-cover mx-auto"
          src="./images/dance.gif"
        />
      </div>

      <style jsx>{`
        .height-img-box {
          height: 40rem;
        }

        .height-img {
          height: 40rem;
        }
      `}</style>
    </section>
  );
}
