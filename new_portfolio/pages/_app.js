import { useRouter } from "next/router";
import { useEffect } from "react";

import "../index.css";

/**
 * Scroll to top of new page when following a link instead of starting
 * at same scroll position as prev page and then smoothly scrolling up.
 *
 * Solution from next.js issue #20125:
 * https://github.com/vercel/next.js/issues/20125#issuecomment-757547865
 */
function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      document.documentElement.classList.add("normal-scroll");
    });
    router.events.on("routeChangeComplete", () => {
      document.documentElement.classList.remove("normal-scroll");
    });
  }, []);
}
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useNormalScrollRoutes();
  return <Component {...pageProps} />;
}
