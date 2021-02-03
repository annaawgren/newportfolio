export default function Layout({ children }) {
  return (
    <div>
      {children}
      <style jsx global>
        {`
          @font-face {
            font-family: "Soehne";
            src: url("/fonts/soehne-breit-web-buch.woff") format("woff"),
              url("/fonts/soehne-breit-web-buch.woff2") format("woff2"),
              url("/fonts/soehne-breit-web-buch.eot") format("eot");
          }
          @font-face {
            font-family: "Soehne-halbfett";
            src: url("/fonts/soehne-breit-web-halbfett.woff") format("woff"),
              url("/fonts/soehne-breit-web-halbfett.woff2") format("woff2"),
              url("/fonts/soehne-breit-web-halbfett.eot") format("eot");
          }
          @font-face {
            font-family: "Untitled";
            src: url("/fonts/untitled-sans-web-regular.woff") format("woff"),
              url("/fonts/untitled-sans-web-regular.woff2") format("woff2"),
              url("/fonts/untitled-sans-web-regular.eot") format("eot");
          }
          @font-face {
            font-family: "Untitled-italic";
            src: url("/fonts/untitled-sans-web-regular-italic.woff")
                format("woff"),
              url("/fonts/untitled-sans-web-regular-italic.woff2")
                format("woff2"),
              url("/fonts/untitled-sans-web-regular-italic.eot") format("eot");
          }

          body,
          html {
            font-family: "untitled", sans-serif;
            scroll-behavior: smooth;
            color: black;
            cursor: src= "/images/spinner.png";
          }

          a:hover {
            text-decoration: none;
          }
          summary:focus,
          button:focus,
          input:focus {
            outline: none;
            box-shadow: inset 0 0 0 2px #e6b771;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus {
            -webkit-text-fill-color: #5a4e3e;
            box-shadow: 0 0 0px 1000px #fcf9d5 inset;
            font-size: 16px;
          }

          ::-webkit-scrollbar {
            width: 12px;
            background-color: white;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(
              190deg,
              #ffdada 0%,
              #f3ffda 35%,
              #d1ffe9 100%
            );
          }
          .soehne {
            font-family: "Soehne";
          }
          .soehne-halbfett {
            font-family: "Soehne-halbfett";
          }
          .untitled-text {
            font-family: "Untitled";
          }
          .untitled-italic {
            font-family: "Untitled-italic";
          }
        `}
      </style>
    </div>
  );
}
