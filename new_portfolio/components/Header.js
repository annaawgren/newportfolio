import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-1/6 flex flex-col items-center justify-center px-5 md:px-10 lg:px-20 fixed top-0 bg-white ">
      <Link href="/">
        <div className="flex flex-col items-center justify-center">
          <div className="ivar-heading text-md">Anna Wikberg Ågren</div>

          <div className="ivar-heading text-5xl md:text-5xl">
            Art Director \ Designer
          </div>
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
