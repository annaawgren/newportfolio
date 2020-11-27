import Link from "next/link";

export default function Navlinks() {
    return (
        <React.Fragment>
        <div className="flex flex-row justify-between w-full px-20 pb-10 fixed bottom-0 ">
        <Link href="/work" >
              <a className="soehne-heading block bg-blue text-6xl">Work</a>
            </Link>
            <Link href="/about">
              <a className="soehne-heading block bg-blue text-6xl">About</a>
            </Link>
            <Link href="/contact">
              <a className="soehne-heading block bg-blue text-6xl">Contact</a>
            </Link>
        </div>

        <style jsx>
      {`
      .soehne-heading {
        font-family: "Soehne-buch";
      }
      `}
    </style>
        </React.Fragment>
    )
}