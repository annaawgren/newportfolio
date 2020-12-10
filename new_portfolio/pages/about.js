import Header from "../components/Header";
import Layout from "../components/Layout";
import Navlinks from "../components/Navlinks";

export default function About() {
  return (
    <Layout>
      <Header />
      About
      <footer className="footer-img w-full h-screen flex flex-col items-center justify-center ">
        <img
          src="/images/anna-test.jpeg"
          className="text-center bg-gray-100 w-full h-auto object-cover"
        />
      </footer>
      <Navlinks />
    </Layout>
  );
}
