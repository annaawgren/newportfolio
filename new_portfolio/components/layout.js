export default function Layout({ children }) {
  return (
    <div>
      {children}
      <style jsx global>
        {`
          @font-face {
            font-family: "Ivar-display";
            src: url("/fonts/IvarDisplayCondensed-SemiBold.woff") format("woff"),
              url("/fonts/IvarDisplayCondensed-SemiBold.otf") format("otf");
          }
          @font-face {
            font-family: "Ivar-fine-light";
            src: url("/fonts/IvarFine-light.woff") format("woff"),
              url("/fonts/IvarFine-light.otf") format("otf");
          }
          @font-face {
            font-family: "Ivar-fine-light-italic";
            src: url("/fonts/IvarFine-lightItalic.woff") format("woff"),
              url("/fonts/IvarFine-lightItalic.otf") format("otf");
          }

          @font-face {
            font-family: "Untitled";
            src: url("/fonts/untitled-sans-test-regular.woff") format("woff"),
              url("/fonts/UntitledSansTest-Regular.otf") format("otf");
          }

          body,
          html {
            font-family: "untitled", sans-serif;
            scroll-behavior: smooth;
            color: black;
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
            width: 10px;
            background-color: red;
          }

          ::-webkit-scrollbar-thumb {
            background-color: black;
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
          }

          .bigfont {
            font-size: clamp(4rem, 18vw, 8rem);
            line-height: 1;
          }

          .mediumfont {
            font-size: clamp(0.2rem, 8vw, 2.2rem);
            line-height: 1;
          }

          .plusfont {
            font-size: clamp(2.5rem, 8vw, 8rem);
            line-height: 1;
          }
        `}
      </style>
    </div>
  );
}
