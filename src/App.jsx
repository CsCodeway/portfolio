import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="overflow-hidden relative">
      <Navbar />
      <HomePage />
      <About />
      <Service />
      <Skills />
      <Testimonial />
      <Blogs />
      <Contact />
      <p className="text-sm text-gray-600 bottom-2 left-0 right-0 absolute text-center">
        Design & Copyright by{" "}
        <a href="https://cscodeway.vercel.app/" target="_blank">
          CsCodeway
        </a>
      </p>
    </div>
  );
};
export default App;
