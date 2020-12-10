import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-row items-center justify-center px-5 md:px-10 lg:px-20 z-10 sticky top-0 pt-8 pb-8">
      <Link href="/">
        <a className="flex flex-row items-center justify-between w-full">
          <p className="ivar-light text-md block leading-10">
            Anna Wikberg Agren
          </p>

          <p className="ivar-light text-md block">Art Director \ Designer</p>
        </a>
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
          .logo-big {
            font-size: 9rem;
            line-height: 1;
          }
        `}
      </style>
    </header>
  );
}
