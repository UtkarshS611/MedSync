import Navbar from "../Navbar/Navbar";
import Features from "./_Components/Features";
import Footer from "./_Components/Footer";
import TextGradient from "./_Components/TextGradient";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard/chat");
  };

  return (
    <>
      <main className="h-screen py-2 overflow-hidden sm:rounded-b-[3rem] home-gradient">
        <div className="grid place-items-center sm:p-0 p-2">
          <Navbar />
        </div>
        <section className="flex flex-col items-center py-32 gap-4">
          <div>
            <TextGradient />
          </div>
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl flex flex-col items-center">
            <span>Your health companion:</span>
            <span>Analyze, Chat, Check with next gen AI</span>
            <span>and remind seamlessly</span>
          </div>
          <div className="text-black/60 text-center text-sm sm:text-base">
            Powered by Google Gemini AI: Chat, analyze reports, check symptoms,
            and track medicines effortlessly.
          </div>
          <div className="p-1 border-[1px] border-black/60 rounded-lg">
            <button
              onClick={handleNavigate}
              className="bg-black/90 text-white rounded-sm px-4 py-2"
            >
              Get started
            </button>
          </div>
          <div className="mt-6 h-[50vh] w-[80%] sm:w-[50vw] bg-white/20 border-[1.5px] border-white/20 p-3 rounded-[1rem]">
            <div className="h-full w-full rounded-[0.5rem] overflow-hidden">
              <img
                className="h-[inherit] w-full"
                src="/preview.png"
                alt="preview"
              />
            </div>
          </div>
        </section>
      </main>
      <Features />
      <Footer />
    </>
  );
};

export default Home;
