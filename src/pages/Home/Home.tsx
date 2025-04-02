import AboutMe from "../../components/HomePage/AboutMe/AboutMe";
import Education from "../../components/HomePage/Education/Education";
import Experience from "../../components/HomePage/Experience/Experience";
import Hero from "../../components/HomePage/Hero/Hero";
import Projects from "../../components/HomePage/Projects/Projects";
import ShortResume from "../../components/HomePage/ShortResume/ShortResume";
import MyServices from '../../components/HomePage/MyServices/MyServices';
import Testimonials from "../../components/HomePage/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <ShortResume />
      <div className="mt-12 text-white bg-[#0E1330] py-[100px] relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <Education />
          <Experience />
        </div>
        <div className="hidden lg:block size-[400px] rounded-full bg-[#0696e799] bg-opacity-30 blur-[280px] absolute top-[50px] left-10"></div>
        <div className="hidden lg:block size-[400px] rounded-full bg-[#0696e799] bg-opacity-30 blur-[250px] absolute top-[50px] right-10"></div>
      </div>
      <Projects />
      <MyServices />
      <Testimonials/>
    </div>
  );
};

export default Home;
