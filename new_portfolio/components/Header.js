import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-row items-center justify-center px-5 md:px-10 lg:px-20 sticky top-0 bg-white pt-8 pb-8">
      <Link href="/">
        <div className="flex flex-row items-center justify-between w-full">
          <a>
            <p className="ivar-light text-lg block">Anna Wikberg Agren</p>
          </a>
          <a>
            <p className="ivar-light text-lg block">Art Director \ Designer</p>
          </a>
        </div>
      </Link>

      <style jsx>
        {`
          .soehne-heading {
            font-family: "Soehne-drei";
          }
          .ivar-heading {
            font-family: "Ivar-display";
          }
          .ivar-light {
            font-family: "Ivar-fine-light";
          }
          .ivar-lightIta {
            font-family: "Ivar-fine-light-italic";
          }
          .untitled-text {
            font-family: "Untitled";
            font-size: 16px;
            line-height: 1.5;
          }
        `}
      </style>
    </header>
  );
}
