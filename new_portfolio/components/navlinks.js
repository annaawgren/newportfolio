import Link from "next/link";

export default function Navlinks() {
  return (
    <React.Fragment>
      <div className="flex flex-row justify-between w-full px-5 md:px-10 lg:px-20 pb-10 fixed bottom-0 z-50">
        <Link href="/work">
          <a className="ivar-fine hover:text-gray-200 block bg-blue text-4xl md:text-6xl lg:text-7xl ">
            Work
          </a>
        </Link>
        <Link href="/about">
          <a className="ivar-fine hover:text-gray-200 block bg-blue text-4xl md:text-6xl lg:text-7xl">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="ivar-fine hover:text-gray-200 block bg-blue text-4xl md:text-6xl lg:text-7xl">
            Contact
          </a>
        </Link>
      </div>

      <style jsx>
        {`
          .soehne-heading {
            font-family: "Soehne-buch";
          }
          .ivar-fine {
            font-family: "Ivar-fine-light";
          }
          .ivar-fineIta {
            font-family: "Ivar-fine-light-italic";
          }
        `}
      </style>
    </React.Fragment>
  );
}
