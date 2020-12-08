import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center justify-center px-5 md:px-10 lg:px-20 sticky top-0 bg-white pt-10 pb-8">
      <Link href="/">
        <div className="flex flex-col items-center justify-center">
          <div className="soehne-heading text-sm">Anna Wikberg Agren</div>

          <div className="soehne-heading text-2xl md:text-3xl">
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
